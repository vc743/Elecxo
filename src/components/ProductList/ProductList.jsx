import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Product } from "../Product/Product";

export const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-2">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={() =>
            addToCart(product)
          }
        />
      ))}
    </div>
  );
};
