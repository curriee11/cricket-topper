import ballsData from "@/data/products/balls.json";
import batsData from "@/data/products/bats.json";
import glovesData from "@/data/products/gloves.json";
import guardsData from "@/data/products/guards.json";
import helmetsData from "@/data/products/helmets.json";
import kitsData from "@/data/products/kits.json";
import netsData from "@/data/products/nets.json";
import padsData from "@/data/products/pads.json";
import turfData from "@/data/products/turf.json";
import type { Product, ProductCategory } from "@/lib/types";

const accessoryCategories: ProductCategory[] = ["gloves", "pads", "kits", "helmets", "guards"];

export const products = [
  ...batsData,
  ...glovesData,
  ...helmetsData,
  ...guardsData,
  ...padsData,
  ...kitsData,
  ...netsData,
  ...turfData,
  ...ballsData
] as Product[];

export const categories: {
  id: ProductCategory;
  name: string;
  description: string;
}[] = [
  {
    id: "bats",
    name: "Bats",
    description: "English and Kashmir willow options with confident pickup."
  },
  {
    id: "gloves",
    name: "Gloves",
    description: "Premium batting and keeping gloves built for comfort and control."
  },
  {
    id: "pads",
    name: "Pads",
    description: "Protective batting pads built for comfort, balance, and match confidence."
  },
  {
    id: "kits",
    name: "Kits",
    description: "Complete bundles for academy players, clubs, and touring squads."
  },
  {
    id: "helmets",
    name: "Helmets",
    description: "Cricket helmets built for dependable head protection and match confidence."
  },
  {
    id: "guards",
    name: "Guards",
    description: "Essential cricket guards for comfortable protection during every session."
  },
  {
    id: "nets",
    name: "Nets",
    description: "Cricket practice and facility net solutions for training spaces."
  },
  {
    id: "turf",
    name: "Turf & Pitch",
    description: "Astro turf, cricket pitch rolls, and artificial grass surfaces."
  },
  {
    id: "balls",
    name: "Leather Balls",
    description: "Match and practice leather cricket balls with durable seam finish."
  }
];

export function getAllProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(currentSlug: string, category: ProductCategory) {
  return products.filter(
    (product) => product.slug !== currentSlug && product.category === category
  );
}

export function filterProducts({
  category,
  maxPrice,
  query
}: {
  category?: string;
  maxPrice?: number;
  query?: string;
}) {
  const normalizedQuery = query?.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory =
      !category ||
      category === "all" ||
      (category === "accessories"
        ? accessoryCategories.includes(product.category)
        : product.category === category);
    const matchesPrice = !maxPrice || product.price <= maxPrice;
    const matchesQuery =
      !normalizedQuery ||
      [product.name, product.shortDescription, product.description, product.category]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesCategory && matchesPrice && matchesQuery;
  });
}
