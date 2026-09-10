import { ArrowLeft, ChevronRight, ExternalLink, Phone } from "lucide-react";
import { chatbotConfig, hasMaps, hasPhone } from "@/config/chatbotConfig";
import { menus, ROOT_MENU_ID, type MenuOption } from "@/config/menuTree";

interface SmartMenuProps {
  menuId: string;
  onSelect: (option: MenuOption) => void;
  onBack: () => void;
  disabled?: boolean;
}

/** Guided menu / sub-menu. Every rendered option has working behaviour. */
export function SmartMenu({ menuId, onSelect, onBack, disabled = false }: SmartMenuProps) {
  const menu = menus[menuId] ?? menus[ROOT_MENU_ID];
  if (!menu) return null;

  const options = menu.options.filter((option) => {
    if (option.action.kind === "tel") return hasPhone;
    if (option.action.kind === "maps") return hasMaps;
    return true;
  });

  const isRoot = menu.id === ROOT_MENU_ID;

  return (
    <section aria-label={`${menu.title} options`} className="mt-3">
      <div className="mb-2 flex items-center gap-2">
        {!isRoot ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:border-violet hover:text-violet"
          >
            <ArrowLeft aria-hidden="true" className="size-3.5" />
            Back
          </button>
        ) : null}
        <h2 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {menu.title}
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const shared =
            "flex w-full items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 text-left text-sm font-medium text-card-foreground transition-colors hover:border-violet hover:text-violet disabled:opacity-50";

          if (option.action.kind === "tel") {
            return (
              <li key={option.id}>
                <a
                  href={`tel:${chatbotConfig.officialPhone}`}
                  className={shared}
                  aria-label={`Call SDIT on ${chatbotConfig.officialPhoneLabel || chatbotConfig.officialPhone}`}
                >
                  <span aria-hidden="true">{option.emoji}</span>
                  <span className="flex-1">{option.label}</span>
                  <Phone aria-hidden="true" className="size-4 opacity-60" />
                </a>
              </li>
            );
          }

          if (option.action.kind === "maps") {
            return (
              <li key={option.id}>
                <a
                  href={chatbotConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={shared}
                  aria-label={`Open directions to ${chatbotConfig.mapsLabel} in maps`}
                >
                  <span aria-hidden="true">{option.emoji}</span>
                  <span className="flex-1">{option.label}</span>
                  <ExternalLink aria-hidden="true" className="size-4 opacity-60" />
                </a>
              </li>
            );
          }

          return (
            <li key={option.id}>
              <button
                type="button"
                onClick={() => onSelect(option)}
                disabled={disabled}
                className={shared}
              >
                {option.emoji ? <span aria-hidden="true">{option.emoji}</span> : null}
                <span className="flex-1">{option.label}</span>
                {option.action.kind === "submenu" ? (
                  <ChevronRight aria-hidden="true" className="size-4 opacity-60" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
