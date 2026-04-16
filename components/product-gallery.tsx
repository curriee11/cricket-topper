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
      <div className="surface overflow-hidden rounded-[32px]">
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
              className={`surface relative overflow-hidden rounded-2xl transition ${
                isActive ? "border-brand-400/40" : "border-white/10"
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
