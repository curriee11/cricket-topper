import type { Metadata } from "next";
import Link from "next/link";
import { institutions } from "@/lib/institutions";

export const metadata: Metadata = {
  title: "Institutions We Serve",
  description:
    "Selected institutions supplied with cricket and sports goods by Cricket Topper."
};

export default function InstitutionsPage() {
  return (
    <main className="relative overflow-hidden bg-black pb-20 pt-12 sm:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(29,59,114,0.2),transparent_32%)]" />
      <div className="container-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
            Sports Goods &amp; Nets
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">
            Institutions we serve.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
            Cricket Topper supplies sports goods and nets for institutions, academies,
            and sports facilities across India.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {institutions.map((institution, index) => (
            <article
              key={institution.name}
              className="surface-strong rounded-2xl border-brand-500/20 p-6 shadow-glow transition hover:-translate-y-1 hover:border-brand-500/45"
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-brand-300">
                0{index + 1}
              </p>
              <h2 className="mt-8 text-2xl font-semibold leading-8 text-white">
                {institution.name}
              </h2>
              <p className="mt-3 text-sm text-stone-400">{institution.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-brand-500/20 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold text-white">Planning a sports facility?</p>
            <p className="mt-1 text-sm text-stone-400">
              Talk to our team about equipment and net requirements.
            </p>
          </div>
          <Link
            href="/#contact"
            className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-brand-400"
          >
            Contact Cricket Topper
          </Link>
        </div>
      </div>
    </main>
  );
}
