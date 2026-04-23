import Link from "next/link";
import { categories } from "@/lib/products";

export function CategorySection() {
  return (
    <section className="relative overflow-hidden bg-black py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(29,59,114,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(10,31,68,0.28),transparent_30%)]" />
      <div className="container-shell relative">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
              Categories
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Shop by game role</h2>
          </div>
          <Link href="/products" className="hidden text-sm text-stone-300 transition hover:text-brand-300 md:block">
            View all equipment
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group rounded-[30px] border border-brand-500/20 bg-[linear-gradient(180deg,rgba(255,250,242,0.95)_0%,rgba(248,244,236,0.92)_100%)] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-brand-500/35 hover:shadow-[0_22px_70px_rgba(212,175,55,0.14)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-400">
                {category.name}
              </p>
              <p className="mt-4 text-lg font-medium leading-8 text-slate-950">{category.description}</p>
              <p className="mt-6 text-sm text-slate-600 transition group-hover:text-brand-600">
                Explore {category.name.toLowerCase()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
