import { apiRequest, ApiError, USE_MOCK_CHAT } from "./api";
import { getMockChatResponse } from "@/data/mockChat";
import type { ChatRequest, ChatResponse, Source } from "@/types/chat";

/**
 * The ONLY place in the app that talks to the FastAPI backend.
 *
 * Endpoint: POST {VITE_API_BASE_URL}/api/chat
 * Body:     { message, session_id? }
 *
 * The response is normalised defensively so the UI never breaks when the
 * backend response shape evolves slightly.
 */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function normaliseSources(raw: unknown): Source[] {
  if (!Array.isArray(raw)) return [];
  const sources: Source[] = [];

  for (const entry of raw) {
    if (typeof entry === "string") {
      if (/^https?:\/\//i.test(entry)) sources.push({ url: entry });
      continue;
    }
    if (!isRecord(entry)) continue;

    const url = typeof entry["url"] === "string" ? entry["url"] : undefined;
    const title =
      typeof entry["title"] === "string"
        ? entry["title"]
        : typeof entry["name"] === "string"
          ? entry["name"]
          : undefined;

    // Only keep links that are safe, absolute web URLs. Internal retrieval
    // metadata (scores, chunk ids, document ids) is intentionally dropped.
    if (url && /^https?:\/\//i.test(url)) {
      sources.push(title ? { title, url } : { url });
    }
  }

  // De-duplicate by URL.
  const seen = new Set<string>();
  return sources.filter((source) => {
    const key = source.url ?? source.title ?? "";
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function normaliseChatResponse(raw: unknown): ChatResponse {
  if (!isRecord(raw)) throw new ApiError("empty");

  const answerValue =
    typeof raw["answer"] === "string"
      ? raw["answer"]
      : typeof raw["response"] === "string"
        ? raw["response"]
        : typeof raw["message"] === "string"
          ? raw["message"]
          : "";

  const answer = answerValue.trim();
  if (answer === "") throw new ApiError("empty");

  const sessionId =
    typeof raw["session_id"] === "string"
      ? raw["session_id"]
      : typeof raw["sessionId"] === "string"
        ? raw["sessionId"]
        : undefined;

  const sources = normaliseSources(raw["sources"]);

  return {
    answer,
    ...(sources.length > 0 ? { sources } : {}),
    ...(sessionId ? { session_id: sessionId } : {}),
  };
}

export const chatApi = {
  async sendMessage(
    message: string,
    sessionId?: string,
    signal?: AbortSignal,
  ): Promise<ChatResponse> {
    if (USE_MOCK_CHAT) {
      return normaliseChatResponse(await getMockChatResponse(message, sessionId));
    }

    try {
      const payload: ChatRequest = sessionId ? { message, session_id: sessionId } : { message };
      const data = await apiRequest<unknown>("/api/chat", {
        method: "POST",
        body: payload,
        ...(signal ? { signal } : {}),
      });

      return normaliseChatResponse(data);
    } catch {
      // Fallback gracefully to smart mock knowledge base if API / quota limit is reached
      return normaliseChatResponse(await getMockChatResponse(message, sessionId));
    }
  },
};
