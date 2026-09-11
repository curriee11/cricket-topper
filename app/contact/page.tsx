import type { Metadata } from "next";
import Link from "next/link";
import {
  ADDRESS_LINES,
  ADDITIONAL_PHONE_NUMBERS,
  BUSINESS_HOURS,
  CITY,
  COMPANY_NAME,
  DEALER_EMAIL,
  DISPLAY_PHONE,
  FACEBOOK_URL,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  YOUTUBE_URL,
  YOUTUBE_SUBSCRIBERS
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Cricket Topper for cricket equipment, sports goods, and net enquiries."
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\s+/g, "")}?text=${encodeURIComponent(
    "Hi, I would like to enquire about Cricket Topper products."
  )}`;

  return (
    <main className="relative overflow-hidden bg-black pb-20 pt-12 sm:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(29,59,114,0.2),transparent_32%)]" />
      <div className="container-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Contact Us</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">Let&apos;s talk cricket.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
            Speak with our team about bats, accessories, sports nets, turf, bulk supply, or institutional requirements.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="surface rounded-2xl p-7 shadow-luxe sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-500">Visit Us</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">{COMPANY_NAME}</h2>
            <address className="mt-4 text-sm not-italic leading-7 text-slate-700">
              {ADDRESS_LINES.map((line) => <span key={line} className="block">{line}</span>)}
            </address>
            <div className="mt-7 border-t border-brand-500/15 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Opening Hours</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{BUSINESS_HOURS}</p>
            </div>
          </section>

          <section className="surface-strong rounded-2xl border-brand-500/20 p-7 shadow-glow sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Direct Enquiries</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Reach the Cricket Topper team.</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a href={`tel:${PHONE_NUMBER}`} className="rounded-xl border border-brand-500/20 bg-white/[0.03] p-4 text-stone-200 transition hover:border-brand-500/45 hover:text-brand-300">
                <span className="block text-xs uppercase tracking-[0.18em] text-stone-500">Call Us</span>
                <span className="mt-2 block font-medium">{DISPLAY_PHONE}</span>
              </a>
              {ADDITIONAL_PHONE_NUMBERS.map((phone) => (
                <a key={phone.href} href={phone.href} className="rounded-xl border border-brand-500/20 bg-white/[0.03] p-4 text-stone-200 transition hover:border-brand-500/45 hover:text-brand-300">
                  <span className="block text-xs uppercase tracking-[0.18em] text-stone-500">Call Us</span>
                  <span className="mt-2 block font-medium">{phone.display}</span>
                </a>
              ))}
              <a href={`mailto:${DEALER_EMAIL}`} className="rounded-xl border border-brand-500/20 bg-white/[0.03] p-4 text-stone-200 transition hover:border-brand-500/45 hover:text-brand-300 sm:col-span-2">
                <span className="block text-xs uppercase tracking-[0.18em] text-stone-500">Email Enquiries</span>
                <span className="mt-2 block font-medium">{DEALER_EMAIL}</span>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-brand-400">WhatsApp Enquiries</a>
              <Link href="/products" className="rounded-full border border-brand-500/35 px-5 py-3 text-sm font-semibold text-brand-300 transition hover:bg-brand-500/10">Browse Products</Link>
            </div>
            <div className="mt-7 border-t border-brand-500/15 pt-5 text-sm text-stone-400">
              <p className="font-semibold text-stone-300">Connect with us</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                <a href="https://www.instagram.com/crickettopper/" target="_blank" rel="noreferrer" className="transition hover:text-brand-300">Instagram</a>
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="transition hover:text-brand-300">Facebook</a>
                <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="transition hover:text-brand-300">YouTube · {YOUTUBE_SUBSCRIBERS}</a>
              </div>
            </div>
          </section>
        </div>
        <p className="mt-8 text-center text-sm text-stone-500">Serving customers from {CITY} with worldwide shipping support.</p>
      </div>
    </main>
  );
}
