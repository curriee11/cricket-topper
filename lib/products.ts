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
const identitySpecificationLabels = new Set([
  "brand",
  "grade",
  "make",
  "model",
  "net type",
  "quality",
  "type",
  "use",
  "willow",
  "wood"
]);

const categorySearchTerms: Record<ProductCategory, string[]> = {
  bats: ["bat", "bats", "cricket bat", "cricket bats"],
  gloves: ["glove", "gloves", "cricket glove", "cricket gloves"],
  pads: ["pad", "pads", "batting pad", "batting pads", "cricket pad", "cricket pads"],
  kits: ["kit", "kits", "kit bag", "kit bags", "cricket kit", "cricket kits"],
  helmets: ["helmet", "helmets", "cricket helmet", "cricket helmets"],
  guards: ["guard", "guards", "arm guard", "abdominal guard", "cricket guard", "cricket guards"],
  nets: ["net", "nets", "cricket net", "cricket nets"],
  turf: ["turf", "pitch", "grass", "artificial grass", "cricket pitch"],
  balls: ["ball", "balls", "leather ball", "leather balls", "cricket ball", "cricket balls"]
};

function normalizeToken(token: string) {
  const normalized = token.toLowerCase();

  if (normalized.length > 4 && normalized.endsWith("ies")) {
    return `${normalized.slice(0, -3)}y`;
  }

  if (normalized.length > 3 && normalized.endsWith("s") && !normalized.endsWith("ss")) {
    return normalized.slice(0, -1);
  }

  return normalized;
}

function tokenize(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .match(/[a-z0-9]+/g)
    ?.map(normalizeToken) ?? [];
}

function normalizePhrase(value: string) {
  return tokenize(value).join(" ");
}

function getProductIdentityTerms(product: Product) {
  const identityTerms = [
    product.name,
    product.slug.replace(/-/g, " "),
    product.category,
    ...categorySearchTerms[product.category]
  ];

  if (accessoryCategories.includes(product.category)) {
    identityTerms.push("accessory", "accessories");
  }

  product.specifications.forEach((specification) => {
    if (identitySpecificationLabels.has(specification.label.toLowerCase())) {
      identityTerms.push(specification.value);
    }
  });

  return identityTerms;
}

function productMatchesQuery(product: Product, query: string) {
  const queryTokens = tokenize(query);

  if (queryTokens.length === 0) {
    return true;
  }

  const identityTerms = getProductIdentityTerms(product);
  const searchableTokens = new Set(identityTerms.flatMap(tokenize));
  const searchablePhrases = new Set(identityTerms.map(normalizePhrase).filter(Boolean));
  const queryPhrase = queryTokens.join(" ");

  return (
    searchablePhrases.has(queryPhrase) ||
    queryTokens.every((queryToken) => searchableTokens.has(queryToken))
  );
}

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

export function getPopularProductGroups() {
  return [
    {
      id: "bats",
      title: "Popular Cricket Bats",
      description: "Explore our popular leather-ball and tennis-ball cricket bats.",
      products: products
        .filter((product) => product.category === "bats")
        .filter((product) => product.featured || product.price <= 3999)
        .slice(0, 8)
    },
    {
      id: "nets",
      title: "Popular Cricket Nets",
      description: "Practice net solutions for academies, clubs, schools, and grounds.",
      products: products.filter((product) => product.category === "nets")
    },
    {
      id: "turf",
      title: "Popular Turf & Pitch",
      description: "Artificial grass and pitch surface products for training spaces.",
      products: products.filter((product) => product.category === "turf")
    }
  ];
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
  const normalizedQuery = query?.trim();

  return products.filter((product) => {
    const matchesCategory =
      !category ||
      category === "all" ||
      (category === "accessories"
        ? accessoryCategories.includes(product.category)
        : product.category === category);
    const matchesPrice = !maxPrice || product.price <= maxPrice;
    const matchesQuery =
      !normalizedQuery || productMatchesQuery(product, normalizedQuery);

    return matchesCategory && matchesPrice && matchesQuery;
  });
}
