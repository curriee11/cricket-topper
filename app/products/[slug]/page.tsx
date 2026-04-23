import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MobileLeadBar } from "@/components/mobile-lead-bar";
import { ProductCard } from "@/components/product-card";
import { ProductGallery } from "@/components/product-gallery";
import { DISPLAY_PHONE, PHONE_NUMBER } from "@/lib/constants";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { buildWhatsAppLink, getDisplayPrice, titleCase } from "@/lib/utils";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug
  }));
}

export function generateMetadata({ params }: ProductDetailPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found"
    };
  }

  return {
    title: product.name,
    description: product.shortDescription
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, product.category).slice(0, 3);
  const whatsappLink = buildWhatsAppLink(product.name);

  return (
    <>
      <section className="relative overflow-hidden bg-black pb-28 pt-10 sm:pb-20 sm:pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(29,59,114,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(10,31,68,0.24),transparent_30%)]" />
        <div className="container-shell relative">
          <Link href="/products" className="text-sm text-stone-300 transition hover:text-brand-300">
            Back to catalogue
          </Link>

          <div className="mt-6 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <ProductGallery images={product.images} name={product.name} />

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
                  {titleCase(product.category)}
                </p>
                <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-lg text-stone-300">{product.tagline}</p>
              </div>

              <div className="surface-strong rounded-[28px] p-6 shadow-glow">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-stone-400">Catalogue Price</p>
                    <p className="mt-2 text-3xl font-semibold text-brand-600">
                      {getDisplayPrice(product)}
                    </p>
                  </div>
                  <div className="rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-2 text-sm text-brand-300">
                    Fast enquiry response
                  </div>
                </div>

                <p className="mt-5 text-base leading-7 text-stone-300">{product.description}</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-brand-400"
                  >
                    Call Now
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-brand-500/30 bg-transparent px-6 py-3 text-center text-sm font-semibold text-brand-300 transition hover:bg-brand-500/10"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
                <p className="mt-3 text-sm text-stone-400">
                  Talk to our team on {DISPLAY_PHONE} for stock, sizes, and bulk orders.
                </p>
              </div>

              <div className="surface-strong rounded-[28px] p-6 shadow-glow">
                <h2 className="text-xl font-semibold text-white">Specifications</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {product.specifications.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-brand-500/15 bg-black/35 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-stone-300">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 ? (
            <div className="mt-16">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
                    Similar Picks
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">You may also like</h2>
                </div>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <MobileLeadBar productName={product.name} />
    </>
  );
}

