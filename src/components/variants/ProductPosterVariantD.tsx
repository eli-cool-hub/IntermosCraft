import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";
import PosterPlate from "./PosterPlate";

type Props = { product: Product };

/**
 * Variant D — "Editorial split".
 * Photo dominates the right two-thirds. Left gutter holds an ultra-thin
 * vertical product code. Below it: copper rule, numbered features in a
 * tight column, single big POPTAT.
 */
export default function ProductPosterVariantD({ product }: Props) {
  const ft = useTranslations("features");
  const pi = useTranslations("productItems");
  const tpp = useTranslations("products.poster");

  const photo = product.cleanImage;
  const headline = pi(`${product.id}.name`).toUpperCase();

  return (
    <PosterPlate>
      <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[720px] lg:min-h-[820px]">
        {/* LEFT — vertical word + meta column */}
        <div className="lg:col-span-5 relative flex flex-col px-6 sm:px-10 lg:px-12 pt-12 pb-10 lg:pt-16 lg:pb-16">
          {/* vertical product code */}
          <div className="hidden lg:flex absolute top-0 left-4 h-full items-center">
            <span
              className="text-brand-copper/30 text-[8.5rem] xl:text-[10rem] font-black uppercase tracking-tight leading-none [writing-mode:vertical-rl] rotate-180 select-none"
              aria-hidden
            >
              {product.modelName}
            </span>
          </div>

          <div className="relative lg:pl-32">
            <span className="block text-brand-copper text-[10px] tracking-[0.5em] uppercase font-bold mb-6">
              Edice 01
            </span>

            <h2 className="font-extralight text-white tracking-tight uppercase leading-[0.9] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              {headline}
            </h2>

            <div className="mt-6 mb-8 h-[2px] w-20 bg-brand-copper" />

            <p className="text-brand-text/85 font-light text-base sm:text-lg max-w-md leading-relaxed">
              {tpp("tagline")}
            </p>

            {/* Numbered features */}
            <ol className="mt-10 space-y-5 max-w-md">
              {product.features.map((feat, i) => (
                <li
                  key={feat}
                  className="flex items-baseline gap-5 border-b border-brand-border/25 pb-3"
                >
                  <span className="text-brand-copper-light text-2xl font-extralight tabular-nums w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white text-base sm:text-lg font-light tracking-wide uppercase">
                    {ft(feat)}
                  </span>
                </li>
              ))}
            </ol>

            <Link
              href="/contact"
              className="group mt-12 inline-flex items-center justify-between gap-3 px-8 py-5 bg-gradient-to-r from-brand-flame to-brand-ember text-white font-black text-sm tracking-[0.3em] uppercase shadow-[0_0_35px_rgba(255,140,66,0.3)] hover:shadow-[0_0_55px_rgba(255,140,66,0.55)] transition-all duration-300 w-full max-w-md"
            >
              <span>{tpp("ctaPrimary")} {product.modelName}</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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

        {/* RIGHT — photo dominant */}
        <div className="lg:col-span-7 relative bg-gradient-to-br from-black/40 to-transparent border-t lg:border-t-0 lg:border-l border-brand-border/25 min-h-[400px] lg:min-h-full">
          {photo && (
            <Image
              src={photo}
              alt={pi(`${product.id}.name`)}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />
          )}
          {/* subtle inner vignette to make text breathe */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-brand-darker/70 via-transparent to-brand-darker/40 lg:from-brand-darker/40 lg:to-brand-darker/40"
            aria-hidden
          />
          {/* big number watermark */}
          <span
            className="absolute top-6 right-6 text-brand-copper/40 text-6xl sm:text-7xl font-black tabular-nums select-none"
            aria-hidden
          >
            01
          </span>
          {/* bottom-right caption */}
          <div className="absolute bottom-5 right-5 text-right">
            <p className="text-brand-copper text-[10px] tracking-[0.5em] uppercase font-bold">
              {product.modelName}
            </p>
            <p className="text-white/60 text-xs tracking-[0.25em] uppercase mt-1">
              IntermosCraft &mdash; 2026
            </p>
          </div>
        </div>
      </div>
    </PosterPlate>
  );
}
