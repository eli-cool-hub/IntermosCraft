import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const valueIcons = {
  durability: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  handcraft: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.073A1 1 0 014.5 17.33V6.67a1 1 0 011.536-.914l5.384 3.073m0 0l5.384 3.073a1 1 0 010 1.828l-5.384 3.073m0-7.974v7.974" />
    </svg>
  ),
  personalization: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  design: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
};

const featuredProducts = [
  { id: "nightstand", image: "/images/nightstand-reference.png", category: "storage" },
  { id: "coffeeTable", image: null, category: "tables" },
  { id: "desk", image: null, category: "tables" },
];

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark to-brand-darker" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/nightstand-reference.png"
            alt=""
            fill
            className="object-cover object-center blur-sm"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-brand-copper" />
              <span className="text-brand-copper text-sm tracking-[0.2em] uppercase font-medium">
                IntermosCraft
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              {t("hero.title").split(" ").map((word, i, arr) =>
                i >= arr.length - 2 ? (
                  <span key={i} className="text-gradient">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed mb-10 max-w-lg">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-copper hover:bg-brand-copper-light text-white font-medium rounded-sm transition-all duration-300 tracking-wide"
              >
                {t("hero.cta")}
              </Link>
              <Link
                href="/custom"
                className="inline-flex items-center justify-center px-8 py-4 border border-brand-border hover:border-brand-copper text-brand-text font-medium rounded-sm transition-all duration-300 tracking-wide"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("values.title")}
            </h2>
            <div className="h-px w-16 bg-brand-copper mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(["durability", "handcraft", "personalization", "design"] as const).map(
              (key) => (
                <div
                  key={key}
                  className="group p-8 bg-brand-card rounded-sm border border-brand-border/50 hover:border-brand-copper/50 transition-all duration-300"
                >
                  <div className="text-brand-copper mb-4 group-hover:scale-110 transition-transform duration-300">
                    {valueIcons[key]}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(`values.${key}`)}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {t(`values.${key}Desc`)}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t("featured.title")}
              </h2>
              <div className="h-px w-16 bg-brand-copper" />
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-2 text-brand-copper hover:text-brand-copper-light transition-colors text-sm tracking-wide"
            >
              {t("featured.viewAll")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-brand-card rounded-sm border border-brand-border/50 overflow-hidden hover:border-brand-copper/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative bg-brand-dark overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={t(`productItems.${product.id}.name`)}
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
                    {t(`productItems.${product.id}.name`)}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {t(`productItems.${product.id}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-brand-copper text-sm tracking-wide"
            >
              {t("featured.viewAll")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-copper)_0%,_transparent_70%)]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t("custom.heroText")}
          </h2>
          <p className="text-brand-muted text-lg mb-10 max-w-xl mx-auto">
            {t("custom.intro")}
          </p>
          <Link
            href="/custom"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-copper hover:bg-brand-copper-light text-white font-medium rounded-sm transition-all duration-300 tracking-wide"
          >
            {t("hero.ctaSecondary")}
          </Link>
        </div>
      </section>
    </>
  );
}
