import type { ChatError, ChatErrorKind } from "@/types/chat";

/**
 * Centralised HTTP layer. The Flask backend base URL comes ONLY from
 * VITE_API_BASE_URL (see .env.example). No secrets ever live in the frontend.
 */

export const API_BASE_URL: string = (import.meta.env["VITE_API_BASE_URL"] ?? "").replace(
  /\/+$/,
  "",
);

/** Set VITE_USE_MOCK_CHAT=true during frontend development without a backend. */
export const USE_MOCK_CHAT: boolean =
  import.meta.env["VITE_USE_MOCK_CHAT"] !== undefined &&
  import.meta.env["VITE_USE_MOCK_CHAT"] !== ""
    ? String(import.meta.env["VITE_USE_MOCK_CHAT"]).toLowerCase() === "true"
    : !API_BASE_URL;

export const DEFAULT_TIMEOUT_MS = 30_000;

const FRIENDLY_MESSAGES: Record<ChatErrorKind, string> = {
  offline: "You appear to be offline. Check your connection and try again.",
  network: "Unable to connect to SDIT AI Assistant right now. Please try again.",
  timeout: "SDIT AI Assistant is taking longer than expected. Please try again.",
  empty: "SDIT AI Assistant did not return a response. Please try again.",
  not_found:
    "I could not find verified information for that yet. Try rephrasing your question or contact the college office.",
  server: "SDIT AI Assistant is temporarily unavailable. Please try again in a moment.",
  unknown: "Something went wrong. Please try again.",
};

export class ApiError extends Error implements ChatError {
  readonly kind: ChatErrorKind;

  constructor(kind: ChatErrorKind, technicalMessage?: string) {
    super(technicalMessage ?? kind);
    this.name = "ApiError";
    this.kind = kind;
  }

  /** Safe, user-facing copy. Raw technical details are never surfaced. */
  get userMessage(): string {
    return FRIENDLY_MESSAGES[this.kind];
  }
}

export function toChatError(error: unknown): ChatError {
  if (error instanceof ApiError) {
    return { kind: error.kind, message: error.userMessage };
  }
  return { kind: "unknown", message: FRIENDLY_MESSAGES.unknown };
}

interface RequestOptions {
  method?: "GET" | "POST";
  body?: unknown;
  /** Provide FormData for multipart uploads (voice). */
  formData?: FormData;
  timeoutMs?: number;
  signal?: AbortSignal;
}

function buildUrl(path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalised}`;
}

export async function apiRequest<TResponse>(
  path: string,
  options: RequestOptions = {},
): Promise<TResponse> {
  const { method = "POST", body, formData, timeoutMs = DEFAULT_TIMEOUT_MS, signal } = options;

  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    throw new ApiError("offline");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const onExternalAbort = () => controller.abort();
  signal?.addEventListener("abort", onExternalAbort);

  let response: Response;
  try {
    response = await fetch(buildUrl(path), {
      method,
      headers: formData ? {} : { "Content-Type": "application/json" },
      body: formData ?? (body === undefined ? null : JSON.stringify(body)),
      signal: controller.signal,
    });
  } catch (error) {
    if (controller.signal.aborted) throw new ApiError("timeout");
    throw new ApiError("network", error instanceof Error ? error.message : undefined);
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener("abort", onExternalAbort);
  }

  if (response.status === 404) throw new ApiError("not_found");
  if (response.status >= 500) throw new ApiError("server", `HTTP ${response.status}`);
  if (!response.ok) throw new ApiError("network", `HTTP ${response.status}`);

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new ApiError("empty");
  }

  if (data === null || typeof data !== "object") throw new ApiError("empty");
  return data as TResponse;
}
