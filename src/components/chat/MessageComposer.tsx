import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Mic, MicOff, SendHorizonal } from "lucide-react";
import { chatbotConfig } from "@/config/chatbotConfig";
import { useVoiceInput } from "@/hooks/useVoiceInput";

interface MessageComposerProps {
  onSend: (message: string) => void;
  isLoading: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
}

/**
 * Mobile-first, friendly chat input bar with voice input and free-text typing.
 */
export function MessageComposer({
  onSend,
  isLoading,
  value: controlledValue,
  onValueChange,
}: MessageComposerProps) {
  const [internalText, setInternalText] = useState("");
  const isControlled = controlledValue !== undefined;
  const text = isControlled ? controlledValue : internalText;

  const setText = (val: string | ((prev: string) => string)) => {
    if (typeof val === "function") {
      const nextVal = val(text);
      if (isControlled && onValueChange) onValueChange(nextVal);
      else setInternalText(nextVal);
    } else {
      if (isControlled && onValueChange) onValueChange(val);
      else setInternalText(val);
    }
  };

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { isSupported, status, toggle } = useVoiceInput((transcript) =>
    setText((prev) => (prev ? `${prev} ${transcript}` : transcript)),
  );

  // Auto-grow the textarea up to a comfortable maximum.
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 110)}px`;
  }, [text]);

  const canSend = text.trim().length > 0 && !isLoading;

  const submit = () => {
    if (!canSend) return;
    onSend(text);
    setText("");
  };

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
  };

  return (
    <div
      className="shrink-0 border-t border-[#C4B5FD]/20 bg-[#0D0B18]/95 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto w-full max-w-3xl px-3 py-2 sm:px-4 sm:py-3">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submit();
          }}
          className="flex items-end gap-1.5 rounded-2xl border border-[#C4B5FD]/30 bg-[#191724] p-1.5 shadow-md transition-colors focus-within:border-[#FF6B4A] focus-within:ring-1 focus-within:ring-[#FF6B4A]/40"
        >
          <label htmlFor="chat-input" className="sr-only">
            {chatbotConfig.composerPlaceholder}
          </label>
          <textarea
            id="chat-input"
            ref={textareaRef}
            rows={1}
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder={chatbotConfig.composerPlaceholder}
            className="max-h-[110px] min-w-0 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-[#FAF9F7] outline-none placeholder:text-[#9A95A8]"
          />

          {isSupported ? (
            <button
              type="button"
              onClick={toggle}
              aria-label={status === "listening" ? "Stop voice input" : "Start voice input"}
              aria-pressed={status === "listening"}
              className={`grid size-9 shrink-0 place-items-center rounded-xl border transition-colors ${
                status === "listening"
                  ? "animate-pulse border-destructive bg-destructive/15 text-destructive"
                  : "border-[#C4B5FD]/30 text-[#9A95A8] hover:border-[#2DD4BF] hover:text-[#2DD4BF]"
              }`}
            >
              {status === "error" ? (
                <MicOff aria-hidden="true" className="size-4" />
              ) : (
                <Mic aria-hidden="true" className="size-4" />
              )}
            </button>
          ) : null}

          <button
            type="submit"
            disabled={!canSend}
            aria-label="Send message"
            className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#FF6B4A] text-[#0D0B18] font-bold shadow-md shadow-[#FF6B4A]/30 transition-all hover:bg-[#ff8266] hover:shadow-[0_0_18px_rgba(255,107,74,0.5)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <SendHorizonal aria-hidden="true" className="size-4 text-[#0D0B18]" />
          </button>
        </form>

        {status === "listening" || status === "error" ? (
          <p aria-live="polite" className="mt-1.5 px-2 text-[11px] text-[#9A95A8]">
            {status === "listening"
              ? "Listening… speak now into your microphone."
              : "Voice input did not capture audio. Please type your message instead."}
          </p>
        ) : null}
      </div>
    </div>
  );
}
