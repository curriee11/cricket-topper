import { BusinessHighlights } from "@/components/business-highlights";
import { CategorySection } from "@/components/category-section";
import { HeroSection } from "@/components/hero-section";
import { InstitutionsPreview } from "@/components/institutions-preview";
import { PopularCarousel } from "@/components/popular-carousel";
import { getPopularProductGroups } from "@/lib/products";

export default function HomePage() {
  const popularGroups = getPopularProductGroups();

  return (
    <>
      <HeroSection />
      <PopularCarousel groups={popularGroups} />
      <InstitutionsPreview />
      <BusinessHighlights />
      <CategorySection />
    </>
  );
}
