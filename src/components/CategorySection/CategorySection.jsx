import { ProductList } from "../ProductList/ProductList";
import { Link } from "react-router-dom";
import useProductsByCategory from "../../hooks/useProductsByCategory";
import ClipLoader from "react-spinners/ClipLoader";

export const CategorySection = ({
  isHomePage = false,
  category,
  title = "",
  limit = 4,
}) => {
  const { products, loading, error } = useProductsByCategory(category, limit);

  if (error) return <div>Error: {error.message}</div>;

  return loading ? (
    <div className="flex justify-center items-center h-96">
      <ClipLoader color="#000000" loading={loading} />
    </div>
  ) : (
    <section className="max-w-7xl mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-6 first-letter:uppercase">
          {title ? title : category}
        </h2>
        {isHomePage ? (
          <Link
            to={`/${category}`}
            className="px-4 py-2 rounded border hover:bg-gray-100 border-gray-200"
          >
            See All
          </Link>
        ) : null}
      </div>
      <ProductList products={products} />
    </section>
  );
};
