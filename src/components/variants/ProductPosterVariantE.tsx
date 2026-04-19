import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";
import PosterPlate from "./PosterPlate";

type Props = { product: Product };

const SPEC_ROWS: Array<{ label: string; value: string }> = [
  { label: "Materiál", value: "Masivní dub + černá ocel" },
  { label: "Výroba", value: "Ručně, Česká republika" },
  { label: "Spojení", value: "Svárové, šroubované" },
  { label: "Povrch", value: "Olej / práškování" },
];

/**
 * Variant E — "Forge spec sheet".
 * Minimal, technical, almost a blueprint. Copper hairlines, monospaced
 * meta, photo centered between two columns of spec data, abstract
 * dimensions diagram callout, big POPTAT at the foot.
 */
export default function ProductPosterVariantE({ product }: Props) {
  const ft = useTranslations("features");
  const pi = useTranslations("productItems");
  const tpp = useTranslations("products.poster");

  const photo = product.cleanImage;
  const photoSize = product.cleanImageIntrinsicSize ?? { w: 1024, h: 969 };
  const headline = pi(`${product.id}.name`).toUpperCase();

  return (
    <PosterPlate>
      <div className="relative px-6 sm:px-10 lg:px-16 pt-12 pb-12 lg:pt-16 lg:pb-16">
        {/* Header bar — file metadata strip */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pb-4 border-b border-brand-copper/40">
          <div>
            <p className="font-mono text-brand-copper text-[10px] tracking-[0.4em] uppercase">
              ic / forge / spec-sheet
            </p>
            <h2 className="mt-2 font-extralight text-white tracking-tight uppercase leading-[0.95] text-3xl sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
          </div>
          <div className="font-mono text-right">
            <p className="text-brand-muted text-[10px] tracking-[0.3em] uppercase">
              Ref. č.
            </p>
            <p className="text-brand-copper-light text-lg sm:text-xl tracking-[0.25em] uppercase">
              IC-01-{product.modelName.toUpperCase().slice(0, 3)}
            </p>
          </div>
        </div>

        {/* MAIN GRID: spec | photo+diagram | spec */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-10">
          {/* LEFT spec column */}
          <dl className="lg:col-span-3 space-y-5 order-2 lg:order-1">
            {SPEC_ROWS.slice(0, 2).map((row) => (
              <div key={row.label} className="border-l border-brand-copper/40 pl-4">
                <dt className="font-mono text-brand-copper text-[10px] tracking-[0.4em] uppercase">
                  {row.label}
                </dt>
                <dd className="mt-1 text-white text-sm sm:text-base font-light leading-snug">
                  {row.value}
                </dd>
              </div>
            ))}
            <div className="border-l border-brand-copper/40 pl-4">
              <dt className="font-mono text-brand-copper text-[10px] tracking-[0.4em] uppercase">
                Vlastnosti
              </dt>
              <dd className="mt-2 text-white text-sm font-light leading-relaxed">
                {product.features.map((f, i) => (
                  <span key={f}>
                    {ft(f)}
                    {i < product.features.length - 1 && (
                      <span className="text-brand-copper/60 mx-2">/</span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          {/* CENTER — photo with blueprint diagram beneath */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative w-full">
              <div
                className="absolute -inset-x-4 -bottom-2 h-8 rounded-[100%] bg-black/60 blur-2xl pointer-events-none"
                aria-hidden
              />
              {photo && (
                <Image
                  src={photo}
                  alt={pi(`${product.id}.name`)}
                  width={photoSize.w}
                  height={photoSize.h}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="relative h-auto w-full object-contain max-h-[min(60svh,560px)] drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
                />
              )}

              {/* abstract dimensions ticks */}
              <svg
                className="hidden sm:block absolute -left-3 top-2 bottom-2 text-brand-copper/60"
                width="14"
                height="100%"
                viewBox="0 0 14 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <line x1="7" y1="0" x2="7" y2="100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="100" x2="14" y2="100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="3" y1="50" x2="11" y2="50" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <svg
                className="hidden sm:block absolute -bottom-3 left-2 right-2 text-brand-copper/60"
                width="100%"
                height="14"
                viewBox="0 0 100 14"
                preserveAspectRatio="none"
                aria-hidden
              >
                <line x1="0" y1="7" x2="100" y2="7" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="0" x2="0" y2="14" stroke="currentColor" strokeWidth="0.5" />
                <line x1="100" y1="0" x2="100" y2="14" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="3" x2="50" y2="11" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
            <p className="mt-8 text-center font-mono text-brand-muted text-[10px] sm:text-xs tracking-[0.4em] uppercase">
              {tpp("tagline")}
            </p>
          </div>

          {/* RIGHT spec column */}
          <dl className="lg:col-span-3 space-y-5 order-3">
            {SPEC_ROWS.slice(2).map((row) => (
              <div key={row.label} className="border-l border-brand-copper/40 pl-4">
                <dt className="font-mono text-brand-copper text-[10px] tracking-[0.4em] uppercase">
                  {row.label}
                </dt>
                <dd className="mt-1 text-white text-sm sm:text-base font-light leading-snug">
                  {row.value}
                </dd>
              </div>
            ))}
            <div className="border-l border-brand-copper/40 pl-4">
              <dt className="font-mono text-brand-copper text-[10px] tracking-[0.4em] uppercase">
                Záruka
              </dt>
              <dd className="mt-1 text-white text-sm sm:text-base font-light leading-snug">
                Doživotní na řemeslo
              </dd>
            </div>
          </dl>
        </div>

        {/* Foot — POPTAT button + signature */}
        <div className="mt-12 lg:mt-16 pt-6 border-t border-brand-copper/40 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-mono text-brand-muted text-[10px] tracking-[0.4em] uppercase order-2 sm:order-1">
            Vykováno v Krušných horách &middot; IntermosCraft 2026
          </p>
          <Link
            href="/contact"
            className="group order-1 sm:order-2 inline-flex items-center justify-center gap-3 px-12 py-4 bg-gradient-to-r from-brand-flame to-brand-ember text-white font-black text-sm tracking-[0.35em] uppercase shadow-[0_0_35px_rgba(255,140,66,0.3)] hover:shadow-[0_0_55px_rgba(255,140,66,0.55)] transition-all duration-300"
          >
            {tpp("ctaPrimary")} &rarr;
          </Link>
        </div>
      </div>
    </PosterPlate>
  );
}
