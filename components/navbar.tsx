import Image from "next/image";
import Link from "next/link";
import { COMPANY_NAME, PHONE_NUMBER } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Catalogue" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-500/25 bg-black/95 shadow-[0_10px_35px_rgba(212,175,55,0.08)] backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-brand-500/30 bg-black p-1.5 shadow-glow">
            <Image
              src="/logo.jpg"
              alt={`${COMPANY_NAME} logo`}
              width={48}
              height={48}
              className="h-full w-full rounded-xl object-cover opacity-95 saturate-90"
              priority
            />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
              {COMPANY_NAME}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-stone-400">
              Premium cricket equipment
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-stone-300 transition hover:text-brand-300 hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${PHONE_NUMBER}`}
          className="rounded-full border border-brand-300/50 bg-brand-500 px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_24px_rgba(212,175,55,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-400"
        >
          Call Us
        </a>
      </div>
    </header>
  );
}
