import type { Metadata } from "next";
import { FilterBar } from "@/components/filter-bar";
import { ProductCard } from "@/components/product-card";
import { filterProducts } from "@/lib/products";

type ProductsPageProps = {
  searchParams?: {
    category?: string;
    price?: string;
  };
};

export const metadata: Metadata = {
  title: "Products",
  description: "Explore cricket bats, gloves, and kits with quick enquiry options."
};

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams?.category;
  const maxPrice = searchParams?.price ? Number(searchParams.price) : undefined;
  const products = filterProducts({ category, maxPrice });

  return (
    <section className="pb-20 pt-12 sm:pt-16">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
            Product Catalogue
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            Find the right cricket equipment for your game.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Browse our premium range and narrow the catalogue by category or budget in
            seconds.
          </p>
        </div>

        <div className="mt-8">
          <FilterBar />
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            Showing <span className="text-white">{products.length}</span> products
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 ? (
          <div className="surface mt-8 rounded-[28px] p-10 text-center">
            <p className="text-lg font-medium text-white">No products match these filters.</p>
            <p className="mt-2 text-sm text-slate-400">
              Try a broader price range or switch back to all categories.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
