import { quickActionList } from "@/config/quickActions";

interface QuickActionsProps {
  onSelect: (query: string) => void;
  disabled?: boolean;
  variant?: "grid" | "chips";
}

export function QuickActions({ onSelect, disabled = false, variant = "grid" }: QuickActionsProps) {
  if (variant === "chips") {
    return (
      <div
        className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto px-4 py-2"
        role="region"
        aria-label="Quick topic chips"
      >
        {quickActionList.map(({ id, label, query, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(query)}
            disabled={disabled}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#A78BFA]/25 bg-[#21152F] px-3 py-1.5 text-xs font-medium text-[#F7F7FA] shadow-xs transition-all hover:border-[#35E0D0] hover:bg-[#2b1e3d] hover:text-[#35E0D0] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icon className="size-3.5 text-[#35E0D0]" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full" role="region" aria-label="Quick actions">
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {quickActionList.map(({ id, label, query, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(query)}
            disabled={disabled}
            className="group flex min-h-[50px] items-center gap-3 rounded-xl border border-[#A78BFA]/25 bg-[#21152F] p-3 text-left text-xs font-semibold text-[#FAF9F7] shadow-xs transition-all hover:border-[#FF6B4A] hover:bg-[#2b1e3d] hover:shadow-[0_0_15px_-4px_rgba(255,107,74,0.3)] disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
          >
            <span
              aria-hidden="true"
              className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#0B0B12] text-[#FF6B4A] ring-1 ring-[#A78BFA]/30 transition-colors"
            >
              <Icon className="size-4 text-[#FF6B4A]" />
            </span>
            <span className="leading-snug text-[#FAF9F7]">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
