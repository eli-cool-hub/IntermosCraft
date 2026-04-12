import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

/**
 * V2 — "Monolith"
 * Product-first. Giant image hero, almost no text on screen until you scroll.
 * Bold horizontal lines. Oversized section numbers. Magazine editorial grid.
 * No video — photography dominates.
 */
export default function HomeV2() {
  const t = useTranslations();
  const tv = useTranslations("variants");

  return (
    <div className="-mt-20">
      {/* HERO — product takes 80% of viewport, tiny text bar at bottom */}
      <section className="relative h-screen overflow-hidden bg-black">
        <Image
          src="/images/fire-pit-hero-2.png"
          alt="IntermosCraft"
          fill
          className="object-cover opacity-90"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

        {/* Thin bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-brand-copper/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              {tv("fireTagline")}
              <span className="text-brand-copper ml-2 font-semibold">.</span>
            </h1>
            <Link
              href="/products"
              className="px-8 py-3 border border-brand-copper text-brand-copper text-xs tracking-[0.3em] uppercase font-semibold hover:bg-brand-copper hover:text-white transition-all"
            >
              {t("hero.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* MANIFESTO — numbered principles */}
      <section className="py-32 bg-brand-darker">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <span className="text-[8rem] font-black text-brand-border/20 leading-none block -mb-8">01</span>
              <h3 className="text-xl font-semibold mb-3">{t("about.quality1")}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{t("about.quality1Desc")}</p>
            </div>
            <div>
              <span className="text-[8rem] font-black text-brand-border/20 leading-none block -mb-8">02</span>
              <h3 className="text-xl font-semibold mb-3">{t("about.quality2")}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{t("about.quality2Desc")}</p>
            </div>
            <div>
              <span className="text-[8rem] font-black text-brand-border/20 leading-none block -mb-8">03</span>
              <h3 className="text-xl font-semibold mb-3">{t("about.quality3")}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{t("about.quality3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED IMAGE BREAK */}
      <section className="relative h-[50vh] min-h-[360px]">
        <Image src="/images/fire-pit-hero-1.png" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white text-center tracking-tight px-6">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* EDITORIAL PRODUCT GRID — alternating image + text */}
      <section className="bg-brand-darker">
        {(["nightstand", "coffeeTable", "desk"] as const).map((id, i) => (
          <div
            key={id}
            className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]"
          >
            <div className={`relative min-h-[300px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              {id === "nightstand" ? (
                <Image
                  src="/images/nightstand-reference.png"
                  alt={t(`productItems.${id}.name`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-card to-brand-dark" />
              )}
            </div>
            <div className={`flex flex-col justify-center p-12 lg:p-20 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <span className="text-brand-copper text-xs tracking-[0.4em] uppercase font-bold mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl font-light mb-4">{t(`productItems.${id}.name`)}</h3>
              <p className="text-brand-muted leading-relaxed mb-8">{t(`productItems.${id}.description`)}</p>
              <Link
                href="/contact"
                className="self-start text-brand-copper text-xs tracking-[0.3em] uppercase font-semibold hover:text-brand-copper-light transition-colors"
              >
                {t("products.requestQuote")} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-dark border-t border-brand-border/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extralight mb-6">{t("custom.heroText")}</h2>
          <Link
            href="/custom"
            className="inline-flex px-12 py-4 bg-brand-copper text-white font-medium text-sm tracking-widest uppercase hover:bg-brand-copper-light transition-colors"
          >
            {t("hero.ctaSecondary")}
          </Link>
        </div>
      </section>
    </div>
  );
}
