"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  images,
  name
}: {
  images: string[];
  name: string;
}) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="surface-strong overflow-hidden rounded-[32px] shadow-glow">
        <div className="relative aspect-[3/4] bg-black">
          <Image
            src={activeImage}
            alt={name}
            fill
            priority
            sizes="(min-width: 1280px) 40vw, 100vw"
            className="object-contain p-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => {
          const isActive = image === activeImage;
          const label = `View ${name} image ${index + 1}`;

          return (
            <button
              key={image}
              type="button"
              title={label}
              aria-label={label}
              aria-pressed={isActive}
              onClick={() => setActiveImage(image)}
              className={`surface-strong relative overflow-hidden rounded-2xl transition active:scale-[0.97] ${
                isActive
                  ? "border-brand-500/70 shadow-glow ring-2 ring-brand-500/35"
                  : "border-brand-500/10 hover:border-brand-500/25"
              }`}
            >
              <div className="relative aspect-[3/4] bg-black">
                <Image
                  src={image}
                  alt={`${name} preview ${index + 1}`}
                  fill
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(min-width: 1280px) 13vw, (min-width: 768px) 20vw, 30vw"
                  className="object-contain p-1"
                />
              </div>
              {isActive ? (
                <span className="absolute inset-x-0 bottom-0 bg-brand-500/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
                  Selected
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
