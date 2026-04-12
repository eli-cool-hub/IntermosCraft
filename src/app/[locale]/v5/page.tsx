import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import FireHeroVideo from "@/components/FireHeroVideo";

/**
 * V5 — "Nocturne"
 * FULL-SCREEN VIDEO hero. Extremely minimal — almost no text on first
 * screen, just the logo mark and a single line. Scroll to discover.
 * Dark, cinematic, mysterious. The fire speaks for itself.
 * Premium through restraint.
 */
export default function HomeV5() {
  const t = useTranslations();
  const tv = useTranslations("variants");

  return (
    <div className="-mt-20">
      {/* HERO — full-screen video, minimal centered wordmark */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <FireHeroVideo posterSrc="/images/fire-pit-hero-2.png" />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

        <div className="relative z-10 text-center">
          <img
            src="/logos/logo-full.png"
            alt="IntermosCraft"
            className="h-14 sm:h-16 mx-auto mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
          />
          <h1 className="text-3xl sm:text-4xl font-extralight text-white/90 tracking-wide mb-12">
            {tv("fireTagline")}
          </h1>
          <Link
            href="/products"
            className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-xs tracking-[0.4em] uppercase">{t("hero.cta")}</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </Link>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-brand-darker to-transparent" />
      </section>

      {/* REVEAL STATEMENT */}
      <section className="py-32 bg-brand-darker">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-[1.2] text-brand-text/90">
            {t("hero.subtitle").split(".")[0]}.
          </p>
          <p className="text-xl text-brand-muted font-light mt-6">
            {t("hero.subtitle").split(".").slice(1).join(".").trim()}
          </p>
        </div>
      </section>

      {/* FULL-WIDTH IMAGE — dramatic */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image src="/images/fire-pit-hero-1.png" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-black/20 to-brand-darker/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/80 via-transparent to-brand-darker/80" />
      </section>

      {/* PRODUCTS — horizontal scroll look (stacked on mobile) */}
      <section className="py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-brand-copper text-xs tracking-[0.4em] uppercase font-bold mb-3">Collection</p>
              <h2 className="text-3xl sm:text-4xl font-extralight">{t("featured.title")}</h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:block text-brand-copper text-xs tracking-[0.3em] uppercase hover:text-brand-copper-light transition-colors"
            >
              {t("featured.viewAll")} &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {(["nightstand", "coffeeTable", "desk"] as const).map((id) => (
              <Link
                key={id}
                href="/products"
                className="group relative aspect-[3/4] overflow-hidden bg-brand-card"
              >
                {id === "nightstand" ? (
                  <Image
                    src="/images/nightstand-reference.png"
                    alt={t(`productItems.${id}.name`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-card to-brand-ash" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-0 border border-transparent group-hover:border-brand-copper/20 transition-colors" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-xl font-semibold text-white group-hover:text-brand-copper transition-colors">
                    {t(`productItems.${id}.name`)}
                  </h3>
                  <p className="text-sm text-brand-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t(`productItems.${id}.description`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND IMAGE + QUOTE */}
      <section className="relative h-[45vh] min-h-[320px]">
        <Image src="/images/fire-pit-hero-2.png" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <blockquote className="text-center max-w-2xl">
            <p className="text-3xl sm:text-4xl font-extralight text-white leading-snug">
              &ldquo;We don&apos;t make furniture.
              <br />
              We forge <span className="text-gradient-fire font-semibold">heirlooms</span>.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* VALUES — ultra-minimal list */}
      <section className="py-24 bg-brand-darker">
        <div className="max-w-3xl mx-auto px-6">
          {(["durability", "handcraft", "personalization", "design"] as const).map((key, i) => (
            <div key={key} className="flex items-start gap-8 py-8 border-b border-brand-border/20 last:border-0">
              <span className="text-brand-copper text-xs font-bold tracking-widest w-8 pt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-1">{t(`values.${key}`)}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{t(`values.${key}Desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — dead simple */}
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
