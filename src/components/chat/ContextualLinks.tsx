import { ArrowUpRight } from "lucide-react";
import type { Source } from "@/types/chat";

/**
 * Official links returned by the backend, rendered inline after the answer as
 * friendly labels. No sources panel, no raw URLs, no retrieval metadata.
 */
function friendlyLabel(source: Source): string {
  if (source.title && source.title.trim() !== "") return `View ${source.title.trim()}`;
  try {
    const host = new URL(source.url ?? "").hostname.replace(/^www\./, "");
    return `View details on ${host}`;
  } catch {
    return "View details";
  }
}

export function ContextualLinks({ sources }: { sources?: Source[] | undefined }) {
  const links = (sources ?? []).filter((source) => typeof source.url === "string");
  if (links.length === 0) return null;

  return (
    <ul className="mt-2 space-y-1">
      {links.slice(0, 4).map((source, index) => (
        <li key={`${source.url}-${index}`}>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-violet underline-offset-4 hover:underline"
          >
            {friendlyLabel(source)}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
