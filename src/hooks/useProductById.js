import { useEffect, useState } from "react";

const useProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.in/api/products/${id}`
        );
        const { product } = await response.json();
        console.log(product);
        setProduct(product);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};

export default useProductById;
