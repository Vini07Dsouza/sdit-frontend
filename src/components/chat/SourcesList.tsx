import { FileText } from "lucide-react";
import type { Source } from "@/types/chat";

interface SourcesListProps {
  sources?: Source[] | undefined;
}

/**
 * Reusable sources block. Renders nothing unless the backend actually returned
 * sources — no sources are ever generated in the frontend.
 */
export function SourcesList({ sources }: SourcesListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-4 rounded-xl border border-border bg-surface p-3">
      <h4 className="text-eyebrow flex items-center gap-2 text-violet">
        <FileText aria-hidden="true" className="size-3.5" />
        Sources
      </h4>
      <ul className="mt-2 space-y-1.5">
        {sources.map((source, index) => {
          const label = source.title ?? source.url ?? `Source ${index + 1}`;
          return (
            <li key={`${label}-${index}`} className="flex gap-2 text-sm text-muted-foreground">
              <span aria-hidden="true">•</span>
              <span>
                {source.url ? (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-foreground underline underline-offset-4 hover:text-violet"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="font-medium text-foreground">{label}</span>
                )}
                {source.snippet ? <span className="block text-xs">{source.snippet}</span> : null}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
