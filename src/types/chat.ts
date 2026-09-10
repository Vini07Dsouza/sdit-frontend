/**
 * Chat contract shared with the future Python Flask backend.
 * Keep these interfaces in sync with the Flask API; nothing else in the app
 * should redefine the request/response shape.
 */

export interface Source {
  /** Human readable label, e.g. "SDIT Admissions Handbook". */
  title?: string;
  /** Optional link to the source document / official webpage. */
  url?: string;
  /** Optional short excerpt returned by the retrieval layer. */
  snippet?: string;
}

export interface ChatRequest {
  message: string;
  session_id?: string;
}

export interface ChatResponse {
  answer: string;
  sources?: Source[];
  session_id?: string;
}

export interface VoiceChatResponse extends ChatResponse {
  /** Transcript of the uploaded audio, when the backend returns one. */
  transcript?: string;
}

export type ChatRole = "user" | "assistant";

export type ChatMessageStatus = "sent" | "pending" | "error";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  /** ISO timestamp. */
  createdAt: string;
  sources?: Source[];
  status?: ChatMessageStatus;
}

export type ChatErrorKind =
  "offline" | "network" | "timeout" | "empty" | "not_found" | "server" | "unknown";

export interface ChatError {
  kind: ChatErrorKind;
  /** User-facing, non-technical message. */
  message: string;
}
