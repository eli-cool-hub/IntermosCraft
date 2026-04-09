import { useTranslations } from "next-intl";

const steps = ["step1", "step2", "step3", "step4"] as const;
const qualities = ["quality1", "quality2", "quality3", "quality4"] as const;

const qualityIcons = [
  <svg key="wood" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>,
  <svg key="steel" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.073A1 1 0 014.5 17.33V6.67a1 1 0 011.536-.914l5.384 3.073m0 0l5.384 3.073a1 1 0 010 1.828l-5.384 3.073m0-7.974v7.974" />
  </svg>,
  <svg key="detail" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>,
  <svg key="czech" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>,
];

export default function AboutPage() {
  const t = useTranslations("about");

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

      {/* Story */}
      <section className="py-24 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-brand-text">
                {t("story")}
              </p>
              <p className="text-lg leading-relaxed text-brand-muted">
                {t("storyMore")}
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-brand-card rounded-sm border border-brand-border/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-copper/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <svg
                    className="w-16 h-16 text-brand-border mx-auto"
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
                  <p className="text-brand-subtle text-sm">Workshop photo coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("processTitle")}
            </h2>
            <div className="h-px w-16 bg-brand-copper mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step} className="relative text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-card border-2 border-brand-copper/30 flex items-center justify-center group-hover:border-brand-copper transition-colors duration-300">
                  <span className="text-brand-copper font-bold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-brand-border/30" />
                )}
                <h3 className="text-lg font-semibold mb-2">
                  {t(`${step}Title`)}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {t(`${step}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualities */}
      <section className="py-24 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("qualitiesTitle")}
            </h2>
            <div className="h-px w-16 bg-brand-copper mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {qualities.map((q, i) => (
              <div
                key={q}
                className="flex gap-6 p-8 bg-brand-card rounded-sm border border-brand-border/50 hover:border-brand-copper/30 transition-all duration-300"
              >
                <div className="text-brand-copper shrink-0">{qualityIcons[i]}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t(q)}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {t(`${q}Desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
