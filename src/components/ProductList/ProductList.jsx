import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Product } from "../Product/Product";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-2"
    >
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </motion.div>
  );
};
