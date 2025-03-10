import { useState, useEffect } from "react";

const useProductsByCategory = (category, limit = 4) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.in/api/products/category?type=${category}&limit=${limit}`
        );
        const { products } = await response.json();
        setProducts(products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, limit]);

  return {products, loading, error}
};

export default useProductsByCategory;