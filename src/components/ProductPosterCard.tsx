import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";
import ValuePropsStrip from "./ValuePropsStrip";

type Variant = "full" | "compact";

type Props = {
  product: Product;
  /** Display index for the eyebrow label ("01 / VYBRANÉ"). */
  index?: number;
  /** "full" = product page treatment with bullets + footer strip.
   *  "compact" = homepage treatment, no bullets, no footer strip, single CTA. */
  variant?: Variant;
  /** Where the POPTAT/details CTA points. */
  ctaHref?: string;
  /** Hint Next/Image to load eagerly when above the fold. */
  priority?: boolean;
};

const FALLBACK_RATIO = { w: 4, h: 3 } as const;

/**
 * Native, responsive port of Tomáš's product posters.
 * Dark moody background + copper glow + poster-style headline + bulleted features
 * + clean product photo + footer value-props strip with the orange POPTAT button.
 */
export default function ProductPosterCard({
  product,
  index = 1,
  variant = "full",
  ctaHref,
  priority,
}: Props) {
  const t = useTranslations();
  const tp = useTranslations("products");
  const tpp = useTranslations("products.poster");
  const tv = useTranslations("variants");
  const ft = useTranslations("features");
  const pi = useTranslations("productItems");

  const isCompact = variant === "compact";

  const headlineLine1 = pi(`${product.id}.name`).toUpperCase();
  const headlineLine2 = tpp("headlineSuffix");
  const tagline = product.tagline ?? tpp("tagline");
  const photo = product.cleanImage;
  const photoSize = product.cleanImageIntrinsicSize ?? FALLBACK_RATIO;
  const resolvedCtaHref =
    ctaHref ?? (isCompact ? `/products#${product.id}` : "/contact");
  const indexLabel = String(index).padStart(2, "0");

  return (
    <article
      id={product.id}
      className="relative isolate overflow-hidden bg-brand-darker border border-brand-border/30 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]"
    >
      {/* Poster mood — copper haze + subtle vignette + faint grain */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_25%_15%,rgba(232,93,4,0.18),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_90%,rgba(181,114,44,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      <div
        className={`relative grid grid-cols-1 lg:grid-cols-12 ${
          isCompact ? "gap-6 lg:gap-10" : "gap-8 lg:gap-14"
        } items-center px-6 sm:px-10 lg:px-14 ${
          isCompact ? "pt-10 pb-10 lg:pt-14 lg:pb-14" : "pt-12 pb-12 lg:pt-20 lg:pb-20"
        }`}
      >
        {/* TEXT COLUMN */}
        <div className="lg:col-span-5 order-1 lg:order-1 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-brand-copper text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold">
              {indexLabel} / {tv("forgeFeaturedLabel")}
            </span>
            <div className="w-10 h-[1px] bg-brand-copper/50" />
          </div>

          <h2
            className={`font-extralight text-white tracking-tight uppercase leading-[0.95] ${
              isCompact
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
            }`}
          >
            <span className="block">{headlineLine1}</span>
            <span
              className={`block text-brand-copper-light font-light mt-1 ${
                isCompact
                  ? "text-2xl sm:text-3xl lg:text-4xl"
                  : "text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem]"
              }`}
            >
              {headlineLine2}
            </span>
          </h2>

          <p
            className={`text-brand-text/85 font-light leading-relaxed ${
              isCompact
                ? "mt-5 text-base sm:text-lg max-w-md"
                : "mt-7 text-lg sm:text-xl max-w-lg"
            }`}
          >
            {tagline}
          </p>

          {!isCompact && product.features.length > 0 && (
            <ul role="list" className="mt-8 space-y-3.5">
              {product.features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-center gap-3.5 text-brand-text"
                >
                  <span
                    className="w-2 h-2 rounded-full bg-brand-flame shadow-[0_0_8px_rgba(255,140,66,0.6)] shrink-0"
                    aria-hidden
                  />
                  <span className="text-base sm:text-lg font-light tracking-wide">
                    {ft(feat)}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-8 text-brand-copper text-sm tracking-[0.3em] uppercase font-bold">
            {product.modelName}
          </p>

          {isCompact && (
            <Link
              href={resolvedCtaHref}
              className="mt-7 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-flame to-brand-ember text-white font-black text-xs tracking-[0.3em] uppercase shadow-[0_0_30px_rgba(255,140,66,0.25)] hover:shadow-[0_0_50px_rgba(255,140,66,0.5)] transition-all duration-300 self-start"
            >
              {t("products.details")}
              <svg
                className="w-3.5 h-3.5"
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
          )}
        </div>

        {/* IMAGE COLUMN */}
        <div className="lg:col-span-7 order-2 lg:order-2 relative">
          <div className="relative w-full">
            {/* soft ground shadow */}
            <div
              className="absolute -inset-x-6 -bottom-2 h-10 rounded-[100%] bg-black/70 blur-2xl pointer-events-none"
              aria-hidden
            />
            <div className="relative">
              {photo ? (
                <Image
                  src={photo}
                  alt={pi(`${product.id}.name`)}
                  width={photoSize.w}
                  height={photoSize.h}
                  priority={priority}
                  sizes={
                    isCompact
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 1024px) 100vw, 58vw"
                  }
                  className="h-auto w-full max-w-full object-contain max-h-[min(70svh,720px)] drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
                />
              ) : (
                <div className="aspect-[4/3] flex items-center justify-center bg-brand-card/40 border border-brand-border/30">
                  <span className="text-brand-muted text-xs tracking-[0.3em] uppercase">
                    {tp("comingSoon")}
                  </span>
                </div>
              )}
            </div>

            {/* copper corner frame */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
            >
              <div className="absolute top-0 left-0 w-12 h-[2px] bg-brand-copper" />
              <div className="absolute top-0 left-0 w-[2px] h-12 bg-brand-copper" />
              <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-brand-copper" />
              <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-brand-copper" />
            </div>
          </div>
        </div>
      </div>

      {!isCompact && (
        <ValuePropsStrip
          ctaHref={resolvedCtaHref}
          className="relative"
        />
      )}
    </article>
  );
}
