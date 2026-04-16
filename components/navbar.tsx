import Link from "next/link";
import { COMPANY_NAME, PHONE_NUMBER } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Catalogue" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/15 text-sm font-semibold text-brand-300 ring-1 ring-brand-400/30">
            CT
          </span>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-300">
              {COMPANY_NAME}
            </p>
            <p className="text-xs text-slate-400">Premium cricket equipment</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${PHONE_NUMBER}`}
          className="rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-200 transition hover:bg-brand-500/20"
        >
          Call Us
        </a>
      </div>
    </header>
  );
}
