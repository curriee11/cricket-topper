import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatCurrency, titleCase } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group surface overflow-hidden rounded-[28px] shadow-glow transition duration-300 hover:-translate-y-1 hover:border-brand-400/30">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-slate-900/70">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
            {titleCase(product.category)}
          </span>
        </div>

        <div className="space-y-4 p-5">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            <p className="text-sm leading-6 text-slate-400">{product.shortDescription}</p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-xl font-semibold text-brand-300">
              {formatCurrency(product.price)}
            </p>
            <span className="text-sm font-medium text-slate-300">View Details</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
