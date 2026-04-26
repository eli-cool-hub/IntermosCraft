import { Fragment } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  productGroups,
  type ProductCategory,
} from "@/data/products";

/** Hub displays only "Furniture" and "Exterior" — Custom orders live on /custom. */
const HUB_GROUPS = productGroups.filter((g) => g.id !== "custom");

/** Roman chapter markers — restored from the owner's group hierarchy. */
const ROMAN_NUMERALS = ["I", "II", "III", "IV"] as const;

const CATEGORY_HERO_IMAGE: Record<ProductCategory, { src: string; alt: string }> = {
  industrialFurniture: {
    src: "/images/categories/cat-industrial-furniture.png",
    alt: "Industriální nábytek — masivní dřevo a ocel v dílně",
  },
  industrialAccessories: {
    src: "/images/categories/cat-industrial-accessories.png",
    alt: "Industriální doplňky — masivní dub, detail",
  },
  outdoorFire: {
    src: "/images/categories/cat-outdoor-fire.png",
    alt: "Venkovní ohniště, krby a grily — oheň za soumraku",
  },
  benches: {
    src: "/images/categories/cat-benches.png",
    alt: "Lavičky — masivní dub a ocel ve volné krajině",
  },
  pergolasFences: {
    src: "/images/categories/cat-pergolas-fences.png",
    alt: "Pergoly a ploty — ocelová silueta proti západu slunce",
  },
  binBoxes: {
    src: "/images/categories/cat-bin-boxes.png",
    alt: "Boxy na popelnice — moderní design v betonovém prostoru",
  },
  /* metalwork hero — kept for future use, not rendered in current hub */
  metalwork: {
    src: "/images/categories/cat-industrial-furniture.png",
    alt: "Zámečnická výroba",
  },
};

export default function ProductsPage() {
  const t = useTranslations("products");
  const tc = useTranslations("productCategories");
  const tg = useTranslations("productGroups");

  return (
    <div className="relative bg-brand-darker overflow-hidden">
      {/* Editorial mood — corner copper haze + faint grain, matches mockup */}
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_15%_8%,rgba(181,114,44,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_92%_92%,rgba(232,93,4,0.10),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-12 lg:pt-20 pb-20 lg:pb-32">
        {/* HERO — single huge serif headline (mockup top, no brand eyebrow) */}
        <header className="mb-12 lg:mb-20">
          <h1
            className="font-serif font-light italic text-brand-copper-light leading-[0.9] tracking-tight text-[3.25rem] sm:text-7xl lg:text-[7.5rem] xl:text-[9rem]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t("pageTitle")}
          </h1>
        </header>

        {/* EDITORIAL ROWS — alternating image/text, grouped under chapter dividers */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
          {HUB_GROUPS.map((group, gi) => {
            const startIndex = HUB_GROUPS.slice(0, gi).reduce(
              (n, g) => n + g.categories.length,
              0,
            );

            return (
              <Fragment key={group.id}>
                {/* CHAPTER DIVIDER — Roman numeral + group name in tracked caps */}
                <div
                  id={`group-${group.id}`}
                  className="text-center pt-4 pb-2 sm:pt-6 sm:pb-3 lg:pt-10 lg:pb-4 scroll-mt-24"
                >
                  <p
                    className="font-serif italic text-brand-copper-light leading-none text-4xl sm:text-5xl lg:text-6xl mb-4 lg:mb-5"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {ROMAN_NUMERALS[gi]}
                  </p>
                  <div className="flex items-center justify-center gap-4 sm:gap-5">
                    <span
                      aria-hidden
                      className="h-px w-10 sm:w-14 lg:w-20 bg-brand-copper/50"
                    />
                    <span className="text-brand-text text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase font-semibold whitespace-nowrap">
                      {tg(`${group.id}.name`)}
                    </span>
                    <span
                      aria-hidden
                      className="h-px w-10 sm:w-14 lg:w-20 bg-brand-copper/50"
                    />
                  </div>
                </div>

                {/* CATEGORY ROWS for this group */}
                {group.categories.map((catId, ci) => {
                  const globalIndex = startIndex + ci;
                  const isImageLeft = globalIndex % 2 === 0;
                  const hero = CATEGORY_HERO_IMAGE[catId];

                  return (
                    <article
                      key={catId}
                      id={`cat-${catId}`}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center scroll-mt-24"
                    >
                      {/* IMAGE COLUMN */}
                      <div
                        className={`lg:col-span-7 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
                      >
                        <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-card/40 ring-1 ring-brand-border/40">
                          <Image
                            src={hero.src}
                            alt={hero.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            priority={globalIndex < 2}
                            className="object-cover"
                          />
                          {/* very subtle dark vignette to hold legibility against bright sky shots */}
                          <div
                            className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/25 via-transparent to-transparent"
                            aria-hidden
                          />
                        </div>
                      </div>

                      {/* TEXT COLUMN */}
                      <div
                        className={`lg:col-span-5 ${isImageLeft ? "lg:order-2 lg:pl-2" : "lg:order-1 lg:pr-2"}`}
                      >
                        <h2
                          className="font-serif font-light text-white tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] mb-5 lg:mb-7"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {tc(`${catId}.name`)}
                        </h2>
                        <p className="text-brand-muted text-sm sm:text-base lg:text-[1.05rem] leading-relaxed font-light max-w-[44ch]">
                          {tc(`${catId}.lead`)}
                        </p>
                        <p
                          className="mt-5 lg:mt-7 font-serif italic text-brand-copper-light text-base sm:text-lg lg:text-xl"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          „{tc(`${catId}.tagline`)}"
                        </p>
                      </div>
                    </article>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
