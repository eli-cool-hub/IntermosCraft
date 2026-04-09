"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(newLocale: "en" | "cs") {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLocale("cs")}
        disabled={isPending}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "cs"
            ? "text-brand-copper font-semibold"
            : "text-brand-muted hover:text-brand-text"
        }`}
      >
        CZ
      </button>
      <span className="text-brand-border">|</span>
      <button
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-brand-copper font-semibold"
            : "text-brand-muted hover:text-brand-text"
        }`}
      >
        EN
      </button>
    </div>
  );
}
