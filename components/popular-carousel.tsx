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
  const isBatsCarousel = group.id === "bats";

  function scrollByCard(direction: "previous" | "next") {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cardWidth = scroller.querySelector("article")?.clientWidth ?? 320;
    const gap = Number.parseFloat(getComputedStyle(scroller).columnGap || "20");
    scroller.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth"
    });
  }

  function updateActiveIndex() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cardWidth = scroller.querySelector("article")?.clientWidth ?? 320;
    const gap = Number.parseFloat(getComputedStyle(scroller).columnGap || "20");
    const nextIndex = Math.round(scroller.scrollLeft / (cardWidth + gap));
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
          <div className={`flex items-center gap-3 ${isBatsCarousel ? "md:hidden" : ""}`}>
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

      <div className={`relative ${isBatsCarousel ? "mt-5" : ""}`}>
        {hasMultipleProducts && isBatsCarousel ? (
          <>
            <button
              type="button"
              onClick={() => scrollByCard("previous")}
              className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brand-400/40 bg-black/85 text-2xl font-semibold text-brand-300 shadow-[0_14px_34px_rgba(0,0,0,0.38)] backdrop-blur transition hover:-translate-x-1/2 hover:-translate-y-[54%] hover:border-brand-300 hover:bg-[#15120a] md:grid"
              aria-label={`Show previous ${group.title}`}
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brand-400/40 bg-black/85 text-2xl font-semibold text-brand-300 shadow-[0_14px_34px_rgba(0,0,0,0.38)] backdrop-blur transition hover:translate-x-1/2 hover:-translate-y-[54%] hover:border-brand-300 hover:bg-[#15120a] md:grid"
              aria-label={`Show next ${group.title}`}
            >
              &gt;
            </button>
          </>
        ) : null}

        <div
          ref={scrollerRef}
          onScroll={updateActiveIndex}
          className={`flex snap-x overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isBatsCarousel ? "gap-4 px-1 pb-5 pt-2 sm:gap-5 lg:gap-6" : "mt-5 gap-5 pb-5"
          }`}
        >
          {group.products.map((product) => (
            <article
              key={product.id}
              className={
                isBatsCarousel
                  ? "group flex min-w-0 flex-[0_0_86%] snap-start overflow-hidden rounded-3xl border border-brand-500/20 bg-white shadow-[0_18px_52px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-brand-400/55 hover:shadow-[0_24px_64px_rgba(0,0,0,0.42)] sm:flex-[0_0_calc((100%_-_20px)_/_2)] lg:flex-[0_0_calc((100%_-_48px)_/_3)]"
                  : "group min-w-[82%] snap-start overflow-hidden rounded-[28px] border border-brand-500/18 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 sm:min-w-[420px] lg:min-w-[31.5%]"
              }
            >
              <Link href={`/products/${product.slug}`} className="flex w-full flex-col">
                <div
                  className={
                    isBatsCarousel
                      ? "relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#050505] via-[#17140d] to-[#2a2414] sm:aspect-[1.18/1] lg:aspect-[1.08/1]"
                      : "relative aspect-[5/4] overflow-hidden bg-gradient-to-br from-black via-[#181611] to-[#2b2617]"
                  }
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes={
                      isBatsCarousel
                        ? "(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 86vw"
                        : "(min-width: 1024px) 32vw, (min-width: 640px) 420px, 82vw"
                    }
                    className={`transition duration-500 ${
                      isBatsCarousel
                        ? "object-cover object-center group-hover:scale-[1.02]"
                        : "object-cover group-hover:scale-[1.04]"
                    }`}
                  />
                  <div
                    className={
                      isBatsCarousel
                        ? "absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 to-transparent"
                        : "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent"
                    }
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                    {titleCase(product.category)}
                  </div>
                </div>

                <div
                  className={
                    isBatsCarousel
                      ? "flex min-h-[188px] flex-1 flex-col justify-between gap-4 p-5 sm:min-h-[198px] lg:p-5"
                      : "grid min-h-[220px] gap-5 p-6"
                  }
                >
                  <div>
                    <p
                      className={
                        isBatsCarousel
                          ? "text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-600"
                          : "text-xs font-semibold uppercase tracking-[0.2em] text-brand-500"
                      }
                    >
                      {titleCase(product.category)}
                    </p>
                    <h3
                      className={
                        isBatsCarousel
                          ? "mt-2 line-clamp-2 min-h-[48px] text-lg font-semibold leading-6 text-slate-950"
                          : "mt-3 text-xl font-semibold leading-7 text-slate-950"
                      }
                    >
                      {product.name}
                    </h3>
                    <p
                      className={
                        isBatsCarousel
                          ? "mt-2 line-clamp-2 text-sm leading-6 text-slate-600"
                          : "mt-3 text-sm leading-6 text-slate-600"
                      }
                    >
                      {product.shortDescription}
                    </p>
                  </div>

                  {isBatsCarousel ? (
                    <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                          MRP
                        </p>
                        <p className="mt-0.5 text-base font-semibold text-brand-700 sm:text-lg">
                          {getDisplayPrice(product).replace(/^MRP\s*/i, "")}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-semibold text-slate-900 transition group-hover:text-brand-700">
                          View Details
                        </span>
                        <span className="mt-1 block text-xs font-medium text-slate-500">
                          Wholesale Enquiry
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-4 self-end border-t border-slate-200 pt-4">
                      <p className="text-lg font-semibold text-brand-600">
                        {getDisplayPrice(product)}
                      </p>
                      <span className="text-sm font-semibold text-slate-800 transition group-hover:text-brand-600">
                        View Details
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {hasMultipleProducts ? (
        <div className={`flex justify-center ${isBatsCarousel ? "gap-1.5" : "gap-2"}`}>
          {group.products.map((product, index) => (
            <button
              key={product.id}
              type="button"
              onClick={() => {
                const scroller = scrollerRef.current;
                const cardWidth = scroller?.querySelector("article")?.clientWidth ?? 320;
                const gap = scroller ? Number.parseFloat(getComputedStyle(scroller).columnGap || "20") : 20;
                scroller?.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" });
              }}
              className={`rounded-full transition ${
                isBatsCarousel
                  ? index === activeIndex
                    ? "h-1.5 w-6 bg-brand-400"
                    : "h-1.5 w-1.5 bg-white/25 hover:bg-white/45"
                  : index === activeIndex
                    ? "h-2.5 w-8 bg-brand-400"
                    : "h-2.5 w-2.5 bg-white/25 hover:bg-white/45"
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
            Explore Our Cricket Range
          </h2>
          <p className="mt-3 text-base leading-7 text-stone-300">
            Quality cricket equipment for retailers, clubs, academies, and individual players.
          </p>
        </div>

        <div className="mt-7 space-y-10">
          {groups.map((group) => (
            <ProductCarouselLane key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
