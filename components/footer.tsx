import Image from "next/image";
import {
  ADDRESS,
  ADDRESS_LINES,
  ADDITIONAL_PHONE_NUMBERS,
  BUSINESS_HOURS,
  CITY,
  COMPANY_NAME,
  DISPLAY_PHONE,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  YOUTUBE_SUBSCRIBERS,
  YOUTUBE_URL
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-500/15 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,59,114,0.42),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(10,31,68,0.58),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(7,22,49,0.72))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/55 to-transparent" />
      <div className="container-shell relative py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
                {COMPANY_NAME}
              </p>
              <p className="mt-1 text-xs tracking-[0.12em] text-blue-100/60">
                Sports goods store
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-6 text-blue-50/75">
            Premium sports goods store in {CITY} focused on fast assistance, quality
            gear, and direct phone or WhatsApp enquiries.
          </p>
          <div className="mt-6 border-t border-brand-500/15 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
              Visit Us
            </p>
            <address className="mt-3 max-w-xs text-sm not-italic leading-6 text-blue-100/70">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <div className="mt-4 grid gap-6 text-sm text-blue-50/80 sm:grid-cols-2 sm:gap-8">
            <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
              Call us
            </p>
            <div className="mt-2 space-y-1.5">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="block font-medium text-blue-50 transition hover:text-brand-300"
              >
                {DISPLAY_PHONE}
              </a>
              {ADDITIONAL_PHONE_NUMBERS.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="block transition hover:text-brand-300"
                >
                  {phone.display}
                </a>
              ))}
            </div>

            </div>

            <div className="border-brand-500/15 sm:border-l sm:pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                Connect
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\s+/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block transition hover:text-brand-300"
              >
                WhatsApp Enquiries
              </a>
              <a
                href="https://www.instagram.com/crickettopper/"
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 block transition hover:text-brand-300"
              >
                Instagram
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 block transition hover:text-brand-300"
              >
                YouTube · 5.5K+ subscribers
              </a>
            <div className="mt-4 border-t border-brand-500/15 pt-3">
              <p>{BUSINESS_HOURS}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="mt-6 border-t border-brand-500/15 pt-4 text-sm text-blue-100/50 sm:flex sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Cricket Topper. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Premium cricket and sports equipment</p>
      </div>
      </div>
    </footer>
  );
}
