export type ProductCategory = "bats" | "gloves" | "kits" | "nets" | "turf" | "balls";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  tagline: string;
  shortDescription: string;
  description: string;
  featured: boolean;
  images: string[];
  specifications: {
    label: string;
    value: string;
  }[];
};
