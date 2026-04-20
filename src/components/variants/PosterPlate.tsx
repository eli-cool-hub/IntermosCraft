import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Mood overlay strength: stronger glow on the "verbatim" variant. */
  intensity?: "soft" | "strong";
};

/**
 * Shared poster background plate used by every variant card.
 * Single source of truth for the dark copper haze + grain so variants stay
 * stylistically locked even though their layouts differ.
 */
export default function PosterPlate({
  children,
  className = "",
  intensity = "soft",
}: Props) {
  const glow =
    intensity === "strong"
      ? "bg-[radial-gradient(ellipse_75%_60%_at_50%_8%,rgba(232,93,4,0.28),transparent_65%)]"
      : "bg-[radial-gradient(ellipse_70%_55%_at_25%_15%,rgba(232,93,4,0.18),transparent_65%)]";

  return (
    <article
      className={`relative isolate overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-darker border border-brand-border/30 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className={`absolute inset-0 ${glow}`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_90%,rgba(181,114,44,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>
      {children}
    </article>
  );
}
