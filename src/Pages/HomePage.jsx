import { CategorySection } from "../components/CategorySection/CategorySection";

export const HomePage = () => {

  const categories = ["audio", "gaming", "laptop"];

  return (
    <main>
      {
        categories.map(category => (
          <CategorySection key={category} category={category} limit={4} isHomePage/>
        ))
      }
    </main>
  );
};
