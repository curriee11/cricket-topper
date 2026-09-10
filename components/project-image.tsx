"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-[16/9] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_60%),#080808] px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
          Project image coming soon
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-black">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
