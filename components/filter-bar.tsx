"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
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

const quickCategories = [
  { label: "All", value: "all", matches: ["all"] },
  { label: "Bats", value: "bats", matches: ["bats"] },
  { label: "Accessories", value: "accessories", matches: ["accessories", "gloves", "pads", "kits", "helmets", "guards"] },
  { label: "Nets", value: "nets", matches: ["nets"] },
  { label: "Turf", value: "turf", matches: ["turf"] },
  { label: "Cricket Balls", value: "balls", matches: ["balls"] }
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

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M5.5 5.5L14.5 14.5M14.5 5.5L5.5 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SearchableCategoryDropdown({
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
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listboxId = useId();
  const selected = options.find((option) => option.value === value) ?? options[0];
  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return options;
    }

    return options.filter((option) => option.label.toLowerCase().includes(normalizedQuery));
  }, [options, query]);
  const activeOption = filteredOptions[activeIndex];

  function closeDropdown() {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }

  function selectOption(option: Option) {
    onChange(option.value);
    closeDropdown();
  }

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (activeIndex > Math.max(filteredOptions.length - 1, 0)) {
      setActiveIndex(0);
    }
  }, [activeIndex, filteredOptions.length]);

  return (
    <div ref={rootRef} className={`relative space-y-2 ${open ? "z-[80]" : "z-10"}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
        {label}
      </span>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setOpen(true);
            }
          }}
          className="flex w-full items-center justify-between rounded-2xl border border-brand-500/15 bg-white px-5 py-4 text-left text-sm text-slate-800 outline-none transition hover:border-brand-500/35 focus:border-brand-500/40 focus:ring-2 focus:ring-brand-400/30"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={open ? listboxId : undefined}
        >
          <span>{selected.label}</span>
          <Chevron open={open} />
        </button>

        {open ? (
          <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-[90] overflow-hidden rounded-2xl border border-brand-500/20 bg-[linear-gradient(180deg,rgba(255,251,245,0.99)_0%,rgba(248,244,236,0.98)_100%)] shadow-[0_22px_60px_rgba(0,0,0,0.28)] sm:min-w-[22rem]">
            <div className="border-b border-brand-500/15 p-2.5">
              <div className="flex min-h-11 items-center rounded-xl border border-brand-500/20 bg-white px-3 text-slate-700 focus-within:border-brand-500/45 focus-within:ring-2 focus-within:ring-brand-400/25">
                <span className="shrink-0 text-brand-500">
                  <SearchIcon />
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setActiveIndex((current) => Math.min(current + 1, filteredOptions.length - 1));
                    }

                    if (event.key === "ArrowUp") {
                      event.preventDefault();
                      setActiveIndex((current) => Math.max(current - 1, 0));
                    }

                    if (event.key === "Enter") {
                      event.preventDefault();
                      if (activeOption) {
                        selectOption(activeOption);
                      }
                    }

                    if (event.key === "Escape") {
                      event.preventDefault();
                      closeDropdown();
                    }
                  }}
                  placeholder="Search categories..."
                  className="ml-2 min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500"
                  role="combobox"
                  aria-expanded={open}
                  aria-controls={listboxId}
                  aria-autocomplete="list"
                  aria-activedescendant={activeOption ? `${listboxId}-${activeOption.value}` : undefined}
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      inputRef.current?.focus();
                    }}
                    className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-black/5 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                    aria-label="Clear category search"
                  >
                    <ClearIcon />
                  </button>
                ) : null}
              </div>
            </div>

            <div id={listboxId} className="max-h-[min(18rem,calc(100vh-14rem))] overflow-y-auto p-2" role="listbox" aria-label={label}>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => {
                  const isSelected = option.value === value;
                  const isActive = index === activeIndex;

                  return (
                    <button
                      id={`${listboxId}-${option.value}`}
                      key={option.value}
                      type="button"
                      onClick={() => selectOption(option)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition focus:outline-none ${
                        isSelected
                          ? "bg-brand-500/15 text-brand-700"
                          : isActive
                            ? "bg-black/5 text-slate-950"
                            : "text-slate-800 hover:bg-black/5 hover:text-slate-950"
                      }`}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <span>{option.label}</span>
                      {isSelected ? (
                        <span className="ml-3 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      ) : null}
                    </button>
                  );
                })
              ) : (
                <p className="px-3 py-4 text-sm text-slate-600">No categories found</p>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
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
  const hasSearchQuery = Boolean(searchParams.get("query")?.trim());
  const selectedCategory = hasSearchQuery ? "all" : searchParams.get("category") ?? "all";
  const selectedPrice = searchParams.get("price") ?? "all";
  const activeQuickCategory =
    quickCategories.find((category) => category.matches.includes(selectedCategory))?.value ?? "all";

  const handleChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (key === "category") {
      params.delete("query");
    } else if (hasSearchQuery) {
      params.delete("category");
    }

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`/products${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <div className="relative z-40 surface rounded-[28px] p-5 shadow-luxe">
      <div className="-mx-1 mb-5 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center gap-2" role="tablist" aria-label="Quick product categories">
          {quickCategories.map((category) => {
            const isActive = activeQuickCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => handleChange("category", category.value)}
                className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-400/60 focus:ring-offset-2 focus:ring-offset-white ${
                  isActive
                    ? "border-brand-500 bg-brand-500 text-black shadow-[0_10px_24px_rgba(212,175,55,0.22)]"
                    : "border-brand-500/20 bg-black/90 text-stone-200 hover:border-brand-500/45 hover:text-brand-300"
                }`}
                role="tab"
                aria-selected={isActive}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SearchableCategoryDropdown
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
