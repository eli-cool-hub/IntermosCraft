import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import FireHeroVideo from "@/components/FireHeroVideo";

/**
 * V4 — "Ember"
 * FULL-SCREEN VIDEO hero. Fire vignette glow radiating from below.
 * Cinematic centered text over flames. Organic warmth vs cold steel contrast.
 * Earthy tones throughout. Flame gradient CTAs.
 */
export default function HomeV4() {
  const t = useTranslations();
  const tv = useTranslations("variants");

  return (
    <div className="-mt-20">
      {/* HERO — full-viewport video, text centered */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <FireHeroVideo posterSrc="/images/fire-pit-hero-1.png" />

        {/* Overlays for depth */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_90%,rgba(232,93,4,0.25),transparent_60%)]" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-brand-flame tracking-[0.5em] uppercase text-xs font-bold mb-6 drop-shadow-lg">
            IntermosCraft
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] mb-6 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
            {tv("fireTagline")}
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            {tv("fireSupporting")}
          </p>
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-brand-flame to-transparent animate-pulse" />
        </div>
      </section>

      {/* MATERIALS SPLIT — wood vs steel */}
      <section className="bg-brand-darker">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative p-12 lg:p-20 flex flex-col justify-center min-h-[420px] bg-gradient-to-br from-[#2a1f14] to-brand-darker">
            <span className="text-brand-flame text-xs tracking-[0.3em] uppercase font-bold">01 / Material</span>
            <h3 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">Solid Oak</h3>
            <p className="text-brand-muted leading-relaxed max-w-md">
              Hand-selected premium hardwood. Every grain tells a story. No veneers, no particle board.
            </p>
            <div className="mt-8 flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C8956D]" />
              <div className="w-10 h-10 rounded-full bg-[#8B6942]" />
              <div className="w-10 h-10 rounded-full bg-[#5C3D21]" />
            </div>
          </div>
          <div className="relative p-12 lg:p-20 flex flex-col justify-center min-h-[420px] bg-gradient-to-bl from-[#1a1a1e] to-brand-darker">
            <span className="text-brand-flame text-xs tracking-[0.3em] uppercase font-bold">02 / Material</span>
            <h3 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">Precision Steel</h3>
            <p className="text-brand-muted leading-relaxed max-w-md">
              Hand-welded frames with durable powder coating. Every joint ground smooth. Built to carry weight for generations.
            </p>
            <div className="mt-8 flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2a2a2e]" />
              <div className="w-10 h-10 rounded-full bg-[#1a1a1e]" />
              <div className="w-10 h-10 rounded-full bg-[#0f0f12] border border-brand-border/30" />
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BAND — fire pit photos */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[16/9]">
            <Image src="/images/fire-pit-hero-1.png" alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 to-transparent" />
          </div>
          <div className="relative aspect-[16/9]">
            <Image src="/images/fire-pit-hero-2.png" alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* VALUES — warm earthy cards */}
      <section className="py-28 bg-brand-ash relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-ember/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4 text-white">{t("values.title")}</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-brand-flame to-brand-ember mx-auto mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(["durability", "handcraft", "personalization", "design"] as const).map((key) => (
              <div key={key} className="p-8 bg-brand-darker/80 border border-brand-border/25 hover:border-brand-ember/40 transition-colors backdrop-blur-sm">
                <div className="w-10 h-1 bg-gradient-to-r from-brand-flame to-brand-ember mb-5" />
                <h3 className="text-lg font-semibold text-white mb-2">{t(`values.${key}`)}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{t(`values.${key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — with ember glow */}
      <section className="relative py-32 overflow-hidden bg-brand-darker">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(232,93,4,0.18),transparent_55%)]" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t("custom.heroText")}
          </h2>
          <p className="text-brand-muted mb-10 font-light text-lg">{t("custom.intro")}</p>
          <Link
            href="/custom"
            className="inline-flex px-12 py-4 bg-gradient-to-r from-brand-copper to-brand-ember text-white font-bold tracking-widest uppercase text-sm hover:shadow-[0_0_40px_rgba(232,93,4,0.3)] transition-shadow"
          >
            {t("hero.ctaSecondary")}
          </Link>
        </div>
      </section>
    </div>
  );
}
