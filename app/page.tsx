import { BusinessHighlights } from "@/components/business-highlights";
import { CategorySection } from "@/components/category-section";
import { FeaturedProducts } from "@/components/featured-products";
import { HeroSection } from "@/components/hero-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <BusinessHighlights />
      <CategorySection />
    </>
  );
}
