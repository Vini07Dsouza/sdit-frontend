import { apiRequest, ApiError, USE_MOCK_CHAT } from "./api";
import { getMockChatResponse } from "@/data/mockChat";
import type { ChatRequest, ChatResponse, VoiceChatResponse } from "@/types/chat";

/**
 * The only place in the app that talks to the Flask chat endpoints.
 * UI components must call these methods, never fetch/axios directly.
 *
 * To disconnect mock mode entirely: remove the USE_MOCK_CHAT branches and the
 * src/data/mockChat.ts import.
 */
export const chatService = {
  /** POST {VITE_API_BASE_URL}/api/chat */
  async sendMessage(
    message: string,
    sessionId?: string,
    signal?: AbortSignal,
  ): Promise<ChatResponse> {
    if (USE_MOCK_CHAT) {
      return getMockChatResponse(message, sessionId);
    }

    const payload: ChatRequest = sessionId ? { message, session_id: sessionId } : { message };
    const data = await apiRequest<ChatResponse>("/api/chat", {
      method: "POST",
      body: payload,
      ...(signal ? { signal } : {}),
    });

    if (typeof data.answer !== "string" || data.answer.trim() === "") {
      throw new ApiError("empty");
    }
    return data;
  },

  /**
   * POST {VITE_API_BASE_URL}/api/chat/voice
   * Integration placeholder: the Flask backend performs all speech processing.
   * No transcription or speech recognition happens in the frontend.
   */
  async sendVoiceMessage(
    audio: Blob,
    sessionId?: string,
    signal?: AbortSignal,
  ): Promise<VoiceChatResponse> {
    const formData = new FormData();
    formData.append("audio", audio, "recording.webm");
    if (sessionId) formData.append("session_id", sessionId);

    return apiRequest<VoiceChatResponse>("/api/chat/voice", {
      method: "POST",
      formData,
      ...(signal ? { signal } : {}),
    });
  },
};
