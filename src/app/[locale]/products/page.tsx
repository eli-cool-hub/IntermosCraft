"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { products, filterCategories, type ProductCategory } from "@/data/products";
import ProductPosterCard from "@/components/ProductPosterCard";

export default function ProductsPage() {
  const t = useTranslations("products");
  const pt = useTranslations("productItems");
  const tv = useTranslations("variants");
  const [filter, setFilter] = useState<ProductCategory | "all">("all");

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  // Featured = anything with a real, clean product photo.
  const featured = filtered.filter((p) => p.cleanImage);
  const upcoming = filtered.filter((p) => !p.cleanImage);

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

      {/* FEATURED — poster cards (one per real product) */}
      <section className="py-16 lg:py-24 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          {featured.map((product, i) => (
            <ProductPosterCard
              key={product.id}
              product={product}
              index={i + 1}
              variant="full"
              priority={i === 0}
            />
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
                        {p.modelName} &middot;{" "}
                        {t(
                          `filter${p.category.charAt(0).toUpperCase() + p.category.slice(1)}` as "filterTables"
                        )}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
