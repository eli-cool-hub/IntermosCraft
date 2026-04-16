import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import FireHeroVideo from "@/components/FireHeroVideo";
import { products } from "@/data/products";

const galleryProducts = products.slice(0, 6);

const gridSpans = [
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
];

export default function HomeV5() {
  const t = useTranslations();
  const tv = useTranslations("variants");

  return (
    <div className="-mt-20">
      {/* HERO — full-screen video, logo + motto + dual CTA */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <FireHeroVideo posterSrc={null} />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <img
            src="/logos/logo-full.png"
            alt="IntermosCraft"
            className="h-14 sm:h-16 mx-auto mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
          />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white/90 tracking-wide mb-10 leading-snug">
            {tv("fireTagline")}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-10 py-4 bg-gradient-to-r from-brand-ember to-brand-flame text-white font-bold text-sm tracking-[0.2em] uppercase shadow-[0_0_40px_rgba(232,93,4,0.35)] hover:shadow-[0_0_60px_rgba(255,140,66,0.5)] transition-shadow duration-500"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="/custom"
              className="px-10 py-4 border-2 border-white/30 text-white font-bold text-sm tracking-[0.2em] uppercase hover:border-brand-flame hover:bg-white/5 transition-all duration-300"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-brand-darker to-transparent" />
      </section>

      {/* MATERIALS SPLIT — wood vs steel */}
      <section className="bg-brand-darker">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative p-12 lg:p-20 flex flex-col justify-center min-h-[420px] bg-gradient-to-br from-[#2a1f14] to-brand-darker">
            <span className="text-brand-flame text-xs tracking-[0.3em] uppercase font-bold">
              01 / {tv("materialIndex")}
            </span>
            <h3 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">{tv("materialOakTitle")}</h3>
            <p className="text-brand-muted leading-relaxed max-w-md">{tv("materialOakDesc")}</p>
            <div className="mt-8 flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C8956D]" />
              <div className="w-10 h-10 rounded-full bg-[#8B6942]" />
              <div className="w-10 h-10 rounded-full bg-[#5C3D21]" />
            </div>
          </div>
          <div className="relative p-12 lg:p-20 flex flex-col justify-center min-h-[420px] bg-gradient-to-bl from-[#1a1a1e] to-brand-darker">
            <span className="text-brand-flame text-xs tracking-[0.3em] uppercase font-bold">
              02 / {tv("materialIndex")}
            </span>
            <h3 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">{tv("materialSteelTitle")}</h3>
            <p className="text-brand-muted leading-relaxed max-w-md">{tv("materialSteelDesc")}</p>
            <div className="mt-8 flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2a2a2e]" />
              <div className="w-10 h-10 rounded-full bg-[#1a1a1e]" />
              <div className="w-10 h-10 rounded-full bg-[#0f0f12] border border-brand-border/30" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY WALL — staggered product photo grid */}
      <section className="py-24 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-brand-copper text-xs tracking-[0.4em] uppercase font-bold mb-3">
                {tv("collectionLabel")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extralight">{t("featured.title")}</h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:block text-brand-copper text-xs tracking-[0.3em] uppercase hover:text-brand-copper-light transition-colors"
            >
              {t("products.seeAll")} &rarr;
            </Link>
          </div>

          {/* Desktop: staggered 3-col grid; Mobile: 1-col stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-2">
            {galleryProducts.map((product, i) => (
              <Link
                key={product.id}
                href="/products"
                className={`group relative overflow-hidden bg-brand-card ${gridSpans[i] || "col-span-1 row-span-1"}`}
              >
                {product.heroImage ? (
                  <Image
                    src={product.heroImage}
                    alt={t(`productItems.${product.id}.name`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-card to-brand-dark flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-10 h-10 text-brand-border/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <span className="text-brand-muted/50 text-xs tracking-wide uppercase">
                        {t("products.comingSoon")}
                      </span>
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {t(`productItems.${product.id}.name`)}
                    </h3>
                    <span className="text-brand-copper text-xs tracking-widest uppercase mt-1 inline-flex items-center gap-1">
                      {t("products.details")}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Subtle border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-brand-copper/20 transition-colors" />
              </Link>
            ))}
          </div>

          {/* Mobile "See All" link */}
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/products"
              className="text-brand-copper text-xs tracking-[0.3em] uppercase hover:text-brand-copper-light transition-colors"
            >
              {t("products.seeAll")} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES — warm card grid */}
      <section className="py-28 bg-brand-ash relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-ember/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t("values.title")}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-brand-flame to-brand-ember mx-auto mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(["durability", "handcraft", "personalization", "design"] as const).map((key) => (
              <div
                key={key}
                className="p-8 bg-brand-darker/80 border border-brand-border/25 hover:border-brand-ember/40 transition-colors backdrop-blur-sm"
              >
                <div className="w-10 h-1 bg-gradient-to-r from-brand-flame to-brand-ember mb-5" />
                <h3 className="text-lg font-semibold text-white mb-2">{t(`values.${key}`)}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{t(`values.${key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dual buttons */}
      <section className="py-28 bg-brand-dark text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-extralight mb-4">{t("custom.heroText")}</h2>
          <p className="text-brand-muted mb-10 font-light">{t("custom.intro")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/custom"
              className="px-10 py-4 bg-brand-copper text-white font-medium text-sm tracking-widest uppercase hover:bg-brand-copper-light transition-colors"
            >
              {t("hero.ctaSecondary")}
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-brand-border text-brand-text font-medium text-sm tracking-widest uppercase hover:border-brand-copper transition-colors"
            >
              {t("contact.pageTitle")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
