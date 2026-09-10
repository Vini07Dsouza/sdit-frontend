import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface InfoCardProps {
  title: string;
  description: string;
  /** When false, the card is visibly marked as unverified placeholder content. */
  verified?: boolean;
  icon?: ReactNode;
  meta?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function InfoCard({
  title,
  description,
  verified = false,
  icon,
  meta,
  actionLabel,
  onAction,
}: InfoCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-card">
      {icon ? (
        <span className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          {icon}
        </span>
      ) : null}

      {meta ? <p className="text-eyebrow text-violet">{meta}</p> : null}

      <h3 className="mt-1 text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

      {!verified ? (
        <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-dashed border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-violet" />
          Placeholder content — pending verification
        </p>
      ) : null}

      {actionLabel && onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-semibold text-card-foreground transition-colors hover:border-violet hover:text-violet"
        >
          {actionLabel}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </button>
      ) : null}
    </article>
  );
}
