import Link from "next/link";
import { DISPLAY_PHONE, PHONE_NUMBER } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-hero-grid bg-[size:52px_52px] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.28),transparent_28%),radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_45%)]" />
      <div className="container-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Modern cricket gear curated for players who want to perform.
            </h1>
            <div className="mt-5 h-px w-32 bg-gradient-to-r from-brand-500 via-brand-300 to-transparent" />
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
              Explore premium bats, gloves, and complete kits in a fast, mobile-first
              catalogue built to turn browsing into direct phone and WhatsApp enquiries.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-black shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-400"
              >
                Browse Products
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="rounded-full border border-brand-500/35 bg-transparent px-6 py-3 text-center text-sm font-semibold text-brand-300 transition hover:bg-brand-500/10"
              >
                Call {DISPLAY_PHONE}
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-brand-500/25 bg-gradient-to-br from-[#15110a] via-[#1b1711] to-[#24201a] p-6 shadow-glow sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/28 via-brand-500/8 to-transparent" />
            <div className="absolute -right-12 -top-10 h-48 w-48 rounded-full bg-brand-500/18 blur-3xl" />
            <div className="relative space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[28px] border border-brand-500/20 bg-black/40 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                    Handpicked Range
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-brand-300">50+</p>
                  <p className="mt-2 text-sm text-stone-300">Catalogue-ready SKUs</p>
                </div>
                <div className="rounded-[28px] border border-brand-500/20 bg-black/40 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                    Quick Enquiry
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-brand-300">24/7</p>
                  <p className="mt-2 text-sm text-stone-300">Call or WhatsApp support</p>
                </div>
              </div>

              <div className="rounded-[32px] border border-brand-500/25 bg-black/35 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
                  Built For
                </p>
                <div className="mt-4 grid gap-3 text-sm text-stone-200 sm:grid-cols-3">
                  <div className="rounded-2xl border border-brand-500/15 bg-brand-500/10 px-4 py-3">
                    Club players
                  </div>
                  <div className="rounded-2xl border border-brand-500/15 bg-brand-500/10 px-4 py-3">
                    Academies
                  </div>
                  <div className="rounded-2xl border border-brand-500/15 bg-brand-500/10 px-4 py-3">
                    Touring squads
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
