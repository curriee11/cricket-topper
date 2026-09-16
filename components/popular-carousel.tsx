"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Product } from "@/lib/types";
import { getDisplayPrice, titleCase } from "@/lib/utils";

type PopularGroup = {
  id: string;
  title: string;
  description: string;
  products: Product[];
};

function ProductCarouselLane({ group }: { group: PopularGroup }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollByCard(direction: "previous" | "next") {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cardWidth = scroller.querySelector("article")?.clientWidth ?? 320;
    scroller.scrollBy({
      left: direction === "next" ? cardWidth + 20 : -(cardWidth + 20),
      behavior: "smooth"
    });
  }

  function updateActiveIndex() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cardWidth = scroller.querySelector("article")?.clientWidth ?? 320;
    const nextIndex = Math.round(scroller.scrollLeft / (cardWidth + 20));
    setActiveIndex(Math.min(group.products.length - 1, Math.max(0, nextIndex)));
  }

  if (!group.products.length) {
    return null;
  }

  const hasMultipleProducts = group.products.length > 1;

  return (
    <div className="border-t border-brand-500/15 pt-8 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-300">
            {group.description}
          </p>
        </div>

        {hasMultipleProducts ? (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard("previous")}
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-500/30 bg-white/5 text-xl font-semibold text-brand-300 transition hover:border-brand-400 hover:bg-brand-500/15"
              aria-label={`Show previous ${group.title}`}
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-500/30 bg-white/5 text-xl font-semibold text-brand-300 transition hover:border-brand-400 hover:bg-brand-500/15"
              aria-label={`Show next ${group.title}`}
            >
              &gt;
            </button>
          </div>
        ) : null}
      </div>

      <div
        ref={scrollerRef}
        onScroll={updateActiveIndex}
        className="mt-5 flex snap-x gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {group.products.map((product) => (
          <article
            key={product.id}
            className="group min-w-[82%] snap-start overflow-hidden rounded-[28px] border border-brand-500/18 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 sm:min-w-[420px] lg:min-w-[31.5%]"
          >
            <Link href={`/products/${product.slug}`} className="block">
              <div className="relative aspect-[5/4] overflow-hidden bg-gradient-to-br from-black via-[#181611] to-[#2b2617]">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 420px, 82vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                  {titleCase(product.category)}
                </div>
              </div>

              <div className="grid min-h-[220px] gap-5 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
                    {titleCase(product.category)}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-slate-950">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 self-end border-t border-slate-200 pt-4">
                  <p className="text-lg font-semibold text-brand-600">
                    {getDisplayPrice(product)}
                  </p>
                  <span className="text-sm font-semibold text-slate-800 transition group-hover:text-brand-600">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {hasMultipleProducts ? (
        <div className="flex justify-center gap-2">
          {group.products.map((product, index) => (
            <button
              key={product.id}
              type="button"
              onClick={() => {
                const scroller = scrollerRef.current;
                const cardWidth = scroller?.querySelector("article")?.clientWidth ?? 320;
                scroller?.scrollTo({ left: index * (cardWidth + 20), behavior: "smooth" });
              }}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex ? "w-8 bg-brand-400" : "w-2.5 bg-white/25 hover:bg-white/45"
              }`}
              aria-label={`Show ${product.name}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function PopularCarousel({ groups }: { groups: PopularGroup[] }) {
  return (
    <section className="relative overflow-hidden bg-black py-14 sm:py-16">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
            Popular Picks
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Shop by top-selling categories
          </h2>
          <p className="mt-3 text-base leading-7 text-stone-300">
            Separate carousels for cricket bats, nets, and turf products.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <ProductCarouselLane key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
