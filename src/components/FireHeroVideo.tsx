"use client";

import { useCallback, useState } from "react";
import { DEFAULT_HERO_VIDEO_MP4 } from "@/lib/heroVideo";

type Props = {
  posterSrc?: string;
  /** Falls back to NEXT_PUBLIC_HERO_VIDEO_URL env, then Dropbox default */
  videoSrc?: string;
  className?: string;
};

export default function FireHeroVideo({
  posterSrc = "/images/fire-pit-hero-1.png",
  videoSrc,
  className = "",
}: Props) {
  const resolvedSrc =
    videoSrc ??
    (typeof process.env.NEXT_PUBLIC_HERO_VIDEO_URL === "string" &&
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL.length > 0
      ? process.env.NEXT_PUBLIC_HERO_VIDEO_URL
      : DEFAULT_HERO_VIDEO_MP4);

  const [failed, setFailed] = useState(false);

  const onError = useCallback(() => setFailed(true), []);

  if (failed) {
    return (
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center scale-105 ${className}`}
        style={{ backgroundImage: `url(${posterSrc})` }}
        aria-hidden
      />
    );
  }

  return (
    <video
      className={`absolute inset-0 z-0 h-full w-full object-cover scale-105 ${className}`}
      autoPlay
      muted
      loop
      playsInline
      poster={posterSrc}
      preload="metadata"
      onError={onError}
    >
      <source src={resolvedSrc} type="video/mp4" />
    </video>
  );
}
