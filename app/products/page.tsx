import type { Metadata } from "next";
import { FilterBar } from "@/components/filter-bar";
import { ProductCard } from "@/components/product-card";
import { filterProducts } from "@/lib/products";

type ProductsPageProps = {
  searchParams?: {
    category?: string;
    price?: string;
    query?: string;
  };
};

export const metadata: Metadata = {
  title: "Products",
  description: "Explore cricket bats, gloves, kits, nets, turf, and leather balls with quick enquiry options."
};

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams?.category;
  const maxPrice = searchParams?.price ? Number(searchParams.price) : undefined;
  const query = searchParams?.query;
  const products = filterProducts({ category, maxPrice, query });

  return (
    <section className="relative overflow-hidden bg-black pb-20 pt-12 sm:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(29,59,114,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(10,31,68,0.24),transparent_28%)]" />
      <div className="container-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
            Product Catalogue
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            Find the right cricket equipment for your game.
          </h1>
          <p className="mt-4 text-base leading-7 text-stone-300">
            Browse our premium range and narrow the catalogue by category or budget in
            seconds.
          </p>
          {query ? (
            <p className="mt-4 inline-flex rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm text-brand-300">
              Search: {query}
            </p>
          ) : null}
        </div>

        <div className="mt-8">
          <FilterBar />
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-stone-300">
            Showing <span className="text-white">{products.length}</span> products
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 ? (
          <div className="surface mt-8 rounded-[28px] p-10 text-center shadow-luxe">
            <p className="text-lg font-medium text-slate-950">No products match these filters.</p>
            <p className="mt-2 text-sm text-slate-600">
              Try a broader price range, remove the search, or switch back to all categories.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
