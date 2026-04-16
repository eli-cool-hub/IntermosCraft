"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { products, filterCategories, formatPrice, type ProductCategory } from "@/data/products";

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
  const [filter, setFilter] = useState<ProductCategory | "all">("all");

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-brand-copper" />
              <span className="text-brand-copper text-sm tracking-[0.2em] uppercase font-medium">
                IntermosCraft
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t("pageTitle")}
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed">
              {t("heroText")}
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Product Detail Cards */}
      <section className="py-16 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-16">
            {filterCategories.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 text-sm tracking-wide rounded-sm border transition-all duration-200 ${
                  filter === f.key
                    ? "bg-brand-copper border-brand-copper text-white"
                    : "bg-transparent border-brand-border text-brand-muted hover:border-brand-copper/50 hover:text-brand-text"
                }`}
              >
                {t(f.tKey)}
              </button>
            ))}
          </div>

          {/* Product detail rows */}
          <div className="space-y-0">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                id={product.id}
                className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] border-t border-brand-border/15 first:border-t-0"
              >
                {/* Image side */}
                <div className={`relative min-h-[350px] lg:min-h-[480px] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  {product.heroImage ? (
                    <Image
                      src={product.heroImage}
                      alt={pt(`${product.id}.name`)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-card to-brand-dark flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-brand-border/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                        <span className="text-brand-subtle text-sm">{t("comingSoon")}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info side */}
                <div className={`flex flex-col justify-center p-10 lg:p-16 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-brand-copper text-xs tracking-[0.4em] uppercase font-bold mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h2 className="text-3xl lg:text-4xl font-light mb-1">
                    {pt(`${product.id}.name`)}
                  </h2>
                  <p className="text-brand-copper text-sm font-semibold tracking-wide mb-5">
                    {product.modelName}
                  </p>

                  <p className="text-brand-muted leading-relaxed mb-6">
                    {pt(`${product.id}.description`)}
                  </p>

                  {/* Feature badges */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {product.features.map((feat) => (
                      <span
                        key={feat}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-card border border-brand-border/30 text-brand-text text-xs tracking-wide"
                      >
                        {featureIcons[feat]}
                        {ft(feat)}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  {product.price && (
                    <div className="inline-flex self-start px-5 py-3 border-2 border-brand-copper/40 mb-6">
                      <span className="text-2xl font-bold text-white tracking-tight">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  )}

                  {/* Dimensions */}
                  {product.dimensions && (
                    <div className="mb-6">
                      <h4 className="text-brand-copper text-xs tracking-[0.3em] uppercase font-bold mb-3">
                        {st("dimensions")}
                      </h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-brand-muted">{st("width")}</span>
                          <p className="text-white font-semibold">{product.dimensions.width} {st("mm")}</p>
                        </div>
                        <div>
                          <span className="text-brand-muted">{st("depth")}</span>
                          <p className="text-white font-semibold">{product.dimensions.depth} {st("mm")}</p>
                        </div>
                        <div>
                          <span className="text-brand-muted">{st("height")}</span>
                          <p className="text-white font-semibold">{product.dimensions.height} {st("mm")}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dimension drawing */}
                  {product.dimensionImage && (
                    <div className="relative w-full max-w-[280px] aspect-square mb-6 bg-brand-card/50 border border-brand-border/20 overflow-hidden">
                      <Image
                        src={product.dimensionImage}
                        alt={`${pt(`${product.id}.name`)} — ${st("dimensions")}`}
                        fill
                        className="object-contain p-2"
                        sizes="280px"
                      />
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex self-start items-center gap-2 px-8 py-3 bg-gradient-to-r from-brand-copper to-brand-ember text-white font-bold text-sm tracking-[0.15em] uppercase hover:shadow-[0_0_30px_rgba(181,114,44,0.3)] transition-shadow"
                  >
                    {t("requestQuote")}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Custom note */}
          <div className="mt-20 p-10 bg-brand-card border border-brand-border/30 text-center">
            <p className="text-brand-muted text-lg">
              {t("customNote")}
            </p>
            <Link
              href="/custom"
              className="inline-flex items-center gap-2 mt-6 text-brand-copper hover:text-brand-copper-light transition-colors font-semibold text-sm tracking-widest uppercase"
            >
              {t("requestQuote")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
