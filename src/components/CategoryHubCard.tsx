import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ProductCategory, ProductGroup } from "@/data/products";

type Props = {
  /** Subcategory id used for translations + anchor. */
  category: ProductCategory;
  /** Owning group — drives the card's tonal treatment. */
  group: ProductGroup;
  /** Global 1-based index across the whole hub (renders as "01" – "07"). */
  index: number;
  /** Number of available products in this subcategory. */
  productCount: number;
  /** Where the card-level CTA points (anchor for in-page sections, or /custom). */
  href: string;
  /** When true, CTA reads "Poptat" instead of "Prozkoumat". */
  bespokeOnly?: boolean;
};

const ICONS: Record<ProductCategory, React.JSX.Element> = {
  industrialFurniture: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden>
      <path d="M5 11h22" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M7 11v15" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M25 11v15" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M5 26h22" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M11 11V6h10v5" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 18h10" strokeWidth={1.2} strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  industrialAccessories: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden>
      <path d="M6 9h20" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M6 17h20" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M11 17v6" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M21 17v6" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M9 23h4" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M19 23h4" strokeWidth={1.4} strokeLinecap="round" />
      <circle cx="16" cy="13" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  outdoorFire: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden>
      <path
        d="M16 5c2 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 2-7 0 0 2 1 4-4z"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <path
        d="M16 13c1 2 3 3 3 5a3 3 0 0 1-6 0c0-1.5 1-2 1-3.5 0 0 1 .5 2-1.5z"
        strokeWidth={1.2}
        strokeLinejoin="round"
        opacity="0.6"
      />
      <path d="M5 27h22" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  ),
  benches: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden>
      <path d="M4 14h24" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M4 17h24" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M7 17v9" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M25 17v9" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M7 22h18" strokeWidth={1.2} strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  pergolasFences: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden>
      <path d="M5 8h22" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M5 12h22" strokeWidth={1.2} strokeLinecap="round" opacity="0.6" />
      <path d="M9 8v18" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M16 8v18" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M23 8v18" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M5 26h22" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  ),
  binBoxes: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden>
      <path
        d="M6 10h20l-1.5 16a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1L6 10z"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <path d="M11 7h10" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M11 14v9M16 14v9M21 14v9" strokeWidth={1.2} strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  metalwork: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden>
      <path
        d="M5 14h18l-2 4H8a3 3 0 0 1-3-3v-1z"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <path d="M14 18v6" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M9 24h10" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M23 14l5-5" strokeWidth={1.4} strokeLinecap="round" />
      <circle cx="28" cy="9" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const GROUP_TONE: Record<
  ProductGroup,
  {
    accentText: string;
    accentBorder: string;
    iconRing: string;
    iconText: string;
    glow: string;
    arrow: string;
  }
> = {
  furniture: {
    accentText: "text-brand-copper-light",
    accentBorder: "group-hover:border-brand-copper/70",
    iconRing: "border-brand-copper/40 group-hover:border-brand-copper-light/70",
    iconText: "text-brand-copper-light",
    glow:
      "before:bg-[radial-gradient(ellipse_70%_55%_at_25%_0%,rgba(181,114,44,0.18),transparent_70%)]",
    arrow: "group-hover:text-brand-copper-light",
  },
  exterior: {
    accentText: "text-brand-flame",
    accentBorder: "group-hover:border-brand-ember/70",
    iconRing: "border-brand-ember/40 group-hover:border-brand-flame/70",
    iconText: "text-brand-flame",
    glow:
      "before:bg-[radial-gradient(ellipse_70%_55%_at_25%_0%,rgba(232,93,4,0.22),transparent_70%)]",
    arrow: "group-hover:text-brand-flame",
  },
  custom: {
    accentText: "text-brand-copper-light",
    accentBorder: "group-hover:border-brand-copper/70",
    iconRing:
      "border-brand-copper-light/40 group-hover:border-brand-copper-light/80",
    iconText: "text-brand-copper-light",
    glow:
      "before:bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(212,148,76,0.16),transparent_70%)]",
    arrow: "group-hover:text-brand-copper-light",
  },
};

export default function CategoryHubCard({
  category,
  group,
  index,
  productCount,
  href,
  bespokeOnly = false,
}: Props) {
  const tc = useTranslations(`productCategories.${category}`);
  const tp = useTranslations("products");
  const tone = GROUP_TONE[group];
  const indexLabel = String(index).padStart(2, "0");
  const isFullWidth = group === "custom";
  const ctaLabel = bespokeOnly ? tp("requestPiece") : tp("exploreCategory");

  return (
    <Link
      href={href}
      className={`group relative isolate flex flex-col overflow-hidden rounded-2xl bg-brand-card/55 border border-brand-border/40 ${tone.accentBorder} backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.85)] ${
        isFullWidth ? "lg:flex-row" : ""
      } before:absolute before:inset-0 before:-z-10 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 ${tone.glow}`}
    >
      {/* main content column */}
      <div className={`flex flex-col p-6 sm:p-8 ${isFullWidth ? "lg:flex-1 lg:p-12" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <span className="text-brand-subtle text-[10px] sm:text-xs tracking-[0.4em] font-bold">
            {indexLabel}
          </span>
          <span
            className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border ${tone.iconRing} flex items-center justify-center ${tone.iconText} transition-colors duration-500`}
          >
            <span className="block w-6 h-6 sm:w-7 sm:h-7">{ICONS[category]}</span>
          </span>
        </div>

        <h3
          className={`mt-6 sm:mt-8 font-extralight text-white tracking-tight leading-[1.05] ${
            isFullWidth ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-[1.65rem]"
          }`}
        >
          {tc("name")}
        </h3>

        <div className={`mt-4 h-px w-12 bg-brand-border/60 transition-all duration-500 group-hover:w-20 ${tone.accentBorder.replace("group-hover:border-", "group-hover:bg-")}`} />

        <p
          className={`mt-5 text-brand-muted text-sm sm:text-[0.95rem] leading-relaxed font-light ${
            isFullWidth ? "lg:text-base lg:max-w-xl" : ""
          }`}
        >
          {tc("lead")}
        </p>

        <p
          className={`mt-6 ${tone.accentText} text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase leading-snug`}
        >
          <span className="opacity-70 mr-2">»</span>
          {tc("tagline")}
        </p>

        <div className="mt-auto pt-7 flex items-center justify-between gap-3">
          <span className="text-brand-subtle text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold">
            {productCount === 0
              ? tp("modelsCount", { count: 0 })
              : tp("modelsCount", { count: productCount })}
          </span>
          <span
            className={`inline-flex items-center gap-2 text-brand-muted ${tone.arrow} text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold transition-colors duration-300`}
          >
            {ctaLabel}
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
          </span>
        </div>
      </div>

      {/* full-width "custom" block gets a vertical accent panel */}
      {isFullWidth && (
        <div className="hidden lg:flex lg:w-[34%] relative items-end justify-end p-12 border-l border-brand-border/30 bg-gradient-to-br from-brand-darker via-brand-dark to-brand-darker overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,148,76,0.18),transparent_60%)]" />
          <span className="relative font-extralight text-[7rem] leading-none text-brand-copper/15 tracking-tighter select-none">
            {indexLabel}
          </span>
        </div>
      )}
    </Link>
  );
}
