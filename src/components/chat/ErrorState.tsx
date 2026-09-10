import { AlertTriangle, RotateCcw } from "lucide-react";
import type { ChatError } from "@/types/chat";

interface ErrorStateProps {
  error: ChatError;
  onRetry: () => void;
  disabled?: boolean;
}

/** Polished, non-technical error surface with a retry affordance. */
export function ErrorState({ error, onRetry, disabled = false }: ErrorStateProps) {
  return (
    <li>
      <div
        role="alert"
        className="flex flex-col gap-3 rounded-2xl border border-[#FF5C7A]/30 bg-[#21152F] p-4 sm:flex-row sm:items-center sm:justify-between text-[#F7F7FA]"
      >
        <p className="flex items-start gap-3 text-sm text-[#F7F7FA]">
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#FF5C7A]" />
          <span>
            <span className="block font-semibold text-[#FF5C7A]">Assistant unavailable</span>
            <span className="text-[#AAA5B8]">{error.message}</span>
          </span>
        </p>
        <button
          type="button"
          onClick={onRetry}
          disabled={disabled}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FF5C7A] px-4 py-2.5 text-sm font-semibold text-[#0B0B12] transition-all hover:bg-[#ff758f] disabled:opacity-50"
        >
          <RotateCcw aria-hidden="true" className="size-4" />
          Retry
        </button>
      </div>
    </li>
  );
}
