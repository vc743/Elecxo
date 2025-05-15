import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";

export const Product = ({ product, onAddToCart }) => {
  return (
    <article
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
          <Button variant="ghost" iconLeft={<TbShoppingCartPlus size={20} />} onClick={onAddToCart}></Button>
        </div>
      </div>
    </article>
  );
};
