import { Bot } from "lucide-react";

/** Typing / loading state shown while the Flask backend is generating an answer. */
export function LoadingIndicator() {
  return (
    <li className="flex gap-3" aria-live="polite">
      <span
        aria-hidden="true"
        className="mt-1 grid size-9 shrink-0 place-items-center rounded-xl bg-[#21152F] text-[#FF5C7A] ring-1 ring-[#A78BFA]/40 shadow-[0_0_15px_-3px_rgba(255,92,122,0.3)]"
      >
        <Bot className="size-4 text-[#FF5C7A]" />
      </span>
      <div className="flex items-center gap-2 rounded-2xl border border-[#A78BFA]/25 bg-[#21152F] px-4 py-3 text-[#F7F7FA] shadow-md">
        <span className="sr-only">SDIT NOVA is preparing a response</span>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            aria-hidden="true"
            className="size-2 animate-bounce rounded-full bg-[#FF5C7A]"
            style={{ animationDelay: `${i * 140}ms` }}
          />
        ))}
        <span className="ml-1 text-xs font-medium text-[#AAA5B8]">Thinking…</span>
      </div>
    </li>
  );
}
