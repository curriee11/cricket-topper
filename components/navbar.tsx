"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { COMPANY_NAME, PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/constants";

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M6.2 3.5H4.7C4.15 3.5 3.7 3.94 3.74 4.49C4.08 9.38 7.97 13.27 12.86 13.61C13.41 13.65 13.85 13.2 13.85 12.65V11.15C13.85 10.76 13.62 10.41 13.26 10.26L10.98 9.31C10.67 9.18 10.31 9.26 10.08 9.51L9.12 10.56C7.61 9.83 6.39 8.61 5.66 7.1L6.71 6.14C6.96 5.91 7.04 5.55 6.91 5.24L5.96 2.96C5.81 2.6 5.46 2.37 5.07 2.37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.48 0 .14 5.34.14 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.87 11.87 0 0 0 5.74 1.47h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.18-3.47-8.41ZM12.07 21.8h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.75.98 1-3.65-.23-.38a9.83 9.83 0 0 1-1.5-5.25C2.2 6.44 6.59 2.05 12.06 2.05a9.8 9.8 0 0 1 6.96 2.88 9.79 9.79 0 0 1 2.88 6.97c0 5.47-4.39 9.9-9.83 9.9Zm5.42-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5a9.03 9.03 0 0 1-1.68-2.1c-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.25 5.14 4.55.72.3 1.28.49 1.72.62.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!searchRef.current?.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const whatsappUrl = useMemo(
    () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to know more about your products.")}`,
    []
  );

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = searchValue.trim();
    router.push(`/products${query ? `?query=${encodeURIComponent(query)}` : ""}`);
    setSearchOpen(false);
    setMobileOpen(false);
  }

  return (
    <header className={`sticky top-0 z-50 border-b border-brand-500/20 bg-black/90 transition-all duration-300 ${scrolled ? "backdrop-blur-md shadow-[0_10px_32px_rgba(0,0,0,0.32)]" : "shadow-[0_8px_24px_rgba(212,175,55,0.06)]"}`}>
      <div className="container-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <div className="flex items-center gap-3 justify-self-start">
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
            </div>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          <Link href="/" className="text-sm text-stone-300 transition hover:text-brand-300">
            Home
          </Link>
          <Link href="/products" className="text-sm text-stone-300 transition hover:text-brand-300">
            Products
          </Link>
          <Link href="/products?category=bats" className="text-sm text-stone-300 transition hover:text-brand-300">
            Bats
          </Link>
          <Link href="/products?category=accessories" className="text-sm text-stone-300 transition hover:text-brand-300">
            Accessories
          </Link>
          <Link href="/products?category=nets" className="text-sm text-stone-300 transition hover:text-brand-300">
            Nets
          </Link>
          <Link href="/guides" className="text-sm text-stone-300 transition hover:text-brand-300">
            Guides
          </Link>
          <Link href="/about" className="text-sm text-stone-300 transition hover:text-brand-300">
            About Us
          </Link>
          <Link href="/projects" className="text-sm text-stone-300 transition hover:text-brand-300">
            Our Projects
          </Link>
        </nav>

        <div className="flex items-center justify-end gap-2 lg:gap-3" ref={searchRef}>
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => setSearchOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-500/20 bg-white/5 text-stone-200 transition hover:border-brand-500/35 hover:text-brand-300"
              aria-label="Open search"
              title="Search products"
            >
              <SearchIcon />
            </button>
            <form
              onSubmit={submitSearch}
              className={`overflow-hidden transition-all duration-300 ${searchOpen ? "w-64 opacity-100" : "w-0 opacity-0"}`}
            >
              <div className="flex items-center rounded-full border border-brand-500/20 bg-black/70 px-4 py-2.5">
                <SearchIcon />
                <input
                  type="search"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="Search bats, gloves, kits..."
                  className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-stone-500"
                />
              </div>
            </form>
          </div>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="hidden items-center gap-2 rounded-full border border-brand-300/50 bg-brand-500 px-4 py-2.5 text-sm font-semibold text-black shadow-[0_8px_18px_rgba(212,175,55,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-400 sm:flex"
          >
            <PhoneIcon />
            <span>Call Us</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-brand-500/25 bg-white/5 text-brand-300 transition hover:border-brand-500/40 hover:bg-brand-500/10 sm:flex"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-500/25 bg-white/5 text-stone-100 transition hover:border-brand-500/40 hover:text-brand-300 lg:hidden"
            aria-label="Toggle menu"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-brand-500/15 bg-black/97 px-4 pb-5 pt-4 lg:hidden">
          <div className="container-shell space-y-4 px-0">
            <form onSubmit={submitSearch} className="flex items-center rounded-2xl border border-brand-500/20 bg-black/70 px-4 py-3">
              <SearchIcon />
              <input
                type="search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search products"
                className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-stone-500"
              />
            </form>

            <div className="space-y-2">
              <Link href="/" className="block rounded-2xl px-4 py-3 text-sm text-stone-200 transition hover:bg-white/5 hover:text-brand-300">
                Home
              </Link>
              <Link href="/products" className="block rounded-2xl px-4 py-3 text-sm text-stone-200 transition hover:bg-white/5 hover:text-brand-300">
                Products
              </Link>
              <Link href="/products?category=bats" className="block rounded-2xl px-4 py-3 text-sm text-stone-200 transition hover:bg-white/5 hover:text-brand-300">
                Bats
              </Link>
              <Link href="/products?category=accessories" className="block rounded-2xl px-4 py-3 text-sm text-stone-200 transition hover:bg-white/5 hover:text-brand-300">
                Accessories
              </Link>
              <Link href="/products?category=nets" className="block rounded-2xl px-4 py-3 text-sm text-stone-200 transition hover:bg-white/5 hover:text-brand-300">
                Nets
              </Link>
              <Link href="/guides" className="block rounded-2xl px-4 py-3 text-sm text-stone-200 transition hover:bg-white/5 hover:text-brand-300">
                Guides
              </Link>
              <Link href="/about" className="block rounded-2xl px-4 py-3 text-sm text-stone-200 transition hover:bg-white/5 hover:text-brand-300">
                About Us
              </Link>
              <Link href="/projects" className="block rounded-2xl px-4 py-3 text-sm text-stone-200 transition hover:bg-white/5 hover:text-brand-300">
                Our Projects
              </Link>
            </div>

            <div className="flex gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-300/50 bg-brand-500 px-4 py-3 text-sm font-semibold text-black"
              >
                <PhoneIcon />
                <span>Call Us</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-500/25 bg-white/5 text-brand-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}






