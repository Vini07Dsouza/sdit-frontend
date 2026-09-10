import { AlertTriangle, Phone, RotateCcw } from "lucide-react";
import { chatbotConfig, hasPhone } from "@/config/chatbotConfig";
import type { ChatError } from "@/types/chat";

interface ChatErrorStateProps {
  error: ChatError;
  onRetry: () => void;
  disabled?: boolean;
}

/** Friendly, non-technical failure surface with a working retry. */
export function ChatErrorState({ error, onRetry, disabled = false }: ChatErrorStateProps) {
  return (
    <li>
      <div
        role="alert"
        className="rounded-2xl border border-destructive/30 bg-destructive/5 p-3.5 text-sm"
      >
        <p className="flex items-start gap-2 text-foreground">
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-destructive" />
          <span>{error.message}</span>
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onRetry}
            disabled={disabled}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground disabled:opacity-50"
          >
            <RotateCcw aria-hidden="true" className="size-3.5" />
            Retry
          </button>
          {hasPhone ? (
            <a
              href={`tel:${chatbotConfig.officialPhone}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground"
            >
              <Phone aria-hidden="true" className="size-3.5" />
              Call SDIT
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
}
