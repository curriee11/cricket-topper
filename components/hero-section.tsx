import Link from "next/link";
import { DISPLAY_PHONE, PHONE_NUMBER } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-hero-grid bg-[size:52px_52px] opacity-25" />
      <div className="container-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
              Premium Cricket Catalogue
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Modern cricket gear curated for players who want to perform.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore premium bats, gloves, and complete kits in a fast, mobile-first
              catalogue built to turn browsing into direct phone and WhatsApp enquiries.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
              >
                Browse Products
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call {DISPLAY_PHONE}
              </a>
            </div>
          </div>

          <div className="surface relative overflow-hidden rounded-[36px] p-6 shadow-glow sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-400/18 via-transparent to-amber-300/10" />
            <div className="relative space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Handpicked Range
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">50+</p>
                  <p className="mt-2 text-sm text-slate-400">Catalogue-ready SKUs</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Quick Enquiry
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">24/7</p>
                  <p className="mt-2 text-sm text-slate-400">Call or WhatsApp support</p>
                </div>
              </div>

              <div className="rounded-[32px] border border-brand-400/20 bg-brand-500/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
                  Built For
                </p>
                <div className="mt-4 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-950/60 px-4 py-3">Club players</div>
                  <div className="rounded-2xl bg-slate-950/60 px-4 py-3">Academies</div>
                  <div className="rounded-2xl bg-slate-950/60 px-4 py-3">Touring squads</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
