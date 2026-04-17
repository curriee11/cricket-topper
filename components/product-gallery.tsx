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
        <div className="relative aspect-[4/3]">
          <Image src={activeImage} alt={name} fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => {
          const isActive = image === activeImage;

          return (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`surface-strong relative overflow-hidden rounded-2xl transition ${
                isActive
                  ? "border-brand-500/45 shadow-glow"
                  : "border-brand-500/10 hover:border-brand-500/25"
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image src={image} alt={`${name} preview`} fill className="object-cover" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
