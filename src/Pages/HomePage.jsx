import { CategorySection } from "../components/CategorySection/CategorySection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection/FeaturesSection";

export const HomePage = () => {
  const categories = ["audio", "gaming", "laptop"];

  return (
    <main>
      <HeroSection />
      {categories.map((category) => (
        <CategorySection
          key={category}
          category={category}
          limit={4}
          isHomePage
        />
      ))}
      <FeaturesSection />
    </main>
  );
};
