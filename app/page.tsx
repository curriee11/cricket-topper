import { BusinessHighlights } from "@/components/business-highlights";
import { CategorySection } from "@/components/category-section";
import { FeaturedProducts } from "@/components/featured-products";
import { HeroSection } from "@/components/hero-section";
import { InstitutionsPreview } from "@/components/institutions-preview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <InstitutionsPreview />
      <BusinessHighlights />
      <CategorySection />
    </>
  );
}
