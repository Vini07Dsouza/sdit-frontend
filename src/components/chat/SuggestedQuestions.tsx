import { suggestedQuestions } from "@/data/siteContent";

interface SuggestedQuestionsProps {
  onSelect: (query: string) => void;
  disabled?: boolean;
}

export function SuggestedQuestions({ onSelect, disabled = false }: SuggestedQuestionsProps) {
  return (
    <section aria-labelledby="suggested-heading">
      <h2 id="suggested-heading" className="text-eyebrow text-violet">
        Suggested questions
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {suggestedQuestions.map((item) => (
          <li key={item.label}>
            <button
              type="button"
              onClick={() => onSelect(item.query)}
              disabled={disabled}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:border-violet hover:text-violet disabled:cursor-not-allowed disabled:opacity-50"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
