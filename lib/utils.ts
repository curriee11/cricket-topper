import type { Product } from "@/lib/types";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

export function getDisplayPrice(product: Pick<Product, "price" | "displayPrice">) {
  return product.displayPrice ?? formatCurrency(product.price);
}

export function buildWhatsAppLink(productName: string) {
  const message = `Hi, I'm interested in the ${productName}. Please share more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function titleCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
