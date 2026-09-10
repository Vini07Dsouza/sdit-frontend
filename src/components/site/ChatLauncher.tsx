import { Link } from "@tanstack/react-router";
import { Bot } from "lucide-react";

/**
 * Floating corner chat launcher with Midnight Orchid aesthetic.
 */
export function ChatLauncher() {
  return (
    <Link
      to="/chat"
      aria-label="Open SDIT AI Assistant"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-3 rounded-full border border-[#7C3AED]/35 bg-[#0D0B18] px-4 py-2.5 text-[#FAF9F7] shadow-2xl transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF6B4A] hover:shadow-[0_0_24px_-4px_rgba(255,107,74,0.4)] sm:right-6 sm:bottom-6 sm:px-5 sm:py-3"
    >
      <div
        aria-hidden="true"
        className="relative grid size-9 place-items-center rounded-full bg-[#191724] text-[#FF6B4A] shadow-inner ring-1 ring-[#C4B5FD]/40"
      >
        <Bot className="size-5 text-[#FF6B4A]" />
        <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-[#FF6B4A] ring-2 ring-[#0D0B18]" />
      </div>
      <div className="text-left leading-snug">
        <span className="block text-sm font-bold tracking-tight text-[#FAF9F7]">
          SDIT AI Assistant
        </span>
        <span className="block text-xs font-semibold text-[#2DD4BF]">Ask anything about SDIT</span>
      </div>
    </Link>
  );
}
