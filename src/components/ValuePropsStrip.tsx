import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Props = {
  /** Where the POPTAT button should go. Falls back to a generic /contact link. */
  ctaHref?: string;
  /** Optional extra classes for the outer wrapper. */
  className?: string;
};

const ICON_CLASS =
  "w-7 h-7 sm:w-8 sm:h-8 text-brand-copper-light shrink-0";

const icons = {
  longLife: (
    <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <path d="M12 7v5l3 2" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  handcraft: (
    <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect
        x="2.75"
        y="6.25"
        width="8.5"
        height="3.5"
        rx="1"
        fill="none"
        strokeWidth={1.5}
      />
      <path d="M6.5 9v9.75" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M11.75 19.25l8.25-8.25" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M11 18.5l2.75-2.75" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  ),
  personalization: (
    <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="3" y="6" width="18" height="12" rx="1.5" strokeWidth={1.5} />
      <path d="M7 10h6M7 14h10" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M16 9l2 2-2 2" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/**
 * Footer strip used on every product poster card.
 * Three icon + 2-line value props on the left, bright orange POPTAT button on the right.
 * Mirrors the bottom strip of Tomáš's posters.
 */
export default function ValuePropsStrip({ ctaHref = "/contact", className = "" }: Props) {
  const tv = useTranslations("valuePropsStrip");
  const tp = useTranslations("products.poster");

  const items: Array<{ key: keyof typeof icons; label: string }> = [
    { key: "longLife", label: tv("longLife") },
    { key: "handcraft", label: tv("handcraft") },
    { key: "personalization", label: tv("personalization") },
  ];

  return (
    <div
      className={`relative bg-brand-darker/90 border-t border-brand-border/30 ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-stretch p-6 sm:p-8">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {items.map(({ key, label }) => (
            <li
              key={key}
              className="flex items-center gap-3 sm:gap-4 min-w-0"
            >
              {icons[key]}
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-text leading-tight">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={ctaHref}
          className="group inline-flex items-center justify-center gap-3 rounded-lg sm:rounded-xl px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-brand-flame to-brand-ember text-white font-black text-sm tracking-[0.3em] uppercase shadow-[0_0_30px_rgba(255,140,66,0.25)] hover:shadow-[0_0_50px_rgba(255,140,66,0.55)] hover:from-brand-ember hover:to-brand-flame transition-all duration-300 w-full lg:w-auto"
        >
          {tp("ctaPrimary")}
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M5 12h14M13 5l7 7-7 7"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
