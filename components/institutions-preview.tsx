"use client";

import { useRef } from "react";
import { institutions } from "@/lib/institutions";

const institutionMarks: Record<string, string> = {
  "NIT Jalandhar": "NITJ",
  "Rohit Sharma Sports Academy, Mysore": "RSA",
  "IIT Kharagpur": "IITK",
  "IIIT Manipur": "IIIT",
  "KV Jalandhar": "KV"
};

export function InstitutionsPreview() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  function scrollCarousel(direction: number) {
    carouselRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  }

  return (
    <section className="border-y border-brand-500/15 bg-[#050505] py-16">
      <div className="container-shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
              Institutions We Serve
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Trusted for sports goods and net solutions.
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-400">
              We support institutions, academies, and sports facilities with dependable equipment and net supply.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/25 text-lg text-brand-300 transition hover:border-brand-500/50 hover:bg-brand-500/10"
              aria-label="Previous institution"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/25 text-lg text-brand-300 transition hover:border-brand-500/50 hover:bg-brand-500/10"
              aria-label="Next institution"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {institutions.map((institution, index) => (
            <div
              key={institution.name}
              className="group flex min-h-56 min-w-[calc(100%-2rem)] snap-start flex-col justify-between rounded-2xl border border-brand-500/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/45 hover:shadow-[0_18px_40px_rgba(212,175,55,0.12)] sm:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.333%-0.67rem)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-brand-500/30 bg-black text-xs font-semibold tracking-[0.12em] text-brand-300 shadow-[inset_0_0_20px_rgba(212,175,55,0.08)]">
                  {institutionMarks[institution.name]}
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] text-stone-500">
                  0{index + 1}
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold leading-7 text-white transition group-hover:text-brand-200">
                {institution.name}
                </p>
                <p className="mt-2 text-sm text-stone-500">{institution.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
