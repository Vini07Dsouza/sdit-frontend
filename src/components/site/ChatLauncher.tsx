import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { Bot, X, RotateCcw } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { ChatMessageItem } from "@/components/chat/ChatMessageItem";
import { LoadingIndicator } from "@/components/chat/LoadingIndicator";
import { ErrorState } from "@/components/chat/ErrorState";
import { WelcomeState } from "@/components/chat/WelcomeState";
import { QuickActions } from "@/components/chat/QuickActions";
import { MessageComposer } from "@/components/chat/MessageComposer";
import { chatbotConfig } from "@/config/chatbotConfig";

export function ChatLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, error, send, retry, reset, hasConversation } = useChat();

  const [draft, setDraft] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bottomSentinelRef = useRef<HTMLDivElement>(null);
  const scrollScheduledRef = useRef(false);
  const touchStartYRef = useRef(0);

  const scrollToBottom = useCallback(
    (behavior: ScrollBehavior = "auto") => {
      if (!isOpen) return;
      if (scrollScheduledRef.current) return;
      scrollScheduledRef.current = true;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bottomSentinelRef.current?.scrollIntoView({
            behavior,
            block: "end",
          });
          scrollScheduledRef.current = false;
        });
      });
    },
    [isOpen],
  );

  useEffect(() => {
    if (isOpen) {
      scrollToBottom("smooth");
    }
  }, [messages.length, isLoading, hasConversation, isOpen, scrollToBottom]);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const content = contentRef.current;
    if (!content) return;

    const resizeObserver = new ResizeObserver(() => {
      scrollToBottom("auto");
    });
    resizeObserver.observe(content);

    const mutationObserver = new MutationObserver(() => {
      scrollToBottom("auto");
    });
    mutationObserver.observe(content, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [isOpen, hasConversation, scrollToBottom]);

  useEffect(() => {
    if (!isOpen || !isLoading) return;

    const interval = window.setInterval(() => {
      scrollToBottom("auto");
    }, 150);

    return () => window.clearInterval(interval);
  }, [isOpen, isLoading, scrollToBottom]);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const scrollEl = chatScrollRef.current;
    if (!dialog || !scrollEl) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = scrollEl;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
        e.preventDefault();
        return;
      }
      e.stopPropagation();
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = scrollEl;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;

      if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) {
        e.preventDefault();
        return;
      }
      e.stopPropagation();
    };

    dialog.addEventListener("wheel", handleWheel, { passive: false });
    dialog.addEventListener("touchstart", handleTouchStart, { passive: true });
    dialog.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      dialog.removeEventListener("wheel", handleWheel);
      dialog.removeEventListener("touchstart", handleTouchStart);
      dialog.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isOpen]);

  const handleClear = () => {
    setDraft("");
    reset();
  };

  const handleActionSelect = (query: string) => {
    void send(query);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open SDIT AI Assistant chat"
          className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-3 rounded-full border border-[#7C3AED]/35 bg-[#0D0B18] px-4 py-2.5 text-[#FAF9F7] shadow-2xl transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF6B4A] hover:shadow-[0_0_24px_-4px_rgba(255,107,74,0.4)] sm:right-6 sm:bottom-6 sm:px-5 sm:py-3"
        >
          <div
            aria-hidden="true"
            className="relative grid size-9 place-items-center rounded-full bg-[#191724] text-[#FF6B4A] shadow-inner ring-1 ring-[#C4B5FD]/40"
          >
            <Bot className="size-5 text-[#FF6B4A]" />
            <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-[#FF6B4A] ring-2 ring-[#0D0B18]" />
          </div>
          <div className="text-left leading-snug">
            <span className="block text-sm font-bold tracking-tight text-[#FAF9F7]">
              SDIT AI-ASSISTANT
            </span>
            <span className="block text-xs font-semibold text-[#2DD4BF]">
              Ask anything about SDIT
            </span>
          </div>
        </button>
      )}

      <div
        ref={dialogRef}
        role="dialog"
        aria-label="SDIT AI Assistant Chat Window"
        aria-hidden={!isOpen}
        className={`fixed right-3 bottom-3 z-50 flex h-[620px] max-h-[90vh] w-[95vw] flex-col overflow-hidden rounded-2xl border border-[#7C3AED]/40 bg-[#0D0B18] text-[#FAF9F7] shadow-2xl transition-all duration-150 transform origin-bottom-right sm:right-6 sm:bottom-6 sm:w-[420px] ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none select-none"
        }`}
      >
        <header className="flex items-center justify-between border-b border-[#C4B5FD]/20 bg-[#141026] px-4 py-3 shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative">
              <div
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-[#191724] ring-1 ring-[#C4B5FD]/45 shadow-[0_0_20px_-4px_rgba(124,58,237,0.3)]"
              >
                <img
                  src="/images/sdit_nova_logo.png"
                  alt="SDIT AI-ASSISTANT"
                  className="size-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span
                className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-[#FF6B4A] ring-2 ring-[#141026]"
                title="Online"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h2 className="truncate text-sm font-bold text-[#FAF9F7]">
                  {chatbotConfig.chatbotName}
                </h2>
                <span className="rounded-md bg-[#FF6B4A]/15 px-1.5 py-0.5 text-[10px] font-semibold text-[#FF6B4A] border border-[#FF6B4A]/30">
                  Official
                </span>
              </div>
              <p className="flex items-center gap-1.5 truncate text-[11px] text-[#9A95A8]">
                <span className="size-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                <span>Online · {chatbotConfig.tagline}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleClear}
              title="Restart chat"
              className="grid size-8 place-items-center rounded-lg text-[#9A95A8] transition-colors hover:bg-[#242133] hover:text-[#FAF9F7]"
            >
              <RotateCcw className="size-4" />
              <span className="sr-only">Restart chat</span>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              title="Close chat"
              className="grid size-8 place-items-center rounded-lg text-[#9A95A8] transition-colors hover:bg-[#242133] hover:text-[#FAF9F7]"
            >
              <X className="size-5" />
              <span className="sr-only">Close chat</span>
            </button>
          </div>
        </header>

        <main className="flex min-h-0 flex-1 flex-col bg-[#0B0B12] overscroll-contain">
          <div
            ref={chatScrollRef}
            className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-4"
          >
            {!hasConversation ? (
              <div className="my-auto py-2">
                <WelcomeState onSelectAction={handleActionSelect} disabled={isLoading} />
              </div>
            ) : (
              <div ref={contentRef}>
                <ul className="space-y-4" aria-live="polite" aria-busy={isLoading}>
                  {messages.map((message) => (
                    <ChatMessageItem key={message.id} message={message} />
                  ))}

                  {isLoading ? <LoadingIndicator /> : null}

                  {error ? <ErrorState error={error} onRetry={retry} disabled={isLoading} /> : null}
                </ul>

                <div ref={bottomSentinelRef} className="h-px w-full" />
              </div>
            )}
          </div>

          {hasConversation ? (
            <div className="shrink-0 border-t border-[#A78BFA]/15 bg-[#0D0B18]/90 px-3 py-2">
              <QuickActions variant="chips" onSelect={handleActionSelect} disabled={isLoading} />
            </div>
          ) : null}

          <div className="sticky bottom-0 z-10 shrink-0 border-t border-[#7C3AED]/20 bg-[#0D0B18]">
            <MessageComposer
              value={draft}
              onValueChange={setDraft}
              onSend={(msg) => void send(msg)}
              isLoading={isLoading}
            />
            <div className="px-3 pb-2 text-center">
              <span className="text-[10px] text-[#7A758B]">
                SDIT NOVA is AI and can make mistakes. Please verify important details.
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}