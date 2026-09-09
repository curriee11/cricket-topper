"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { categories as productCategories } from "@/lib/products";

const priceRanges = [
  { label: "All Prices", value: "all" },
  { label: "Under Rs. 5,000", value: "5000" },
  { label: "Under Rs. 10,000", value: "10000" },
  { label: "Under Rs. 20,000", value: "20000" },
  { label: "Under Rs. 30,000", value: "30000" }
];

const categoryOptions = [
  { label: "All Categories", value: "all" },
  { label: "Accessories", value: "accessories" },
  ...productCategories.map((category) => ({
    label: category.name,
    value: category.id
  }))
];

type Option = {
  label: string;
  value: string;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 text-brand-500 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FilterDropdown({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={rootRef} className={`relative space-y-2 ${open ? "z-50" : "z-10"}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
        {label}
      </span>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex w-full items-center justify-between rounded-2xl border border-brand-500/15 bg-white px-5 py-4 text-left text-sm text-slate-800 outline-none transition hover:border-brand-500/35 focus:border-brand-500/40"
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <span>{selected.label}</span>
          <Chevron open={open} />
        </button>

        {open ? (
          <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-brand-500/20 bg-[linear-gradient(180deg,rgba(255,251,245,0.99)_0%,rgba(248,244,236,0.98)_100%)] shadow-[0_22px_60px_rgba(0,0,0,0.28)]">
            <div className="max-h-72 overflow-y-auto p-2" role="listbox" aria-label={label}>
              {options.map((option) => {
                const isSelected = option.value === value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition ${
                      isSelected
                        ? "bg-brand-500/12 text-brand-700"
                        : "text-slate-800 hover:bg-black/5 hover:text-slate-950"
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span>{option.label}</span>
                    {isSelected ? <span className="text-brand-500">•</span> : null}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

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
    <div className="relative z-40 surface rounded-[28px] p-5 shadow-luxe">
      <div className="grid gap-4 md:grid-cols-2">
        <FilterDropdown
          label="Category"
          value={selectedCategory}
          options={categoryOptions}
          onChange={(value) => handleChange("category", value)}
        />
        <FilterDropdown
          label="Price"
          value={selectedPrice}
          options={priceRanges}
          onChange={(value) => handleChange("price", value)}
        />
      </div>
    </div>
  );
}
