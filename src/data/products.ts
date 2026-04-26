export type ProductGroup = "furniture" | "exterior" | "custom";

export type ProductCategory =
  | "industrialFurniture"
  | "industrialAccessories"
  | "outdoorFire"
  | "benches"
  | "pergolasFences"
  | "binBoxes"
  | "metalwork";

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
    category: "industrialFurniture",
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
    category: "industrialFurniture",
    heroImage: null,
    dimensionImage: null,
    price: null,
    dimensions: null,
    features: ["durable", "solidWood", "steel", "custom"],
  },
  {
    id: "shelf",
    modelName: "Police",
    category: "industrialAccessories",
    heroImage: null,
    dimensionImage: null,
    price: null,
    dimensions: null,
    features: ["solidWood", "steel", "custom"],
  },
  {
    id: "desk",
    modelName: "Pracoviště",
    category: "industrialFurniture",
    heroImage: null,
    dimensionImage: null,
    price: null,
    dimensions: null,
    features: ["durable", "solidWood", "steel", "custom"],
  },
  {
    id: "bench",
    modelName: "Lavice",
    category: "benches",
    heroImage: null,
    dimensionImage: null,
    price: null,
    dimensions: null,
    features: ["durable", "solidWood", "steel", "custom"],
  },
  {
    id: "tvStand",
    modelName: "Média",
    category: "industrialFurniture",
    heroImage: null,
    dimensionImage: null,
    price: null,
    dimensions: null,
    features: ["solidWood", "steel", "custom"],
  },
];

export interface CategoryDef {
  id: ProductCategory;
  group: ProductGroup;
  /** Optional override CTA target (e.g. metalwork → /custom directly). */
  ctaHref?: string;
}

export interface GroupDef {
  id: ProductGroup;
  /** Subcategories shown in this group, in display order. */
  categories: ProductCategory[];
}

/** Display order matches the owner's brief: 🪵 → 🔥 → ⚙️. */
export const productGroups: GroupDef[] = [
  {
    id: "furniture",
    categories: ["industrialFurniture", "industrialAccessories"],
  },
  {
    id: "exterior",
    categories: ["outdoorFire", "benches", "pergolasFences", "binBoxes"],
  },
  {
    id: "custom",
    categories: ["metalwork"],
  },
];

export const productCategories: CategoryDef[] = [
  { id: "industrialFurniture", group: "furniture" },
  { id: "industrialAccessories", group: "furniture" },
  { id: "outdoorFire", group: "exterior" },
  { id: "benches", group: "exterior" },
  { id: "pergolasFences", group: "exterior" },
  { id: "binBoxes", group: "exterior" },
  { id: "metalwork", group: "custom", ctaHref: "/custom" },
];

/** Map for O(1) lookups when rendering. */
export const productCategoryMap: Record<ProductCategory, CategoryDef> =
  productCategories.reduce(
    (acc, def) => {
      acc[def.id] = def;
      return acc;
    },
    {} as Record<ProductCategory, CategoryDef>,
  );

export function productsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(price: number): string {
  return price.toLocaleString("cs-CZ") + ",-\u00A0Kč";
}
