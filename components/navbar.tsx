"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { COMPANY_NAME, PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/constants";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/products?category=bats", label: "Bats" },
  { href: "/products?category=nets", label: "Nets" },
  { href: "/products?category=turf", label: "Turf" },
  { href: "/guides", label: "Guides" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" }
];

const productMenuItems = [
  { href: "/products?category=bats", label: "Bats" },
  { href: "/products?category=gloves", label: "Gloves" },
  { href: "/products?category=pads", label: "Pads" },
  { href: "/products?category=helmets", label: "Helmets" },
  { href: "/products?category=balls", label: "Cricket Balls" },
  { href: "/products?category=kits", label: "Kits" },
  { href: "/products?category=accessories", label: "Accessories" },
  { href: "/products?category=nets", label: "Nets" },
  { href: "/products?category=turf", label: "Turf" },
  { href: "/products", label: "View All Products" }
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const actionRef = useRef<HTMLDivElement | null>(null);
  const desktopSearchAreaRef = useRef<HTMLDivElement | null>(null);
  const desktopSearchInputRef = useRef<HTMLInputElement | null>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement | null>(null);
  const searchString = searchParams.toString();
  const currentHref = `${pathname}${searchString ? `?${searchString}` : ""}`;

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
      const target = event.target as Node;
      if (!actionRef.current?.contains(target) && !desktopSearchAreaRef.current?.contains(target)) {
        closeSearch();
        setProductMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSearch();
        setProductMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSearchOpen(false);
    setSearchOpen(false);
    setProductMenuOpen(false);
    setNavigatingTo(null);
  }, [pathname, searchString]);

  useEffect(() => {
    setSearchValue(searchParams.get("query") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (searchOpen) {
      desktopSearchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (mobileSearchOpen) {
      mobileSearchInputRef.current?.focus();
    }
  }, [mobileSearchOpen]);

  const whatsappUrl = useMemo(
    () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to know more about your products.")}`,
    []
  );

  function closeSearch() {
    setSearchOpen(false);
    setMobileSearchOpen(false);
    setSearchValue("");
  }

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = searchValue.trim();
    const nextHref = `/products${query ? `?query=${encodeURIComponent(query)}` : ""}`;
    setNavigatingTo(nextHref);
    router.push(nextHref);
    setSearchOpen(false);
    setMobileSearchOpen(false);
    setMobileOpen(false);
  }

  function navLinkClasses({
    active,
    mobile,
    pending
  }: {
    active: boolean;
    mobile?: boolean;
    pending: boolean;
  }) {
    if (mobile) {
      return `block rounded-2xl px-4 py-3 text-sm transition ${
        pending
          ? "bg-brand-500 text-black"
          : active
            ? "bg-brand-500/15 text-brand-300"
            : "text-stone-200 hover:bg-white/5 hover:text-brand-300"
      }`;
    }

    return `text-sm underline-offset-8 decoration-2 transition ${
      pending
        ? "text-brand-300 underline decoration-brand-400"
        : active
          ? "text-brand-300 underline decoration-brand-500/70"
          : "text-stone-300 decoration-transparent hover:text-brand-300"
    }`;
  }

  function isNavItemActive(item: (typeof navItems)[number]) {
    const selectedCategory = searchParams.get("category");

    if (item.href.startsWith("/products?category=")) {
      return pathname === "/products" && selectedCategory === item.href.split("category=")[1];
    }

    if (item.href === "/products") {
      return (
        pathname === "/products" &&
        !["bats", "nets", "turf"].includes(selectedCategory ?? "")
      );
    }

    if (item.href === "/") {
      return pathname === "/";
    }

    return pathname === item.href;
  }

  function renderNavLink(item: (typeof navItems)[number], mobile = false, className = "") {
    const active = isNavItemActive(item);
    const pending = navigatingTo === item.href;

    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={active ? "page" : undefined}
        aria-busy={pending ? true : undefined}
        className={`${navLinkClasses({ active, mobile, pending })} ${className}`}
        onClick={() => {
          if (!active) {
            setNavigatingTo(item.href);
          }
          setProductMenuOpen(false);
        }}
      >
        {item.label}
      </Link>
    );
  }

  function renderProductMenuLink(item: (typeof productMenuItems)[number], mobile = false) {
    const selectedCategory = searchParams.get("category");
    const active =
      item.href === "/products"
        ? pathname === "/products" && !selectedCategory
        : item.href.startsWith("/products?category=") &&
          pathname === "/products" &&
          selectedCategory === item.href.split("category=")[1];
    const pending = navigatingTo === item.href;

    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={active ? "page" : undefined}
        aria-busy={pending ? true : undefined}
        className={`flex items-center justify-between rounded-xl text-sm transition ${
          mobile
            ? `px-3 py-2.5 ${
                pending
                  ? "bg-brand-500 text-black"
                  : active
                    ? "bg-brand-500/15 text-brand-300"
                    : "text-stone-300 hover:bg-white/5 hover:text-brand-300"
              }`
            : `px-3 py-2.5 ${
                pending
                  ? "bg-brand-500 text-black"
                  : active
                    ? "bg-brand-500/15 text-brand-300"
                    : "text-stone-200 hover:bg-white/5 hover:text-brand-300"
              }`
        }`}
        role={mobile ? undefined : "menuitem"}
        onClick={() => {
          if (!active) {
            setNavigatingTo(item.href);
          }
          setProductMenuOpen(false);
          setMobileOpen(false);
        }}
      >
        <span>{item.label}</span>
        {active ? <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" /> : null}
      </Link>
    );
  }

  function renderDesktopNavItem(item: (typeof navItems)[number]) {
    if (item.href !== "/products") {
      return renderNavLink(item);
    }

    const active = isNavItemActive(item);
    const pending = navigatingTo === item.href;

    return (
      <div key={item.href} className="relative">
        <button
          type="button"
          onClick={() => setProductMenuOpen((current) => !current)}
          className={`${navLinkClasses({ active, pending })} inline-flex items-center gap-1.5`}
          aria-current={active ? "page" : undefined}
          aria-expanded={productMenuOpen}
          aria-haspopup="menu"
        >
          <span>{item.label}</span>
          <ChevronIcon open={productMenuOpen} />
        </button>

        {productMenuOpen ? (
          <div className="absolute left-1/2 top-[calc(100%+0.9rem)] z-50 w-[min(34rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-brand-500/20 bg-black/95 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.42)]" role="menu" aria-label="Product categories">
            <div className="grid gap-1 sm:grid-cols-2">
              {productMenuItems.map((productItem) => renderProductMenuLink(productItem))}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <header className={`sticky top-0 z-50 border-b border-brand-500/20 bg-black/90 transition-all duration-300 ${scrolled ? "backdrop-blur-md shadow-[0_10px_32px_rgba(0,0,0,0.32)]" : "shadow-[0_8px_24px_rgba(212,175,55,0.06)]"}`}>
      {navigatingTo ? (
        <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-brand-500/15">
          <div className="h-full w-1/2 animate-pulse bg-brand-400 shadow-[0_0_18px_rgba(212,175,55,0.65)]" />
        </div>
      ) : null}
      <div className="container-shell grid max-w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-3 py-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-5">
        <div className="flex min-w-0 items-center gap-3 justify-self-start">
          <Link href="/" className="flex items-center gap-3" onClick={() => currentHref !== "/" && setNavigatingTo("/")}>
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
            <div className={mobileSearchOpen ? "hidden sm:block" : ""}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
                {COMPANY_NAME}
              </p>
            </div>
          </Link>
        </div>

        <div ref={desktopSearchAreaRef} className="relative hidden h-11 min-w-0 items-center lg:flex">
          <nav
            className={`flex min-w-0 flex-1 items-center justify-center gap-4 transition-[opacity,transform] duration-200 xl:gap-5 2xl:gap-7 ${
              searchOpen ? "invisible pointer-events-none -translate-y-1 opacity-0" : "visible translate-y-0 opacity-100"
            }`}
            aria-hidden={searchOpen}
          >
            {navItems.map((item) => renderDesktopNavItem(item))}
          </nav>

          <form
            onSubmit={submitSearch}
            className={`absolute inset-y-0 left-0 right-0 flex min-w-0 origin-center items-center gap-3 overflow-hidden transition-[max-width,opacity,transform] duration-200 ease-out ${
              searchOpen ? "max-w-full scale-x-100 opacity-100" : "pointer-events-none max-w-0 scale-x-95 opacity-0"
            }`}
            aria-hidden={!searchOpen}
          >
            <div className="flex h-11 min-w-0 flex-1 items-center rounded-full border border-brand-500/25 bg-black/80 px-4 shadow-[0_0_18px_rgba(212,175,55,0.12)]">
              <span className="shrink-0 text-stone-300">
                <SearchIcon />
              </span>
              <input
                ref={desktopSearchInputRef}
                type="search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search bats, gloves, kits..."
                disabled={!searchOpen}
                className="ml-3 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-stone-500"
              />
            </div>
            <button
              type="button"
              onClick={closeSearch}
              tabIndex={searchOpen ? undefined : -1}
              className="flex h-11 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-brand-500/45 bg-brand-500/15 text-brand-300 shadow-[0_0_16px_rgba(212,175,55,0.14)] transition hover:border-brand-300 hover:bg-brand-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-brand-300/70 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Close search and restore navigation"
              title="Close search"
            >
              <CloseIcon />
            </button>
          </form>
        </div>

        <div className={`flex min-w-0 items-center justify-end gap-2 lg:gap-3 ${mobileSearchOpen ? "hidden lg:flex" : ""}`} ref={actionRef}>
          <div className={searchOpen ? "hidden" : "hidden min-w-0 items-center gap-2 lg:flex"}>
            <button
              type="button"
              onClick={() => {
                setSearchOpen(true);
                setProductMenuOpen(false);
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-500/20 bg-white/5 text-stone-200 transition hover:border-brand-500/35 hover:text-brand-300"
              aria-label="Open search"
              aria-expanded={searchOpen}
              title="Search products"
            >
              <SearchIcon />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileSearchOpen((current) => !current);
              setMobileOpen(false);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-500/25 bg-white/5 text-stone-100 transition hover:border-brand-500/40 hover:text-brand-300 lg:hidden"
            aria-label="Open search"
            aria-expanded={mobileSearchOpen}
            title="Search products"
          >
            <SearchIcon />
          </button>

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
            onClick={() => {
              setMobileOpen((current) => !current);
              setMobileSearchOpen(false);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-500/25 bg-white/5 text-stone-100 transition hover:border-brand-500/40 hover:text-brand-300 lg:hidden"
            aria-label="Toggle menu"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>

        <form
          onSubmit={submitSearch}
          className={`flex min-w-0 items-center gap-3 overflow-hidden transition-[max-width,opacity,transform] duration-200 ease-out lg:hidden ${
            mobileSearchOpen ? "max-w-full scale-x-100 opacity-100" : "pointer-events-none max-w-0 scale-x-95 opacity-0"
          }`}
          aria-hidden={!mobileSearchOpen}
        >
          <div className="flex h-11 min-w-0 flex-1 items-center rounded-full border border-brand-500/25 bg-black/80 px-4 shadow-[0_0_18px_rgba(212,175,55,0.12)]">
            <span className="shrink-0 text-stone-300">
              <SearchIcon />
            </span>
            <input
              ref={mobileSearchInputRef}
              type="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search bats, gloves, kits..."
              disabled={!mobileSearchOpen}
              className="ml-3 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-stone-500"
            />
          </div>
          <button
            type="button"
            onClick={closeSearch}
            tabIndex={mobileSearchOpen ? undefined : -1}
            className="flex h-11 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-brand-500/45 bg-brand-500/15 text-brand-300 shadow-[0_0_16px_rgba(212,175,55,0.14)] transition hover:border-brand-300 hover:bg-brand-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-brand-300/70 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Close search and restore navigation"
            title="Close search"
          >
            <CloseIcon />
          </button>
        </form>
      </div>

      {mobileOpen ? (
        <div className="border-t border-brand-500/15 bg-black/97 px-4 pb-5 pt-4 lg:hidden">
          <div className="container-shell space-y-4 px-0">
            <div className="space-y-2">
              {navItems.map((item) => renderNavLink(item, true))}
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






