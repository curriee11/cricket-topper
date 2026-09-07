import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS,
  BUSINESS_HOURS,
  CITY,
  COMPANY_NAME,
  DISPLAY_PHONE,
  PHONE_NUMBER,
  YOUTUBE_URL
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-500/15 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,59,114,0.42),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(10,31,68,0.58),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(7,22,49,0.72))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/55 to-transparent" />
      <div className="container-shell relative grid gap-8 py-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-brand-500/30 bg-black/35 p-1.5 shadow-glow">
              <Image
                src="/logo.jpg"
                alt={`${COMPANY_NAME} logo`}
                width={48}
                height={48}
                className="h-full w-full rounded-xl object-cover opacity-90"
              />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand-300">
                {COMPANY_NAME}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-blue-100/60">
                Sports goods store
              </p>
            </div>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-blue-50/85">
            Premium sports goods store in {CITY} focused on fast assistance, quality
            gear, and direct phone or WhatsApp enquiries.
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-blue-100/70">{ADDRESS}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <div className="mt-3 space-y-2 text-sm text-blue-50/80">
            <Link href="/" className="block transition hover:text-brand-300">
              Home
            </Link>
            <Link href="/products" className="block transition hover:text-brand-300">
              Products
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-blue-50/80">
            <a href={`tel:${PHONE_NUMBER}`} className="block transition hover:text-brand-300">
              {DISPLAY_PHONE}
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-brand-300"
            >
              WhatsApp Enquiries
            </a>
            <a
              href="https://www.instagram.com/crickettopper/"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-brand-300"
            >
              Instagram
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-brand-300"
            >
              YouTube · 5.4K subscribers
            </a>
            <p>{BUSINESS_HOURS}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
