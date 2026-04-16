import Link from "next/link";
import { categories } from "@/lib/products";

export function CategorySection() {
  return (
    <section className="py-16">
      <div className="container-shell">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
              Categories
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Shop by game role</h2>
          </div>
          <Link href="/products" className="hidden text-sm text-slate-300 md:block">
            View all equipment
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="surface group rounded-[30px] p-6 shadow-glow transition hover:-translate-y-1 hover:border-brand-400/30"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
                {category.name}
              </p>
              <p className="mt-4 text-lg font-medium text-white">{category.description}</p>
              <p className="mt-6 text-sm text-slate-400 transition group-hover:text-slate-200">
                Explore {category.name.toLowerCase()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
