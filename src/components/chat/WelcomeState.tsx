import { Bot } from "lucide-react";
import { QuickActions } from "./QuickActions";

interface WelcomeStateProps {
  onSelectAction: (query: string) => void;
  disabled?: boolean;
}

/**
 * Friendly customer-support welcome state inspired by IndiGo 6Eskai,
 * featuring original SDIT branding and compact quick actions.
 */
export function WelcomeState({ onSelectAction, disabled = false }: WelcomeStateProps) {
  return (
    <div className="rounded-2xl border border-[#C4B5FD]/25 bg-[#191724] p-5 shadow-xl shadow-[#0D0B18]/60 sm:p-7 text-[#FAF9F7]">
      <div className="flex items-start gap-3.5 sm:gap-4">
        <div
          aria-hidden="true"
          className="relative grid size-12 shrink-0 place-items-center rounded-2xl bg-[#0D0B18] text-[#FF6B4A] ring-1 ring-[#C4B5FD]/45 shadow-[0_0_20px_-4px_rgba(255,107,74,0.35)]"
        >
          <Bot className="size-6 text-[#FF6B4A]" />
          <span className="absolute -top-0.5 -right-0.5 size-3 rounded-full bg-[#FF6B4A] ring-2 ring-[#0D0B18]" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold tracking-tight text-[#FAF9F7] sm:text-xl">
              Hi 👋 Welcome to SDIT
            </h2>
            <span className="rounded-full bg-[#FF6B4A]/15 px-2 py-0.5 text-[10px] font-bold text-[#FF6B4A] border border-[#FF6B4A]/30">
              SERA AI
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-[#9A95A8] sm:text-base">
            How can I help you today?
          </p>
          <p className="mt-0.5 text-xs text-[#9A95A8]/80">
            Choose a quick topic below or type your question in the box.
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="mb-3 text-[11px] font-semibold tracking-wider text-[#2DD4BF] uppercase">
          Quick Actions
        </p>
        <QuickActions onSelect={onSelectAction} disabled={disabled} variant="grid" />
      </div>
    </div>
  );
}
