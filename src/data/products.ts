export type ProductCategory = "tables" | "storage" | "seating" | "outdoor";

export type ProductFeature = "durable" | "solidWood" | "steel" | "custom";

export interface ProductDimensions {
  width: number;
  depth: number;
  height: number;
}

/** Pixel size of raster hero art — used for aspect box so `object-contain` never crops. */
export interface ImageSize {
  w: number;
  h: number;
}

export interface Product {
  id: string;
  modelName: string;
  category: ProductCategory;
  heroImage: string | null;
  /** When set with heroImage, layout uses this ratio (no hard crop). */
  heroIntrinsicSize?: ImageSize | null;
  /** Clean product photo (no baked-in text). Used by the poster card. */
  cleanImage?: string | null;
  cleanImageIntrinsicSize?: ImageSize | null;
  dimensionImage: string | null;
  dimensionIntrinsicSize?: ImageSize | null;
  price: number | null;
  dimensions: ProductDimensions | null;
  features: ProductFeature[];
  /** Optional product-specific tagline; falls back to a brand line if absent. */
  tagline?: string | null;
}

export const products: Product[] = [
  {
    id: "nightstand",
    modelName: "Krokava",
    category: "storage",
    heroImage: "/images/products/nightstand-hero.png",
    heroIntrinsicSize: { w: 1024, h: 571 },
    cleanImage: "/images/products/nightstand-clean.jpg",
    cleanImageIntrinsicSize: { w: 1024, h: 969 },
    dimensionImage: "/images/products/nightstand-dimensions-sketch.png",
    dimensionIntrinsicSize: { w: 498, h: 342 },
    price: 8790,
    dimensions: { width: 435, depth: 350, height: 400 },
    features: ["durable", "solidWood", "steel", "custom"],
  },
  {
    id: "coffeeTable",
    modelName: "Stol",
    category: "tables",
    heroImage: null,
    dimensionImage: null,
    price: null,
    dimensions: null,
    features: ["durable", "solidWood", "steel", "custom"],
  },
  {
    id: "shelf",
    modelName: "Police",
    category: "storage",
    heroImage: null,
    dimensionImage: null,
    price: null,
    dimensions: null,
    features: ["solidWood", "steel", "custom"],
  },
  {
    id: "desk",
    modelName: "Pracoviště",
    category: "tables",
    heroImage: null,
    dimensionImage: null,
    price: null,
    dimensions: null,
    features: ["durable", "solidWood", "steel", "custom"],
  },
  {
    id: "bench",
    modelName: "Lavice",
    category: "seating",
    heroImage: null,
    dimensionImage: null,
    price: null,
    dimensions: null,
    features: ["durable", "solidWood", "steel", "custom"],
  },
  {
    id: "tvStand",
    modelName: "Média",
    category: "storage",
    heroImage: null,
    dimensionImage: null,
    price: null,
    dimensions: null,
    features: ["solidWood", "steel", "custom"],
  },
];

export const filterCategories = [
  { key: "all" as const, tKey: "filterAll" },
  { key: "tables" as const, tKey: "filterTables" },
  { key: "storage" as const, tKey: "filterStorage" },
  { key: "seating" as const, tKey: "filterSeating" },
];

export function formatPrice(price: number): string {
  return price.toLocaleString("cs-CZ") + ",-\u00A0Kč";
}
