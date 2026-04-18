import Image from "next/image";
import type { ImageSize } from "@/data/products";

type Props = {
  src: string;
  intrinsic: ImageSize;
  alt: string;
  /** Outer frame (background, padding, corners live outside or wrap this) */
  className?: string;
  /** Max height cap — landscape hero vs portrait spec sheet */
  maxHeightClass?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Renders marketing/spec raster art without cropping: intrinsic ratio, object-contain, width-fluid.
 */
export default function ProductRasterFrame({
  src,
  intrinsic,
  alt,
  className = "",
  maxHeightClass = "max-h-[min(88svh,920px)]",
  priority,
  sizes = "(max-width: 1024px) 100vw, 58vw",
}: Props) {
  return (
    <div className={`flex justify-center items-center w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={intrinsic.w}
        height={intrinsic.h}
        priority={priority}
        sizes={sizes}
        className={`h-auto w-full max-w-full object-contain ${maxHeightClass}`}
      />
    </div>
  );
}
