import { ArrowDown } from "lucide-react";

export function JumpToLatest({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-soft"
    >
      <ArrowDown aria-hidden="true" className="size-3.5" />
      Jump to latest
    </button>
  );
}
