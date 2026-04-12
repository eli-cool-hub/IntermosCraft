import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

/**
 * V3 — "Forge"
 * Industrial-luxe. Split hero (text left, image right). Heavy uppercase
 * type, angular accents. Dark metallic palette. Process timeline.
 * No video — static imagery + bold graphic design.
 */
export default function HomeV3() {
  const t = useTranslations();
  const tv = useTranslations("variants");

  return (
    <div className="-mt-20">
      {/* HERO — split: text left, image right */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-brand-darker">
        {/* Left text */}
        <div className="relative flex items-center px-8 lg:px-16 xl:px-24 py-32 lg:py-0 z-10">
          <div className="max-w-lg">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-3 h-3 bg-brand-copper rotate-45" />
              <span className="text-brand-copper tracking-[0.4em] uppercase text-[10px] font-bold">
                Est. 2024 &mdash; Czech Republic
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.0] mb-8 uppercase">
              <span className="text-brand-text">{tv("hearthLead").split(",")[0]}</span>
              <br />
              <span className="text-gradient-fire">
                {tv("hearthLead").split(",").slice(1).join(",").trim() || "steel & flame"}
              </span>
            </h1>
            <div className="w-20 h-[2px] bg-gradient-to-r from-brand-copper to-brand-ember mb-8" />
            <p className="text-lg text-brand-muted leading-relaxed mb-12 font-light">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-copper to-brand-ember text-white font-bold uppercase text-sm tracking-widest hover:shadow-[0_0_30px_rgba(181,114,44,0.3)] transition-shadow"
              >
                {t("hero.cta")}
              </Link>
              <Link
                href="/custom"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-border text-brand-text font-bold uppercase text-sm tracking-widest hover:border-brand-copper transition-colors"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/fire-pit-hero-1.png"
            alt="IntermosCraft fire pit"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-transparent to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-brand-copper via-brand-copper/50 to-transparent" />
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="relative py-4 bg-brand-ash overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-ember/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-ember/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 py-3">
          {(["forgeK1", "forgeK2", "forgeK3", "forgeK4", "forgeK5", "forgeK6"] as const).map((key) => (
            <span key={key} className="text-[10px] tracking-[0.5em] uppercase text-brand-copper/60 font-bold whitespace-nowrap">
              {tv(key)}
            </span>
          ))}
        </div>
      </section>

      {/* SHOWCASE — asymmetric bento grid */}
      <section className="py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4">
            {/* Large */}
            <div className="col-span-12 lg:col-span-7 group relative overflow-hidden aspect-[16/10]">
              <Image
                src="/images/fire-pit-hero-2.png"
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 border border-brand-copper/0 group-hover:border-brand-copper/30 transition-all duration-500" />
              <div className="absolute bottom-0 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-[2px] bg-brand-copper" />
                  <span className="text-brand-copper text-[10px] tracking-[0.4em] uppercase font-bold">{tv("forgeFeaturedLabel")}</span>
                </div>
                <h3 className="text-3xl font-bold">{tv("forgeOutdoorTitle")}</h3>
                <p className="text-white/70 text-sm mt-2 max-w-md">{tv("forgeOutdoorCaption")}</p>
              </div>
            </div>
            {/* Stacked right */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
              {(["coffeeTable", "desk"] as const).map((id, i) => (
                <div key={id} className="group relative flex-1 min-h-[200px] bg-brand-card border border-brand-border/30 hover:border-brand-copper/30 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-copper/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <span className="text-brand-copper text-[10px] tracking-[0.4em] uppercase font-bold">{String(i + 2).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-brand-copper transition-colors">{t(`productItems.${id}.name`)}</h3>
                      <p className="text-brand-muted text-sm mt-2">{t(`productItems.${id}.description`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — 2x2 grid, corner accents */}
      <section className="py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-3 h-3 bg-brand-copper rotate-45 mx-auto mb-6" />
            <h2 className="text-4xl font-black uppercase tracking-tight">{t("values.title")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-brand-border/20">
            {(["durability", "handcraft", "personalization", "design"] as const).map(
              (key, i) => (
                <div key={key} className="group relative bg-brand-darker p-10 lg:p-12 hover:bg-brand-card transition-colors">
                  <div className="absolute top-0 left-0 w-12 h-[2px] bg-brand-copper/0 group-hover:bg-brand-copper transition-all" />
                  <div className="absolute top-0 left-0 w-[2px] h-12 bg-brand-copper/0 group-hover:bg-brand-copper transition-all" />
                  <span className="text-brand-copper text-[10px] tracking-[0.4em] uppercase font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-bold mt-4 mb-3 uppercase tracking-wide">{t(`values.${key}`)}</h3>
                  <p className="text-brand-muted leading-relaxed">{t(`values.${key}Desc`)}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-copper/5 via-transparent to-brand-copper/5" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-copper/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="text-[15vw] font-black uppercase text-brand-border/[0.04] tracking-tighter whitespace-nowrap">
            {tv("ctaBespokeWatermark")}
          </span>
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            {tv("ctaVisionLine1")}<br />
            <span className="text-gradient">{tv("ctaVisionLine2")}</span>
          </h2>
          <Link
            href="/custom"
            className="inline-flex px-12 py-5 bg-gradient-to-r from-brand-copper to-brand-ember text-white font-bold uppercase text-sm tracking-[0.2em] hover:shadow-[0_0_40px_rgba(181,114,44,0.3)] transition-shadow"
          >
            {t("hero.ctaSecondary")}
          </Link>
        </div>
      </section>
    </div>
  );
}
