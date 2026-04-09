"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function CustomPage() {
  const t = useTranslations("custom");
  const [submitted, setSubmitted] = useState(false);

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

      <section className="py-16 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-8">{t("formTitle")}</h2>

              {submitted ? (
                <div className="p-8 bg-brand-card rounded-sm border border-brand-copper/30 text-center">
                  <svg
                    className="w-12 h-12 text-brand-copper mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-lg">{t("successMessage")}</p>
                </div>
              ) : (
                <form
                  name="custom-order"
                  method="POST"
                  data-netlify="true"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);
                    fetch("/", {
                      method: "POST",
                      headers: { "Content-Type": "application/x-www-form-urlencoded" },
                      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
                    }).then(() => setSubmitted(true));
                  }}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="custom-order" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-brand-muted">
                        {t("nameLabel")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-brand-card border border-brand-border rounded-sm text-brand-text placeholder-brand-subtle focus:border-brand-copper focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-brand-muted">
                        {t("emailLabel")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-brand-card border border-brand-border rounded-sm text-brand-text placeholder-brand-subtle focus:border-brand-copper focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-brand-muted">
                        {t("phoneLabel")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 bg-brand-card border border-brand-border rounded-sm text-brand-text placeholder-brand-subtle focus:border-brand-copper focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-brand-muted">
                        {t("typeLabel")}
                      </label>
                      <input
                        type="text"
                        name="furniture-type"
                        placeholder={t("typePlaceholder")}
                        required
                        className="w-full px-4 py-3 bg-brand-card border border-brand-border rounded-sm text-brand-text placeholder-brand-subtle focus:border-brand-copper focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-brand-muted">
                      {t("dimensionsLabel")}
                    </label>
                    <input
                      type="text"
                      name="dimensions"
                      placeholder={t("dimensionsPlaceholder")}
                      className="w-full px-4 py-3 bg-brand-card border border-brand-border rounded-sm text-brand-text placeholder-brand-subtle focus:border-brand-copper focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 text-brand-muted">
                      {t("materialLabel")}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {(["materialWood", "materialWalnut", "materialAsh", "materialOther"] as const).map(
                        (mat) => (
                          <label
                            key={mat}
                            className="flex items-center gap-2 px-4 py-2 bg-brand-card border border-brand-border rounded-sm cursor-pointer hover:border-brand-copper/50 transition-colors"
                          >
                            <input
                              type="checkbox"
                              name="materials"
                              value={mat}
                              className="accent-brand-copper"
                            />
                            <span className="text-sm">{t(mat)}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-brand-muted">
                      {t("descriptionLabel")}
                    </label>
                    <textarea
                      name="description"
                      rows={5}
                      placeholder={t("descriptionPlaceholder")}
                      required
                      className="w-full px-4 py-3 bg-brand-card border border-brand-border rounded-sm text-brand-text placeholder-brand-subtle focus:border-brand-copper focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-brand-muted">
                      {t("budgetLabel")}
                    </label>
                    <input
                      type="text"
                      name="budget"
                      className="w-full px-4 py-3 bg-brand-card border border-brand-border rounded-sm text-brand-text placeholder-brand-subtle focus:border-brand-copper focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-brand-copper hover:bg-brand-copper-light text-white font-medium rounded-sm transition-all duration-300 tracking-wide"
                  >
                    {t("submitBtn")}
                  </button>
                </form>
              )}
            </div>

            {/* Configurator placeholder */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <h2 className="text-2xl font-bold mb-8">
                  {t("configuratorTitle")}
                </h2>
                <div className="aspect-square bg-brand-card rounded-sm border border-brand-border/50 flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <svg
                      className="w-16 h-16 text-brand-copper/50 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      />
                    </svg>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {t("configuratorSoon")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
