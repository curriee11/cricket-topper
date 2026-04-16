import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-16">
      <div className="container-shell">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
              Featured Gear
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Best-selling cricket essentials
            </h2>
          </div>
          <Link href="/products" className="hidden text-sm text-slate-300 md:block">
            Full catalogue
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
