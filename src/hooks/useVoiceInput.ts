import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Thin wrapper around the browser SpeechRecognition API.
 * If the browser does not support it, `isSupported` is false and the UI hides
 * the mic control instead of pretending it works.
 */

type VoiceStatus = "idle" | "listening" | "error";

interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((event: unknown) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

function getConstructor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as Record<string, unknown>;
  const ctor = w["SpeechRecognition"] ?? w["webkitSpeechRecognition"];
  return typeof ctor === "function" ? (ctor as new () => SpeechRecognitionLike) : null;
}

function readTranscript(event: unknown): string {
  const results = (event as { results?: ArrayLike<ArrayLike<{ transcript?: string }>> }).results;
  if (!results) return "";
  let text = "";
  for (let i = 0; i < results.length; i += 1) {
    text += results[i]?.[0]?.transcript ?? "";
  }
  return text.trim();
}

export function useVoiceInput(onTranscript: (text: string) => void) {
  const [isSupported, setIsSupported] = useState(false);
  const [status, setStatus] = useState<VoiceStatus>("idle");
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    setIsSupported(getConstructor() !== null);
    return () => recognitionRef.current?.stop();
  }, []);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setStatus("idle");
  }, []);

  const start = useCallback(() => {
    const Ctor = getConstructor();
    if (!Ctor) return;

    const recognition = new Ctor();
    recognitionRef.current = recognition;
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const text = readTranscript(event);
      if (text) onTranscript(text);
    };
    recognition.onerror = () => setStatus("error");
    recognition.onend = () => setStatus((prev) => (prev === "error" ? "error" : "idle"));

    try {
      recognition.start();
      setStatus("listening");
    } catch {
      setStatus("error");
    }
  }, [onTranscript]);

  const toggle = useCallback(() => {
    if (status === "listening") stop();
    else start();
  }, [status, start, stop]);

  return { isSupported, status, toggle, stop };
}
