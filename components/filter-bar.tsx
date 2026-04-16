"use client";

import { useRouter, useSearchParams } from "next/navigation";

const priceRanges = [
  { label: "All Prices", value: "all" },
  { label: "Under Rs. 5,000", value: "5000" },
  { label: "Under Rs. 10,000", value: "10000" },
  { label: "Under Rs. 20,000", value: "20000" },
  { label: "Under Rs. 30,000", value: "30000" }
];

const categories = [
  { label: "All Categories", value: "all" },
  { label: "Bats", value: "bats" },
  { label: "Gloves", value: "gloves" },
  { label: "Kits", value: "kits" }
];

export function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") ?? "all";
  const selectedPrice = searchParams.get("price") ?? "all";

  const handleChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`/products${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <div className="surface-strong rounded-[28px] p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Category
          </span>
          <select
            value={selectedCategory}
            onChange={(event) => handleChange("category", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-brand-400/40"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Price
          </span>
          <select
            value={selectedPrice}
            onChange={(event) => handleChange("price", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-brand-400/40"
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
