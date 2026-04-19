import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";
import PosterPlate from "./PosterPlate";

type Props = { product: Product };

/**
 * Variant B — "Poster verbatim".
 * The most literal port of Tomáš's posters: vertical, centered, dramatic
 * stacked headline above a hero photo, dot-separated bullets in one line,
 * stenciled model code, single big POPTAT.
 */
export default function ProductPosterVariantB({ product }: Props) {
  const ft = useTranslations("features");
  const pi = useTranslations("productItems");
  const tpp = useTranslations("products.poster");

  const photo = product.cleanImage;
  const photoSize = product.cleanImageIntrinsicSize ?? { w: 1024, h: 969 };
  const headline = pi(`${product.id}.name`).toUpperCase();

  return (
    <PosterPlate intensity="strong">
      <div className="relative px-6 sm:px-12 lg:px-20 pt-14 pb-10 lg:pt-20 lg:pb-14 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-[1px] bg-brand-copper/60" />
          <span className="text-brand-copper text-[10px] sm:text-xs tracking-[0.5em] uppercase font-bold">
            01 / Vybrané
          </span>
          <div className="w-10 h-[1px] bg-brand-copper/60" />
        </div>

        <h2 className="font-extralight text-white tracking-tight uppercase leading-[0.92]">
          <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            {headline}
          </span>
          <span className="block text-brand-copper-light font-light mt-2 text-3xl sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
            {tpp("headlineSuffix")}
          </span>
        </h2>

        <p className="mt-7 text-brand-text/85 font-light text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed">
          {tpp("tagline")}
        </p>

        {/* Hero photo, big and dead-center */}
        <div className="relative mt-10 lg:mt-14 w-full max-w-3xl">
          <div
            className="absolute -inset-x-12 -bottom-2 h-12 rounded-[100%] bg-black/70 blur-2xl pointer-events-none"
            aria-hidden
          />
          {photo ? (
            <Image
              src={photo}
              alt={pi(`${product.id}.name`)}
              width={photoSize.w}
              height={photoSize.h}
              sizes="(max-width: 1024px) 90vw, 760px"
              className="relative h-auto w-full object-contain max-h-[min(70svh,720px)] drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
            />
          ) : null}

          {/* stenciled model code on the side */}
          <span
            className="hidden sm:block absolute top-6 right-4 lg:right-6 text-brand-copper/90 text-xs lg:text-sm tracking-[0.5em] uppercase font-black [writing-mode:vertical-rl] rotate-180"
            aria-hidden
          >
            {product.modelName}
          </span>
        </div>

        {/* Bullets in one row, separated by orange dots */}
        <ul className="mt-10 lg:mt-12 flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
          {product.features.map((feat, i) => (
            <li
              key={feat}
              className="flex items-center gap-3 text-brand-text/90 text-sm sm:text-base font-light tracking-wide"
            >
              {i > 0 && (
                <span
                  className="w-1.5 h-1.5 rounded-full bg-brand-flame shadow-[0_0_8px_rgba(255,140,66,0.7)] -ml-3"
                  aria-hidden
                />
              )}
              <span className="uppercase tracking-[0.18em]">{ft(feat)}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="group mt-10 lg:mt-14 inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-brand-flame to-brand-ember text-white font-black text-sm tracking-[0.35em] uppercase shadow-[0_0_40px_rgba(255,140,66,0.35)] hover:shadow-[0_0_60px_rgba(255,140,66,0.6)] hover:from-brand-ember hover:to-brand-flame transition-all duration-300"
        >
          {tpp("ctaPrimary")}
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
    </PosterPlate>
  );
}
