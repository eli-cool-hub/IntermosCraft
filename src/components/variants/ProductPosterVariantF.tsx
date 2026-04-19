import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";
import PosterPlate from "./PosterPlate";

type Props = { product: Product };

const FEATURE_ICONS: Record<
  "durable" | "solidWood" | "steel" | "custom",
  (cls: string) => React.JSX.Element
> = {
  durable: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3z"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </svg>
  ),
  solidWood: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M3 7c3-1 6-1 9 0s6 1 9 0M3 12c3-1 6-1 9 0s6 1 9 0M3 17c3-1 6-1 9 0s6 1 9 0"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  ),
  steel: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" strokeWidth={1.4} />
      <path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" strokeWidth={1.4} />
      <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" strokeWidth={1.4} />
    </svg>
  ),
  custom: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M14.7 5.3l4 4-9.5 9.5H5v-4.2l9.7-9.3z"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <path d="M13 7l4 4" strokeWidth={1.4} />
    </svg>
  ),
};

const VALUE_PROP_ICONS = {
  longLife: (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth={1.4} />
      <path d="M12 7v5l3.5 2.2" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  ),
  handcraft: (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M5 14l4-4 4 4-4 4-4-4zM13 6h4l3 3v4l-7-7z"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </svg>
  ),
  personalization: (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 3l2.6 5.4 5.9.7-4.4 4 1.2 5.9L12 16l-5.3 3 1.2-5.9-4.4-4 5.9-.7L12 3z"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </svg>
  ),
  uniqueDesign: (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M5 12l4 4 10-10"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="9" strokeWidth={1.2} opacity="0.5" />
    </svg>
  ),
};

/**
 * Crops chosen to actually show what each label means on the nightstand-clean
 * photo (1024x969). Positions tuned against the canonical image:
 *   - Minimalismus  → full product, clean silhouette
 *   - Masiv         → wooden shelf inside the cube (warm grain)
 *   - Detail        → laser-cut "Krokava" stencil on the steel side
 *   - Kvalita       → crisp top corner of the welded steel shell
 */
const THUMB_CROPS: Array<{ caption: string; pos: string; scale: number }> = [
  { caption: "Minimalismus", pos: "50% 50%", scale: 1.0 },
  { caption: "Masiv", pos: "50% 70%", scale: 1.9 },
  { caption: "Detail", pos: "22% 38%", scale: 2.6 },
  { caption: "Kvalita", pos: "90% 12%", scale: 2.8 },
];

const VALUE_PROPS: Array<{
  key: keyof typeof VALUE_PROP_ICONS;
  label: string;
}> = [
  { key: "longLife", label: "Dlouhá životnost" },
  { key: "handcraft", label: "Ruční práce" },
  { key: "personalization", label: "Možnost personalizace" },
  { key: "uniqueDesign", label: "Jedinečný design" },
];

/**
 * Variant F — "Tomáš poster faithful".
 * Native, responsive port of the customer's nightstand poster:
 * copper-haze warmth, big NOČNÍ STOLEK + PŘEŽIJE headline with copper rule,
 * four features each in a copper-outline icon circle, big product photo,
 * 4-thumbnail crop row beneath, and a 4-circle value-prop strip at the foot.
 * Where the price sits on the poster, we render `Cena na poptávku`.
 */
export default function ProductPosterVariantF({ product }: Props) {
  const ft = useTranslations("features");
  const pi = useTranslations("productItems");
  const tpp = useTranslations("products.poster");
  const tspec = useTranslations("specs");

  const photo = product.cleanImage;
  const photoSize = product.cleanImageIntrinsicSize ?? { w: 1024, h: 969 };
  const productName = pi(`${product.id}.name`).toUpperCase();
  const dims = product.dimensions;

  return (
    <PosterPlate intensity="strong">
      {/* extra warm wood haze on top of PosterPlate */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-90"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(120,60,20,0.35),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35),transparent_30%,transparent_70%,rgba(0,0,0,0.45))]" />
      </div>

      <div className="relative px-5 sm:px-8 lg:px-16 pt-8 pb-8 lg:pt-14 lg:pb-12">
        {/* HEADLINE + PHOTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* TEXT COLUMN */}
          <div className="lg:col-span-5 order-1">
            <h2 className="font-extralight text-white tracking-tight uppercase leading-[0.95] text-3xl sm:text-4xl lg:text-6xl xl:text-[4.25rem]">
              <span className="block">{productName}</span>
              <span className="block mt-2 text-brand-copper-light font-light text-lg sm:text-xl lg:text-2xl tracking-[0.35em] normal-case">
                {product.modelName}
              </span>
            </h2>

            <div className="mt-4 mb-5 lg:mt-6 lg:mb-7 h-[2px] w-20 bg-brand-copper" />

            <ul className="grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-y-4 lg:grid-cols-1 lg:space-y-5 lg:gap-0">
              {product.features.map((feat) => (
                <li key={feat} className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span
                    className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-brand-copper-light/70 flex items-center justify-center text-brand-copper-light"
                    aria-hidden
                  >
                    {FEATURE_ICONS[feat]("w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7")}
                  </span>
                  <span className="text-white text-sm sm:text-base lg:text-xl font-light tracking-wide truncate">
                    {ft(feat)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE COLUMN */}
          <div className="lg:col-span-7 order-2 relative">
            <div className="relative w-full">
              <div
                className="absolute -inset-x-8 -bottom-2 h-12 rounded-[100%] bg-black/70 blur-2xl pointer-events-none"
                aria-hidden
              />
              {photo && (
                <Image
                  src={photo}
                  alt={pi(`${product.id}.name`)}
                  width={photoSize.w}
                  height={photoSize.h}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="relative h-auto w-full object-contain max-h-[min(70svh,720px)] drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
                />
              )}

              {/* "Price slot" — keeping balance, no number */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 text-right bg-brand-darker/75 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 border-l-2 border-brand-copper">
                <p className="text-white text-xs sm:text-sm lg:text-base font-light tracking-wide">
                  Cena
                  <span className="text-brand-copper-light"> &mdash;</span> na
                  poptávku
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIMENSIONS — technical sketch + spec list */}
        {dims && (
          <div className="mt-8 lg:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center bg-black/35 border border-brand-border/30 px-5 sm:px-7 lg:px-9 py-6 sm:py-7 lg:py-8">
            <div className="md:col-span-7 flex justify-center">
              <DimensionSketch
                w={dims.width}
                d={dims.depth}
                h={dims.height}
              />
            </div>
            <div className="md:col-span-5">
              <h3 className="text-brand-copper-light text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold mb-3 sm:mb-4">
                {tspec("dimensions")}
              </h3>
              <ul className="text-white text-sm sm:text-base lg:text-lg font-light">
                <li className="flex items-baseline justify-between border-b border-brand-border/25 py-2">
                  <span className="text-white/80">{tspec("width")}</span>
                  <span className="font-medium tracking-wide">
                    {dims.width}{" "}
                    <span className="text-brand-copper-light text-xs">
                      {tspec("mm")}
                    </span>
                  </span>
                </li>
                <li className="flex items-baseline justify-between border-b border-brand-border/25 py-2">
                  <span className="text-white/80">{tspec("depth")}</span>
                  <span className="font-medium tracking-wide">
                    {dims.depth}{" "}
                    <span className="text-brand-copper-light text-xs">
                      {tspec("mm")}
                    </span>
                  </span>
                </li>
                <li className="flex items-baseline justify-between py-2">
                  <span className="text-white/80">{tspec("height")}</span>
                  <span className="font-medium tracking-wide">
                    {dims.height}{" "}
                    <span className="text-brand-copper-light text-xs">
                      {tspec("mm")}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* THUMBNAIL ROW — MINIMALISMUS / MASIV / DETAIL / KVALITA */}
        <div className="mt-8 lg:mt-14 grid grid-cols-4 gap-2 sm:gap-4 lg:gap-5">
          {THUMB_CROPS.map((crop) => (
            <figure
              key={crop.caption}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-black/40 border border-brand-border/40">
                {photo && (
                  <Image
                    src={photo}
                    alt={`${pi(`${product.id}.name`)} – ${crop.caption}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 22vw"
                    className="object-cover transition-transform duration-700"
                    style={{
                      objectPosition: crop.pos,
                      transform: `scale(${crop.scale})`,
                    }}
                  />
                )}
                <div className="pointer-events-none absolute inset-0" aria-hidden>
                  <div className="absolute top-0 left-0 w-6 h-[1.5px] bg-brand-copper/80" />
                  <div className="absolute top-0 left-0 w-[1.5px] h-6 bg-brand-copper/80" />
                  <div className="absolute bottom-0 right-0 w-6 h-[1.5px] bg-brand-copper/80" />
                  <div className="absolute bottom-0 right-0 w-[1.5px] h-6 bg-brand-copper/80" />
                </div>
              </div>
              <figcaption className="mt-2 sm:mt-3 text-white text-[9px] sm:text-[11px] lg:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold">
                {crop.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* VALUE-PROP CIRCLE STRIP */}
      <div className="relative border-t border-brand-border/30 bg-brand-darker/80 px-5 sm:px-8 lg:px-16 py-7 lg:py-10">
        <div className="grid grid-cols-4 gap-y-5 gap-x-2 sm:gap-x-4">
          {VALUE_PROPS.map((vp) => (
            <div
              key={vp.key}
              className="flex flex-col items-center text-center gap-2 sm:gap-3"
            >
              <span
                className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-brand-copper-light/70 flex items-center justify-center text-brand-copper-light"
                aria-hidden
              >
                {VALUE_PROP_ICONS[vp.key]("w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8")}
              </span>
              <span className="text-white text-[9px] sm:text-[11px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold leading-tight max-w-[14ch]">
                {vp.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-7 lg:mt-9 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-12 sm:py-5 bg-gradient-to-r from-brand-flame to-brand-ember text-white font-black text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.35em] uppercase shadow-[0_0_40px_rgba(255,140,66,0.35)] hover:shadow-[0_0_60px_rgba(255,140,66,0.6)] transition-all duration-300 w-full sm:w-auto max-w-md"
          >
            {tpp("ctaPrimary")}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </PosterPlate>
  );
}

/**
 * Minimal cabinet-projection wireframe of the piece, drawn from the actual
 * width/depth/height (mm). Lines are copper to match the poster aesthetic.
 * Sized via a fixed viewBox so it scales cleanly at every breakpoint.
 */
function DimensionSketch({ w, d, h }: { w: number; d: number; h: number }) {
  // Scale real mm into SVG units so the largest edge fits comfortably.
  const max = Math.max(w, d, h);
  const s = 130 / max;
  const W = w * s;
  const H = h * s;
  const D = d * s * 0.6; // foreshorten depth for a cabinet projection
  const ox = 60; // origin x (front-bottom-left of the box)
  const oy = 175; // origin y (front-bottom-left of the box)

  // Front-face corners
  const fbl = { x: ox, y: oy };
  const fbr = { x: ox + W, y: oy };
  const ftl = { x: ox, y: oy - H };
  const ftr = { x: ox + W, y: oy - H };
  // Back-face corners (offset up-right at ~30° via D)
  const bbr = { x: fbr.x + D * 0.95, y: fbr.y - D * 0.55 };
  const btr = { x: ftr.x + D * 0.95, y: ftr.y - D * 0.55 };
  const btl = { x: ftl.x + D * 0.95, y: ftl.y - D * 0.55 };
  // Inner shelf line on front face (~55% up from bottom)
  const shelfY = oy - H * 0.42;

  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full max-w-[420px] h-auto text-brand-copper-light"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Front face */}
      <rect
        x={fbl.x}
        y={ftl.y}
        width={W}
        height={H}
        strokeWidth={1.4}
      />
      {/* Depth edges */}
      <line x1={ftl.x} y1={ftl.y} x2={btl.x} y2={btl.y} strokeWidth={1.2} />
      <line x1={ftr.x} y1={ftr.y} x2={btr.x} y2={btr.y} strokeWidth={1.2} />
      <line x1={fbr.x} y1={fbr.y} x2={bbr.x} y2={bbr.y} strokeWidth={1.2} />
      {/* Back top + back right (visible ridges) */}
      <line x1={btl.x} y1={btl.y} x2={btr.x} y2={btr.y} strokeWidth={1.2} />
      <line x1={btr.x} y1={btr.y} x2={bbr.x} y2={bbr.y} strokeWidth={1.2} />
      {/* Inner shelf (front + back) */}
      <line x1={fbl.x} y1={shelfY} x2={fbr.x} y2={shelfY} strokeWidth={1} opacity={0.9} />
      <line
        x1={fbr.x}
        y1={shelfY}
        x2={fbr.x + D * 0.95}
        y2={shelfY - D * 0.55}
        strokeWidth={1}
        opacity={0.55}
        strokeDasharray="2 3"
      />

      {/* Dimension lines + labels */}
      <g
        stroke="currentColor"
        strokeWidth={0.9}
        opacity={0.85}
      >
        {/* width — below front bottom */}
        <line x1={fbl.x} y1={oy + 14} x2={fbr.x} y2={oy + 14} />
        <line x1={fbl.x} y1={oy + 10} x2={fbl.x} y2={oy + 18} />
        <line x1={fbr.x} y1={oy + 10} x2={fbr.x} y2={oy + 18} />
        {/* height — to the right of front face */}
        <line x1={fbr.x + 14} y1={ftr.y} x2={fbr.x + 14} y2={fbr.y} />
        <line x1={fbr.x + 10} y1={ftr.y} x2={fbr.x + 18} y2={ftr.y} />
        <line x1={fbr.x + 10} y1={fbr.y} x2={fbr.x + 18} y2={fbr.y} />
        {/* depth — angled, top-back */}
        <line x1={ftl.x - 4} y1={ftl.y - 8} x2={btl.x - 4} y2={btl.y - 8} />
        <line x1={ftl.x - 7} y1={ftl.y - 5} x2={ftl.x - 1} y2={ftl.y - 11} />
        <line x1={btl.x - 7} y1={btl.y - 5} x2={btl.x - 1} y2={btl.y - 11} />
      </g>

      <g
        fill="currentColor"
        stroke="none"
        fontSize={11}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight={500}
      >
        <text x={(fbl.x + fbr.x) / 2} y={oy + 28} textAnchor="middle">
          {w}
        </text>
        <text x={fbr.x + 22} y={(ftr.y + fbr.y) / 2 + 4}>
          {h}
        </text>
        <text
          x={(ftl.x + btl.x) / 2 - 6}
          y={(ftl.y + btl.y) / 2 - 8}
          textAnchor="end"
        >
          {d}
        </text>
      </g>
    </svg>
  );
}
