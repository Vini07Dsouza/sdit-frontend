import { useCallback, useRef, useState } from "react";
import { chatApi } from "@/services/chatApi";
import { toChatError } from "@/services/api";
import type { ChatError, ChatMessage } from "@/types/chat";

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/**
 * All chat state lives here; components stay presentational.
 * The backend owns knowledge and conversational context — this hook only keeps
 * the visible transcript and the session id returned by the backend.
 */
export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ChatError | null>(null);
  const sessionIdRef = useRef<string | undefined>(undefined);
  const lastQueryRef = useRef<string | null>(null);

  const ask = useCallback(async (rawMessage: string, options?: { echo?: string }) => {
    const message = rawMessage.trim();
    if (!message) return;

    lastQueryRef.current = message;
    setError(null);
    setIsLoading(true);
    setMessages((prev) => [
      ...prev,
      {
        id: createId(),
        role: "user",
        content: options?.echo?.trim() || message,
        createdAt: new Date().toISOString(),
        status: "sent",
      },
    ]);

    try {
      const response = await chatApi.sendMessage(message, sessionIdRef.current);
      if (response.session_id) sessionIdRef.current = response.session_id;

      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "assistant",
          content: response.answer,
          createdAt: new Date().toISOString(),
          status: "sent",
          ...(response.sources && response.sources.length > 0 ? { sources: response.sources } : {}),
        },
      ]);
    } catch (caught) {
      setError(toChatError(caught));
    } finally {
      setIsLoading(false);
    }
  }, []);

  /** Resends the last question, replacing the failed turn. */
  const retry = useCallback(() => {
    const last = lastQueryRef.current;
    if (!last) return;
    setMessages((prev) => {
      const next = [...prev];
      if (next.at(-1)?.role === "user") next.pop();
      return next;
    });
    void ask(last);
  }, [ask]);

  const reset = useCallback(() => {
    sessionIdRef.current = undefined;
    lastQueryRef.current = null;
    setError(null);
    setIsLoading(false);
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    error,
    ask,
    send: ask,
    retry,
    reset,
    hasConversation: messages.length > 0,
  };
}
