"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { getDisplayPrice, titleCase } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const [isOpening, setIsOpening] = useState(false);

  return (
    <article className="group surface overflow-hidden rounded-[28px] shadow-luxe transition duration-300 hover:-translate-y-1 hover:border-brand-500/30">
      <Link
        href={`/products/${product.slug}`}
        className="block"
        aria-label={`Open ${product.name}`}
        onClick={() => setIsOpening(true)}
      >
        <div className="relative aspect-[4/3] overflow-hidden border-b border-brand-500/15 bg-gradient-to-br from-black via-[#151515] to-[#232323]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute right-4 top-4 rounded-full border border-brand-500/25 bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-brand-300">
            {titleCase(product.category)}
          </span>
          {isOpening ? (
            <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-sm font-semibold text-white">
              Opening product...
            </span>
          ) : null}
        </div>

        <div className="space-y-4 p-5">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
            <p className="text-sm leading-6 text-slate-600">{product.shortDescription}</p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-xl font-semibold text-brand-600">
              {getDisplayPrice(product)}
            </p>
            <span className="text-sm font-medium text-slate-700 transition group-hover:text-brand-600">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
