import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://crickettopper.example.com";
  const productEntries = getAllProducts().map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date()
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date()
    },
    ...productEntries
  ];
}
