import type { ChatResponse } from "@/types/chat";

/**
 * DEVELOPMENT ONLY.
 *
 * Mock chat responses used while the Python Flask backend is not yet available.
 * Enabled with VITE_USE_MOCK_CHAT=true. All mock logic is isolated in this file
 * so it can be deleted in a single step once the backend is connected.
 *
 * These are deliberately NOT fabricated institutional facts — they return the
 * same "official information will be added here" placeholder wording used
 * across the site.
 */

const PLACEHOLDER_ANSWER =
  "Mock mode is enabled, so this is a development placeholder rather than a real answer.\n\nOfficial information will be added here once the SDIT AI Assistant backend is connected.";

export async function getMockChatResponse(
  message: string,
  sessionId?: string,
): Promise<ChatResponse> {
  await new Promise((resolve) => setTimeout(resolve, 900));

  return {
    answer: `You asked: "${message.trim()}"\n\n${PLACEHOLDER_ANSWER}`,
    sources: [],
    ...(sessionId ? { session_id: sessionId } : {}),
  };
}
