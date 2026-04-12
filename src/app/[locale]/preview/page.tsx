import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const VARIANTS = [
  { href: "/", key: "V1", nameKey: "previewV1Name" as const, pitchKey: "previewV1Pitch" as const },
  { href: "/v2", key: "V2", nameKey: "previewV2Name" as const, pitchKey: "previewV2Pitch" as const },
  { href: "/v3", key: "V3", nameKey: "previewV3Name" as const, pitchKey: "previewV3Pitch" as const },
  { href: "/v4", key: "V4", nameKey: "previewV4Name" as const, pitchKey: "previewV4Pitch" as const },
  { href: "/v5", key: "V5", nameKey: "previewV5Name" as const, pitchKey: "previewV5Pitch" as const },
];

export default function VariantPreviewPage() {
  const t = useTranslations("variants");

  return (
    <div className="-mt-20 min-h-screen bg-brand-darker">
      <section className="border-b border-brand-border/30 bg-brand-dark/50">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20 text-center">
          <p className="text-brand-copper text-[10px] tracking-[0.45em] uppercase font-bold mb-4">
            IntermosCraft
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-brand-text mb-6">
            {t("previewTitle")}
          </h1>
          <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mx-auto">
            {t("previewIntro")}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VARIANTS.map((v) => (
            <article
              key={v.key}
              className="group flex flex-col border border-brand-border/40 bg-brand-card/40 hover:border-brand-copper/40 hover:bg-brand-card/60 transition-all duration-300"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <span className="text-brand-copper font-mono text-sm">{v.key}</span>
                  {v.href === "/" && (
                    <span className="rounded-sm border border-brand-copper/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-brand-copper">
                      {t("previewCurrent")}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-semibold text-brand-text mb-3 group-hover:text-brand-copper transition-colors">
                  {t(v.nameKey)}
                </h2>
                <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-8">
                  {t(v.pitchKey)}
                </p>
                <Link
                  href={v.href}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-brand-copper text-brand-copper text-xs font-semibold tracking-[0.2em] uppercase hover:bg-brand-copper hover:text-white transition-colors"
                >
                  {t("previewOpen")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
