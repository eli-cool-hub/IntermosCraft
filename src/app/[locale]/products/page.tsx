"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState } from "react";

type Category = "all" | "tables" | "storage" | "seating";

const products = [
  { id: "nightstand", image: "/images/nightstand-reference.png", category: "storage" as const },
  { id: "coffeeTable", image: null, category: "tables" as const },
  { id: "shelf", image: null, category: "storage" as const },
  { id: "desk", image: null, category: "tables" as const },
  { id: "bench", image: null, category: "seating" as const },
  { id: "tvStand", image: null, category: "storage" as const },
];

const filterKeys: { key: Category; tKey: string }[] = [
  { key: "all", tKey: "filterAll" },
  { key: "tables", tKey: "filterTables" },
  { key: "storage", tKey: "filterStorage" },
  { key: "seating", tKey: "filterSeating" },
];

export default function ProductsPage() {
  const t = useTranslations("products");
  const pt = useTranslations("productItems");
  const [filter, setFilter] = useState<Category>("all");

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

      {/* Filters + Grid */}
      <section className="py-16 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filterKeys.map((f) => (
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

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group bg-brand-card rounded-sm border border-brand-border/50 overflow-hidden hover:border-brand-copper/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative bg-brand-dark overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={pt(`${product.id}.name`)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="w-12 h-12 text-brand-border mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                          />
                        </svg>
                        <span className="text-brand-subtle text-xs">Photo coming soon</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-copper transition-colors">
                    {pt(`${product.id}.name`)}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-4">
                    {pt(`${product.id}.description`)}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-brand-copper hover:text-brand-copper-light text-sm font-medium transition-colors"
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
          <div className="mt-16 p-8 bg-brand-card rounded-sm border border-brand-border/50 text-center">
            <p className="text-brand-muted">
              {t("customNote")}
            </p>
            <Link
              href="/custom"
              className="inline-flex items-center gap-2 mt-4 text-brand-copper hover:text-brand-copper-light transition-colors font-medium"
            >
              Design Your Own
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
