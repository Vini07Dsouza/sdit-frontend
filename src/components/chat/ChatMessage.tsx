import { ContextualLinks } from "./ContextualLinks";
import type { ChatMessage as ChatMessageType } from "@/types/chat";

/** Renders paragraphs, bullet/numbered lists and inline links from plain text. */
function RichText({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/);

  return (
    <div className="space-y-2.5">
      {blocks.map((block, blockIndex) => {
        const lines = block.split("\n").filter((line) => line.trim() !== "");
        const isBullet = lines.length > 0 && lines.every((line) => /^\s*([-*•])\s+/.test(line));
        const isNumbered = lines.length > 0 && lines.every((line) => /^\s*\d+[.)]\s+/.test(line));

        if (isBullet || isNumbered) {
          const ListTag = isNumbered ? "ol" : "ul";
          return (
            <ListTag
              key={blockIndex}
              className={`ml-4 space-y-1 ${isNumbered ? "list-decimal" : "list-disc"}`}
            >
              {lines.map((line, i) => (
                <li key={i}>
                  <Linkify text={line.replace(/^\s*([-*•]|\d+[.)])\s+/, "")} />
                </li>
              ))}
            </ListTag>
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

/** Turns bare URLs inside answer text into friendly, safe links. */
function Linkify({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (!/^https?:\/\//.test(part)) return <span key={index}>{part}</span>;
        let label = "View details";
        try {
          label = `View details on ${new URL(part).hostname.replace(/^www\./, "")}`;
        } catch {
          /* keep fallback label */
        }
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-violet underline underline-offset-4"
          >
            {label}
          </a>
        );
      })}
    </>
  );
}

export function ChatMessage({ message }: { message: ChatMessageType }) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <li className="flex justify-end" data-message-id={message.id}>
        <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-sm text-primary-foreground">
          <span className="sr-only">You asked: </span>
          <p className="whitespace-pre-line">{message.content}</p>
        </div>
      </li>
    );
  }

  return (
    <li className="max-w-full text-sm text-foreground" data-message-id={message.id}>
      <span className="sr-only">Assistant answered: </span>
      <RichText content={message.content} />
      <ContextualLinks sources={message.sources} />
    </li>
  );
}
