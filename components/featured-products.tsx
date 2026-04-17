import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="relative overflow-hidden bg-black pb-20 pt-8">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.82)_72%,rgba(0,0,0,1)_100%)]" />
      <div className="container-shell relative">
        <div className="flex items-end justify-between gap-4 border-b border-brand-500/12 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
              Featured Gear
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Best-selling cricket essentials
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-stone-300">
              A handpicked lineup of premium cricket gear presented as a natural extension
              of the hero section.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-300 transition hover:bg-brand-500/18 md:block"
          >
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
