import { Link } from "@tanstack/react-router";
import { ArrowLeft, Bot, RotateCcw } from "lucide-react";
import { chatbotConfig } from "@/config/chatbotConfig";

interface ChatHeaderProps {
  onNewChat: () => void;
  disabled?: boolean;
}

/**
 * Clean, mobile-first header with original SDIT navy branding,
 * online status indicator, and quick "New chat" button.
 */
export function ChatHeader({ onNewChat, disabled = false }: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-30 shrink-0 border-b border-[#C4B5FD]/20 bg-[#0D0B18] text-[#FAF9F7] shadow-md shadow-[#0D0B18]/60">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3 px-3 py-3 sm:px-5">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <Link
            to="/"
            aria-label="Back to SDIT website"
            className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#191724] text-[#9A95A8] transition-colors hover:bg-[#242133] hover:text-[#FAF9F7]"
          >
            <ArrowLeft aria-hidden="true" className="size-5" />
          </Link>

          <div className="relative">
            <div
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-[#191724] ring-1 ring-[#C4B5FD]/45 shadow-[0_0_20px_-4px_rgba(124,58,237,0.3)]"
            >
              <img
                src="/images/sdit_nova_logo.png"
                alt="SDIT NOVA"
                className="size-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span
              className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-[#FF6B4A] ring-2 ring-[#0D0B18]"
              title="Online"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h1 className="truncate text-sm font-bold text-[#FAF9F7] sm:text-base">
                {chatbotConfig.chatbotName}
              </h1>
              <span className="rounded-md bg-[#FF6B4A]/15 px-1.5 py-0.5 text-[10px] font-semibold text-[#FF6B4A] border border-[#FF6B4A]/30">
                Official
              </span>
            </div>
            <p className="flex items-center gap-1.5 truncate text-[11px] text-[#9A95A8] sm:text-xs">
              <span className="size-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
              <span>Online · {chatbotConfig.tagline}</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onNewChat}
          disabled={disabled}
          aria-label="Start a new conversation"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#FF6B4A]/35 bg-[#191724] px-3 py-1.5 text-xs font-semibold text-[#FAF9F7] transition-all hover:border-[#FF6B4A] hover:bg-[#242133] hover:shadow-[0_0_16px_-4px_rgba(255,107,74,0.4)] disabled:opacity-40 sm:px-3.5 sm:text-sm"
        >
          <RotateCcw aria-hidden="true" className="size-3.5 text-[#2DD4BF]" />
          <span>New chat</span>
        </button>
      </div>
    </header>
  );
}
