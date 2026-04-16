import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import FireHeroVideo from "@/components/FireHeroVideo";
import { products, formatPrice } from "@/data/products";

const signature = products.find((p) => p.heroImage) ?? products[0];
const upcoming = products.filter((p) => p.id !== signature.id).slice(0, 4);

export default function HomePage() {
  const t = useTranslations();
  const tv = useTranslations("variants");

  return (
    <div className="-mt-20">
      {/* HERO — full-screen video, motto + dual CTA (logo lives in header) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <FireHeroVideo posterSrc={null} />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight text-white/90 tracking-wide mb-10 leading-snug drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
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

      {/* SIGNATURE PIECE — editorial feature with dramatic scale */}
      <section className="relative py-28 lg:py-36 bg-brand-darker overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,rgba(181,114,44,0.08),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-brand-copper text-xs tracking-[0.4em] uppercase font-bold mb-3">
                {tv("collectionLabel")} &mdash; 01
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight">
                {t("featured.title")}
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-2 text-brand-copper text-xs tracking-[0.3em] uppercase hover:text-brand-copper-light transition-colors"
            >
              {t("products.seeAll")}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden bg-brand-card group">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-copper/10 via-transparent to-brand-ember/10 blur-2xl pointer-events-none" />

                <Image
                  src={signature.heroImage!}
                  alt={t(`productItems.${signature.id}.name`)}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />

                <div className="absolute top-0 left-0 w-16 h-[2px] bg-brand-copper" />
                <div className="absolute top-0 left-0 w-[2px] h-16 bg-brand-copper" />
                <div className="absolute bottom-0 right-0 w-16 h-[2px] bg-brand-copper" />
                <div className="absolute bottom-0 right-0 w-[2px] h-16 bg-brand-copper" />

                <div className="absolute bottom-6 left-6 bg-brand-darker/90 backdrop-blur-sm px-4 py-2 border-l-2 border-brand-copper">
                  <span className="text-brand-copper text-[10px] tracking-[0.3em] uppercase font-bold">
                    {signature.modelName}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-7xl lg:text-8xl font-black text-brand-border/30 leading-none select-none">
                  01
                </span>
                <div className="w-12 h-[1px] bg-brand-copper" />
                <span className="text-brand-copper text-[10px] tracking-[0.4em] uppercase font-bold">
                  {tv("forgeFeaturedLabel")}
                </span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-extralight tracking-tight text-white leading-tight mb-2">
                {t(`productItems.${signature.id}.name`)}
              </h3>
              <p className="text-brand-copper text-lg font-light italic tracking-wide mb-8">
                {signature.modelName}
              </p>

              <p className="text-brand-muted leading-relaxed mb-8 text-base lg:text-lg font-light">
                {t(`productItems.${signature.id}.description`)}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {signature.features.map((feat) => (
                  <span
                    key={feat}
                    className="px-3 py-1.5 border border-brand-border/40 text-brand-text text-xs tracking-wide"
                  >
                    {t(`features.${feat}`)}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-6 border-t border-brand-border/20">
                {signature.price && (
                  <div>
                    <p className="text-brand-subtle text-[10px] tracking-[0.3em] uppercase mb-1">
                      {t("products.priceFrom")}
                    </p>
                    <p className="text-2xl font-bold text-white tracking-tight">
                      {formatPrice(signature.price)}
                    </p>
                  </div>
                )}
                <Link
                  href={`/products#${signature.id}`}
                  className="sm:ml-auto inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-brand-copper to-brand-ember text-white font-bold text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(181,114,44,0.4)] transition-shadow"
                >
                  {t("products.details")}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE COLLECTION — editorial upcoming list */}
      <section className="py-24 bg-brand-dark border-t border-brand-border/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-copper text-xs tracking-[0.4em] uppercase font-bold mb-3">
              {tv("collectionLabel")} &mdash; 2026
            </p>
            <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight">
              {t("featured.viewAll")}
            </h2>
          </div>

          <ul className="divide-y divide-brand-border/15">
            {upcoming.map((p, i) => (
              <li key={p.id}>
                <Link
                  href={`/products#${p.id}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-8 py-6 hover:bg-brand-card/40 transition-colors px-2 -mx-2"
                >
                  <span className="text-brand-border/70 group-hover:text-brand-copper text-sm font-black tracking-widest transition-colors w-10">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-light text-white group-hover:text-brand-copper transition-colors truncate">
                      {t(`productItems.${p.id}.name`)}
                    </h3>
                    <p className="text-brand-muted/80 text-sm mt-1 italic truncate">
                      {p.modelName}
                    </p>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] tracking-[0.3em] uppercase text-brand-subtle group-hover:text-brand-copper transition-colors">
                    {t("products.comingSoon")}
                    <svg className="inline-block w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-center mt-14">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-brand-copper text-xs tracking-[0.3em] uppercase hover:text-brand-copper-light transition-colors"
            >
              {t("products.seeAll")}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
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
