import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useChat } from "@/hooks/useChat";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatMessageItem } from "@/components/chat/ChatMessageItem";
import { LoadingIndicator } from "@/components/chat/LoadingIndicator";
import { ErrorState } from "@/components/chat/ErrorState";
import { WelcomeState } from "@/components/chat/WelcomeState";
import { QuickActions } from "@/components/chat/QuickActions";
import { MessageComposer } from "@/components/chat/MessageComposer";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "SDIT AI Assistant — Shree Devi Institute of Technology" },
      {
        name: "description",
        content:
          "Official AI Assistant for Shree Devi Institute of Technology, Mangaluru — Ask about courses, admissions, fees, placements, departments, and campus facilities.",
      },
      { property: "og:title", content: "SDIT AI Assistant — Shree Devi Institute of Technology" },
      {
        property: "og:description",
        content: "Simple guided college chatbot for Shree Devi Institute of Technology, Mangaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  const { messages, isLoading, error, send, retry, reset, hasConversation } = useChat();
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading, error]);

  const handleClear = () => {
    setDraft("");
    reset();
  };

  const handleActionSelect = (query: string) => {
    void send(query);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0B12] text-[#F7F7FA]">
      <ChatHeader onNewChat={handleClear} disabled={isLoading} />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-3 py-4 sm:px-4 sm:py-6">
          {!hasConversation ? (
            <div className="my-auto py-4">
              <WelcomeState onSelectAction={handleActionSelect} disabled={isLoading} />
            </div>
          ) : (
            <ul className="space-y-4" aria-live="polite" aria-busy={isLoading}>
              {messages.map((message) => (
                <ChatMessageItem key={message.id} message={message} />
              ))}
              {isLoading ? <LoadingIndicator /> : null}
              {error ? <ErrorState error={error} onRetry={retry} disabled={isLoading} /> : null}
            </ul>
          )}

          <div ref={endRef} />
        </div>

        {/* When in conversation, offer quick chips above composer for easy 1-tap topic selection */}
        {hasConversation ? (
          <div className="border-t border-[#A78BFA]/15 bg-[#0B0B12]/80 px-3 py-2">
            <div className="mx-auto max-w-3xl">
              <QuickActions variant="chips" onSelect={handleActionSelect} disabled={isLoading} />
            </div>
          </div>
        ) : null}

        <div className="sticky bottom-0">
          <MessageComposer
            value={draft}
            onValueChange={setDraft}
            onSend={(message) => void send(message)}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}
