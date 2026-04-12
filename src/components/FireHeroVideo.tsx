"use client";

import { useCallback, useState } from "react";
import { DEFAULT_HERO_VIDEO_MP4 } from "@/lib/heroVideo";

const DEFAULT_POSTER = "/images/fire-pit-hero-1.png";

type Props = {
  /**
   * Poster image before first video frame (shows a static image briefly).
   * Pass `null` to disable — video only, black until frames decode (best for V5).
   * Omit to use the default fire-pit poster.
   */
  posterSrc?: string | null;
  /** Falls back to NEXT_PUBLIC_HERO_VIDEO_URL env, then Dropbox default */
  videoSrc?: string;
  className?: string;
};

export default function FireHeroVideo({
  posterSrc,
  videoSrc,
  className = "",
}: Props) {
  const resolvedPoster =
    posterSrc === null ? null : (posterSrc ?? DEFAULT_POSTER);

  const resolvedSrc =
    videoSrc ??
    (typeof process.env.NEXT_PUBLIC_HERO_VIDEO_URL === "string" &&
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL.length > 0
      ? process.env.NEXT_PUBLIC_HERO_VIDEO_URL
      : DEFAULT_HERO_VIDEO_MP4);

  const [failed, setFailed] = useState(false);

  const onError = useCallback(() => setFailed(true), []);

  if (failed) {
    if (resolvedPoster) {
      return (
        <div
          className={`absolute inset-0 z-0 bg-cover bg-center scale-105 ${className}`}
          style={{ backgroundImage: `url(${resolvedPoster})` }}
          aria-hidden
        />
      );
    }
    return (
      <div
        className={`absolute inset-0 z-0 bg-black ${className}`}
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
      {...(resolvedPoster ? { poster: resolvedPoster } : {})}
      preload={resolvedPoster ? "metadata" : "auto"}
      onError={onError}
    >
      <source src={resolvedSrc} type="video/mp4" />
    </video>
  );
}
