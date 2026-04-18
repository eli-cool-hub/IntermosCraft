"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { products, filterCategories, formatPrice, type ProductCategory } from "@/data/products";
import ProductRasterFrame from "@/components/ProductRasterFrame";

const featureIcons: Record<string, React.ReactNode> = {
  durable: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  solidWood: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  steel: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V15m0 0l-2.25-1.313" />
    </svg>
  ),
  custom: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
};

export default function ProductsPage() {
  const t = useTranslations("products");
  const pt = useTranslations("productItems");
  const ft = useTranslations("features");
  const st = useTranslations("specs");
  const tv = useTranslations("variants");
  const [filter, setFilter] = useState<ProductCategory | "all">("all");

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  const featured = filtered.filter((p) => p.heroImage);
  const upcoming = filtered.filter((p) => !p.heroImage);

  return (
    <>
      {/* HERO */}
      <section className="relative py-28 lg:py-36 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(232,93,4,0.08),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-brand-copper" />
              <span className="text-brand-copper text-xs tracking-[0.4em] uppercase font-bold">
                {tv("collectionLabel")}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight mb-6 leading-[0.95]">
              {t("pageTitle")}
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed font-light">
              {t("heroText")}
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-10 bg-brand-darker border-t border-brand-border/15 sticky top-20 z-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {filterCategories.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-semibold border transition-all duration-200 ${
                  filter === f.key
                    ? "bg-brand-copper border-brand-copper text-white"
                    : "bg-transparent border-brand-border/50 text-brand-muted hover:border-brand-copper/50 hover:text-brand-text"
                }`}
              >
                {t(f.tKey)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS — magazine-style spreads */}
      <section className="py-20 lg:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-28 lg:space-y-36">
          {featured.map((product, i) => (
            <article
              key={product.id}
              id={product.id}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Giant index number — decorative */}
              <span
                className="absolute -top-8 -left-2 text-[9rem] lg:text-[12rem] font-black text-brand-border/[0.08] leading-none select-none pointer-events-none z-0"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Image column — sticky on desktop */}
              <div className={`lg:col-span-7 relative z-10 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                {/* Main photo — full art visible (no aspect-box crop) */}
                <div className="relative overflow-hidden bg-brand-card group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-brand-copper/8 via-transparent to-brand-ember/8 blur-2xl pointer-events-none" />
                  <div className="relative z-10 transition-transform duration-700 group-hover:scale-[1.01]">
                    <ProductRasterFrame
                      src={product.heroImage!}
                      intrinsic={product.heroIntrinsicSize ?? { w: 16, h: 9 }}
                      alt={pt(`${product.id}.name`)}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-20">
                    <div className="absolute top-0 left-0 w-16 h-[2px] bg-brand-copper" />
                    <div className="absolute top-0 left-0 w-[2px] h-16 bg-brand-copper" />
                    <div className="absolute bottom-0 right-0 w-16 h-[2px] bg-brand-copper" />
                    <div className="absolute bottom-0 right-0 w-[2px] h-16 bg-brand-copper" />
                  </div>
                </div>

                {/* Dimension sheet — full graphic, readable on all viewports */}
                {product.dimensionImage && (
                  <div className="mt-6 space-y-5 p-5 sm:p-6 bg-brand-card/40 border border-brand-border/20">
                    <div>
                      <p className="text-brand-copper text-[10px] tracking-[0.3em] uppercase font-bold mb-2">
                        {st("dimensions")}
                      </p>
                      {product.dimensions && (
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          <span>
                            <span className="text-brand-muted">{st("width")}</span>{" "}
                            <span className="text-white font-semibold">{product.dimensions.width}{st("mm")}</span>
                          </span>
                          <span>
                            <span className="text-brand-muted">{st("depth")}</span>{" "}
                            <span className="text-white font-semibold">{product.dimensions.depth}{st("mm")}</span>
                          </span>
                          <span>
                            <span className="text-brand-muted">{st("height")}</span>{" "}
                            <span className="text-white font-semibold">{product.dimensions.height}{st("mm")}</span>
                          </span>
                        </div>
                      )}
                    </div>
                    <ProductRasterFrame
                      src={product.dimensionImage}
                      intrinsic={product.dimensionIntrinsicSize ?? { w: 2, h: 3 }}
                      alt={`${pt(`${product.id}.name`)} — ${st("dimensions")}`}
                      maxHeightClass="max-h-[min(75svh,820px)]"
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />
                  </div>
                )}
              </div>

              {/* Info column */}
              <div className={`lg:col-span-5 relative z-10 lg:sticky lg:top-40 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-brand-copper text-[10px] tracking-[0.4em] uppercase font-bold">
                    {String(i + 1).padStart(2, "0")} / {tv("forgeFeaturedLabel")}
                  </span>
                  <div className="w-12 h-[1px] bg-brand-copper/50" />
                </div>

                <h2 className="text-4xl lg:text-5xl font-extralight tracking-tight text-white leading-tight mb-2">
                  {pt(`${product.id}.name`)}
                </h2>
                <p className="text-brand-copper text-lg italic tracking-wide mb-8">
                  {product.modelName}
                </p>

                <p className="text-brand-muted leading-relaxed mb-8 text-base lg:text-lg font-light">
                  {pt(`${product.id}.description`)}
                </p>

                {/* Feature badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-card/60 border border-brand-border/30 text-brand-text text-xs tracking-wide"
                    >
                      {featureIcons[feat]}
                      {ft(feat)}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-6 border-t border-brand-border/20">
                  {product.price && (
                    <div>
                      <p className="text-brand-subtle text-[10px] tracking-[0.3em] uppercase mb-1">
                        {t("priceFrom")}
                      </p>
                      <p className="text-3xl font-bold text-white tracking-tight">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  )}
                  <Link
                    href="/contact"
                    className="sm:ml-auto inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-copper to-brand-ember text-white font-bold text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_40px_rgba(181,114,44,0.4)] transition-shadow"
                  >
                    {t("requestQuote")}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* UPCOMING COLLECTION — editorial list, no empty boxes */}
      {upcoming.length > 0 && (
        <section className="py-24 bg-brand-dark border-t border-brand-border/15">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-brand-copper text-xs tracking-[0.4em] uppercase font-bold mb-3">
                {tv("collectionLabel")} &mdash; 2026
              </p>
              <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight">
                {t("comingSoon")}
              </h2>
            </div>

            <ul className="divide-y divide-brand-border/15">
              {upcoming.map((p, i) => (
                <li key={p.id} id={p.id}>
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-8 py-7">
                    <span className="text-brand-border/70 text-sm font-black tracking-widest w-10">
                      {String(featured.length + i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-light text-white truncate">
                        {pt(`${p.id}.name`)}
                      </h3>
                      <p className="text-brand-muted/80 text-sm mt-1 italic truncate">
                        {p.modelName} &middot; {t(`filter${p.category.charAt(0).toUpperCase() + p.category.slice(1)}` as "filterTables")}
                      </p>
                    </div>
                    <span className="hidden sm:inline-block text-[10px] tracking-[0.3em] uppercase text-brand-subtle">
                      {t("comingSoon")}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Custom CTA */}
      <section className="py-24 bg-brand-darker">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-brand-muted text-lg mb-8 leading-relaxed font-light">
            {t("customNote")}
          </p>
          <Link
            href="/custom"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-copper text-brand-copper font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-copper hover:text-white transition-colors"
          >
            {t("requestQuote")}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
