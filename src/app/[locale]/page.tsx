import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

/**
 * V1 — "Atelier"
 * Gallery / showroom feel. Big breathing room. Thin elegant typography
 * contrasted with bold accents. Full-bleed product image as hero.
 * No video — the product IS the hero.
 */
export default function HomeV1() {
  const t = useTranslations();

  return (
    <div className="-mt-20">
      {/* HERO — full-bleed product image, text overlay bottom-left */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/fire-pit-hero-1.png"
          alt="IntermosCraft fire pit"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-brand-copper tracking-[0.4em] uppercase text-[11px] font-semibold mb-4">
              IntermosCraft
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extralight tracking-tight leading-[0.95] mb-6 max-w-3xl">
              {t("hero.title").split(" ").slice(0, -2).join(" ")}{" "}
              <em className="font-semibold not-italic text-gradient">
                {t("hero.title").split(" ").slice(-2).join(" ")}
              </em>
            </h1>
            <p className="text-lg text-white/70 max-w-md mb-8 font-light leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-white text-brand-darker font-medium text-sm tracking-widest uppercase hover:bg-brand-copper hover:text-white transition-colors duration-300"
              >
                {t("hero.cta")}
              </Link>
              <Link
                href="/custom"
                className="px-8 py-4 border border-white/30 text-white font-medium text-sm tracking-widest uppercase hover:border-brand-copper transition-colors duration-300"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — single centered statement */}
      <section className="py-32 bg-brand-darker">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-[1px] bg-brand-copper mx-auto mb-10" />
          <p className="text-3xl sm:text-4xl font-extralight leading-relaxed text-brand-text/90">
            We don&apos;t make furniture.
            <br />
            We forge{" "}
            <span className="font-semibold text-gradient">heirlooms</span>.
          </p>
          <div className="w-12 h-[1px] bg-brand-copper mx-auto mt-10" />
        </div>
      </section>

      {/* TWO-UP IMAGES — fire pit images side by side */}
      <section className="bg-brand-dark">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/fire-pit-hero-1.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/fire-pit-hero-2.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* VALUES — minimal, each with thin top line */}
      <section className="py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {(["durability", "handcraft", "personalization", "design"] as const).map(
              (key) => (
                <div key={key}>
                  <div className="w-full h-[1px] bg-brand-copper/40 mb-8" />
                  <h3 className="text-xs tracking-[0.3em] uppercase text-brand-copper font-semibold mb-3">
                    {t(`values.${key}`)}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed font-light">
                    {t(`values.${key}Desc`)}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FEATURED — large single card + two small */}
      <section className="py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-3xl font-extralight">
              {t("featured.title")}
            </h2>
            <Link
              href="/products"
              className="text-brand-copper text-sm tracking-widest uppercase hover:text-brand-copper-light transition-colors"
            >
              {t("featured.viewAll")} &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Link href="/products" className="group relative aspect-square overflow-hidden">
              <Image
                src="/images/nightstand-reference.png"
                alt={t("productItems.nightstand.name")}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-light text-white">{t("productItems.nightstand.name")}</h3>
                <p className="text-white/60 text-sm mt-2 max-w-xs">{t("productItems.nightstand.description")}</p>
              </div>
            </Link>
            <div className="grid grid-rows-2 gap-4">
              {(["coffeeTable", "desk"] as const).map((id) => (
                <Link href="/products" key={id} className="group relative overflow-hidden bg-brand-card border border-brand-border/30 hover:border-brand-copper/30 transition-colors">
                  <div className="p-8 lg:p-10 flex flex-col justify-end h-full">
                    <h3 className="text-xl font-light text-white group-hover:text-brand-copper transition-colors">{t(`productItems.${id}.name`)}</h3>
                    <p className="text-brand-muted text-sm mt-2">{t(`productItems.${id}.description`)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-darker text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extralight mb-4">
            {t("custom.heroText")}
          </h2>
          <p className="text-brand-muted mb-10 font-light">{t("custom.intro")}</p>
          <Link
            href="/custom"
            className="inline-flex px-10 py-4 border border-brand-copper text-brand-copper font-medium text-sm tracking-widest uppercase hover:bg-brand-copper hover:text-white transition-all duration-300"
          >
            {t("hero.ctaSecondary")}
          </Link>
        </div>
      </section>
    </div>
  );
}
