import { Bot, User } from "lucide-react";
import { SourcesList } from "./SourcesList";
import type { ChatMessage } from "@/types/chat";

function formatTime(iso: string) {
  const date = new Date(iso);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function Linkify({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (!/^https?:\/\//.test(part)) return <span key={index}>{part}</span>;
        let label = "Visit link";
        try {
          label = new URL(part).hostname.replace(/^www\./, "");
        } catch {
          /* keep fallback */
        }
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#2DD4BF] underline underline-offset-4 hover:text-[#FAF9F7]"
          >
            {label}
          </a>
        );
      })}
    </>
  );
}

/** Renders paragraphs, simple lists and clickable links from answers. */
function FormattedText({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/);

  return (
    <div className="space-y-2.5">
      {blocks.map((block, blockIndex) => {
        const lines = block.split("\n").filter((l) => l.trim() !== "");
        const isList = lines.length > 0 && lines.every((l) => /^\s*([-*•]|\d+[.)])\s+/.test(l));

        if (isList) {
          return (
            <ul key={blockIndex} className="ml-4 list-disc space-y-1">
              {lines.map((line, i) => (
                <li key={i}>
                  <Linkify text={line.replace(/^\s*([-*•]|\d+[.)])\s+/, "")} />
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={blockIndex} className="leading-relaxed whitespace-pre-line">
            <Linkify text={block} />
          </p>
        );
      })}
    </div>
  );
}

export function ChatMessageItem({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <li className={`flex gap-2.5 sm:gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      <span
        aria-hidden="true"
        className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl sm:size-9 ${
          isUser
            ? "bg-[#191724] text-[#9A95A8] ring-1 ring-white/10"
            : "bg-[#191724] text-[#FF6B4A] ring-1 ring-[#C4B5FD]/40 shadow-[0_0_15px_-3px_rgba(255,107,74,0.3)]"
        }`}
      >
        {isUser ? (
          <User className="size-4" />
        ) : (
          <img
            src="/images/sdit_nova_logo.png"
            alt="SDIT NOVA"
            className="size-full rounded-xl object-cover"
            referrerPolicy="no-referrer"
          />
        )}
      </span>

      <div className={`max-w-[85%] sm:max-w-[80%] ${isUser ? "text-right" : "text-left"}`}>
        <p className="mb-1 text-[11px] font-medium text-[#9A95A8] sm:text-xs">
          <span className="sr-only">{isUser ? "You said" : "SDIT NOVA said"} — </span>
          {isUser ? "You" : "SDIT NOVA"} ·{" "}
          <time dateTime={message.createdAt}>{formatTime(message.createdAt)}</time>
        </p>

        <div
          className={
            isUser
              ? "inline-block rounded-2xl rounded-tr-xs bg-[#191724] border border-white/10 px-4 py-2.5 text-left text-sm text-[#FAF9F7] shadow-xs"
              : "inline-block rounded-2xl rounded-tl-xs border border-[#C4B5FD]/25 bg-[#191724] px-4 py-3 text-left text-sm text-[#FAF9F7] shadow-md shadow-[#0D0B18]/50"
          }
        >
          <FormattedText content={message.content} />
        </div>

        {!isUser ? <SourcesList sources={message.sources} /> : null}
      </div>
    </li>
  );
}
