import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { TbShoppingCartPlus } from "react-icons/tb";

export const Product = ({ product, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border hover:shadow-lg rounded-lg transition-all duration-200"
    >
      <div className="w-full overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            className="w-full h-full object-contain cursor-pointer rounded-lg hover:scale-105 transition duration-300 aspect-square"
            loading="lazy"
            src={product.image}
            alt={product.title}
          />
        </Link>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1 first-letter:uppercase">{product.category}</p>
        <h3 className="font-medium truncate mb-1">{product.title}</h3>
        <div className="flex justify-between items-center">
          <p className="font-bold ">${product.price}</p>
          <button
            className="p-3 hover:bg-gray-100 rounded-full"
            onClick={onAddToCart}
          >
            <TbShoppingCartPlus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
