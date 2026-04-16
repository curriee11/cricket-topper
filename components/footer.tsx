import Link from "next/link";
import { COMPANY_NAME, DISPLAY_PHONE, PHONE_NUMBER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand-300">
            {COMPANY_NAME}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Modern cricket gear for players who want premium performance and fast
            assistance on the phone or WhatsApp.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <div className="mt-3 space-y-2 text-sm text-slate-400">
            <Link href="/" className="block transition hover:text-white">
              Home
            </Link>
            <Link href="/products" className="block transition hover:text-white">
              Products
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-slate-400">
            <a href={`tel:${PHONE_NUMBER}`} className="block transition hover:text-white">
              {DISPLAY_PHONE}
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-white"
            >
              WhatsApp Enquiries
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
