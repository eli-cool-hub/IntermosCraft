import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";
import PosterPlate from "./PosterPlate";

type Props = { product: Product };

const CROPS: Array<{
  caption: string;
  /** CSS object-position. */
  pos: string;
}> = [
  { caption: "Ocel", pos: "20% 20%" },
  { caption: "Dub", pos: "80% 25%" },
  { caption: "Spoj", pos: "30% 80%" },
  { caption: "Detail", pos: "75% 80%" },
];

/**
 * Variant C — "Detail collage".
 * Big main photo on the left, a 2x2 grid of cropped close-ups on the right.
 * Same source image, different `object-position` so each tile reads like a
 * lookbook detail shot. Below: horizontal POPTAT bar.
 */
export default function ProductPosterVariantC({ product }: Props) {
  const ft = useTranslations("features");
  const pi = useTranslations("productItems");
  const tpp = useTranslations("products.poster");

  const photo = product.cleanImage;
  const photoSize = product.cleanImageIntrinsicSize ?? { w: 1024, h: 969 };
  const headline = pi(`${product.id}.name`).toUpperCase();

  return (
    <PosterPlate>
      <div className="relative px-4 sm:px-8 lg:px-14 pt-12 pb-0 lg:pt-16">
        {/* eyebrow + tight headline */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-brand-copper text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold">
            01 / Lookbook
          </span>
          <div className="w-12 h-[1px] bg-brand-copper/50" />
          <span className="text-brand-muted text-[10px] tracking-[0.3em] uppercase">
            {product.modelName}
          </span>
        </div>

        <h2 className="font-extralight text-white tracking-tight uppercase leading-[0.95] text-3xl sm:text-5xl lg:text-6xl mb-2">
          {headline}
        </h2>
        <p className="text-brand-copper-light font-light italic tracking-wide text-base sm:text-lg mb-10 lg:mb-14">
          {tpp("tagline")}
        </p>

        {/* COLLAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
          {/* Main photo */}
          <div className="lg:col-span-7 relative bg-black/40 border border-brand-border/40 aspect-[5/6]">
            {photo && (
              <Image
                src={photo}
                alt={pi(`${product.id}.name`)}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                style={{ objectPosition: "50% 50%" }}
              />
            )}
            {/* corner accents */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute top-0 left-0 w-10 h-[2px] bg-brand-copper" />
              <div className="absolute top-0 left-0 w-[2px] h-10 bg-brand-copper" />
              <div className="absolute bottom-0 right-0 w-10 h-[2px] bg-brand-copper" />
              <div className="absolute bottom-0 right-0 w-[2px] h-10 bg-brand-copper" />
            </div>
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-brand-darker/80 backdrop-blur-sm px-3 py-1.5 border-l-2 border-brand-copper">
              <span className="text-brand-copper text-[10px] tracking-[0.35em] uppercase font-bold">
                Hlavní pohled
              </span>
            </div>
          </div>

          {/* 2x2 detail grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {CROPS.map((crop, i) => (
              <div
                key={crop.caption + i}
                className="relative bg-black/40 border border-brand-border/40 aspect-square overflow-hidden group"
              >
                {photo && (
                  <Image
                    src={photo}
                    alt={`${pi(`${product.id}.name`)} – ${crop.caption}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-cover scale-[2.2] transition-transform duration-700 group-hover:scale-[2.4]"
                    style={{ objectPosition: crop.pos }}
                  />
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-darker/80 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                  <span className="text-brand-copper text-[10px] tracking-[0.3em] uppercase font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white text-[11px] tracking-[0.25em] uppercase font-semibold">
                    {crop.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* feature row under the collage */}
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {product.features.map((feat, i) => (
            <li key={feat} className="flex items-start gap-3">
              <span className="text-brand-copper text-[10px] tracking-[0.3em] font-black mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-brand-text text-sm sm:text-base font-light leading-snug uppercase tracking-wider">
                {ft(feat)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* POPTAT BAR */}
      <div className="relative mt-12 lg:mt-16 border-t border-brand-border/30 bg-brand-darker/90">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-10 lg:px-14 py-6">
          <div>
            <p className="text-brand-muted text-[10px] tracking-[0.3em] uppercase">
              Zájem o tento kus?
            </p>
            <p className="text-white text-base sm:text-lg font-light tracking-wide">
              Domluvíme rozměry i povrch.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-brand-flame to-brand-ember text-white font-black text-sm tracking-[0.3em] uppercase shadow-[0_0_30px_rgba(255,140,66,0.3)] hover:shadow-[0_0_50px_rgba(255,140,66,0.6)] transition-all duration-300 w-full sm:w-auto"
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
      </div>
    </PosterPlate>
  );
}
