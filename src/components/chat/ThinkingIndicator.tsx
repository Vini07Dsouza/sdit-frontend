import { chatbotConfig } from "@/config/chatbotConfig";

/** Subtle assistant thinking state. No fake progress. */
export function ThinkingIndicator() {
  return (
    <div className="flex items-center gap-2" role="status" aria-live="polite">
      <span aria-hidden="true" className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="size-1.5 animate-bounce rounded-full bg-violet"
            style={{ animationDelay: `${i * 140}ms` }}
          />
        ))}
      </span>
      <span className="text-sm text-muted-foreground">{chatbotConfig.thinkingLabel}</span>
    </div>
  );
}
