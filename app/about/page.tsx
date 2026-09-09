import type { Metadata } from "next";
import Link from "next/link";
import {
  ADDRESS,
  BUSINESS_HOURS,
  CITY,
  COMPANY_NAME,
  DISPLAY_PHONE,
  PHONE_NUMBER
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cricket Topper, a Jalandhar-based cricket and sports goods manufacturer and wholesaler."
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-black pb-20 pt-12 sm:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(29,59,114,0.2),transparent_32%)]" />
      <div className="container-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
            About {COMPANY_NAME}
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">
            Cricket equipment built around the game.
          </h1>
          <p className="mt-5 text-base leading-7 text-stone-300 sm:text-lg">
            Since 1985, Cricket Topper has served players, academies, institutions,
            and sports facilities with cricket bats, protective accessories, kit
            essentials, and nets.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="surface-strong rounded-2xl border-brand-500/20 p-6 shadow-glow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
              Our focus
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Bats, accessories, and nets
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300">
              Our catalogue brings together leather and tennis bats, batting
              protection, helmets, guards, gloves, kit bags, and cricket net
              solutions for everyday practice and organised sports facilities.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="border-l border-brand-500/40 pl-4">
                <p className="text-2xl font-semibold text-brand-300">1985</p>
                <p className="mt-1 text-sm text-stone-400">Established</p>
              </div>
              <div className="border-l border-brand-500/40 pl-4">
                <p className="text-2xl font-semibold text-brand-300">Jalandhar</p>
                <p className="mt-1 text-sm text-stone-400">Punjab</p>
              </div>
              <div className="border-l border-brand-500/40 pl-4">
                <p className="text-2xl font-semibold text-brand-300">India</p>
                <p className="mt-1 text-sm text-stone-400">Supply network</p>
              </div>
            </div>
          </section>

          <section className="surface rounded-2xl p-6 shadow-luxe sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-500">
              Visit or contact us
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">{CITY}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">{ADDRESS}</p>
            <div className="mt-6 border-t border-brand-500/15 pt-5 text-sm text-slate-700">
              <a className="block transition hover:text-brand-600" href={`tel:${PHONE_NUMBER}`}>
                {DISPLAY_PHONE}
              </a>
              <p className="mt-2">{BUSINESS_HOURS}</p>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-brand-500/20 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold text-white">Looking for cricket supplies?</p>
            <p className="mt-1 text-sm text-stone-400">
              Browse the catalogue or speak with our team directly.
            </p>
          </div>
          <Link
            href="/products"
            className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-brand-400"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}
