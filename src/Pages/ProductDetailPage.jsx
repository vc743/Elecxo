import { CategorySection } from "../components/CategorySection/CategorySection";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ClipLoader from "react-spinners/ClipLoader";
import {
  TbShoppingCartPlus,
  TbTruckDelivery,
  TbShield,
  TbTruckReturn,
  TbShare,
} from "react-icons/tb";
import useProductById from "../hooks/useProductById";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductById(id);
  const { addToCart } = useContext(CartContext);

  if (error) return <div>Error: {error.message}</div>;

  return loading ? (
    <div className="flex justify-center items-center h-96">
      <ClipLoader color="#000000" loading={loading} />
    </div>
  ) : (
    <main>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-6">
          <div>
            <img
              className="shadow rounded-lg"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <p to={product.category} className=" first-letter:uppercase">
                {product.category}
              </p>
              <span>•</span>
              <p className="first-letter:uppercase">{product.brand}</p>
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-3xl mb-4">${product.price}</p>
            <div className="shrink-0 bg-gray-200 h-[1px] w-full my-6"></div>
            <h3 className="font-medium mb-2">Model</h3>
            <p className="text-gray-500 mb-4">{product.model}</p>
            <h3 className="font-medium mb-2">Color</h3>
            <p className="text-gray-500 first-letter:uppercase mb-4">
              {product.color}
            </p>
            <div className="flex gap-4 mb-4">
              <button
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-black text-white text-sm rounded-md transition-colors duration-200 hover:bg-black/85"
                onClick={() => addToCart(product)}
              >
                <TbShoppingCartPlus size={20} /> Add to cart
              </button>
              <button className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 text-sm rounded-md transition-colors duration-200 hover:bg-gray-200">
                Buy Now
              </button>
            </div>
            <div className="bg-gray-100 rounded-md p-4 text-sm space-y-4 mb-4">
              <div className="flex items-start gap-3">
                <TbTruckDelivery size={25} />
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-gray-500">
                    Estimated delivery: 3-5 business days
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TbShield size={25} />
                <div>
                  <h4 className="font-medium">2-year warranty</h4>
                  <p className="text-sm text-gray-500">
                    Full coverage against manufacturing defects
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TbTruckReturn size={25} />
                <div>
                  <h4 className="font-medium">Free returns</h4>
                  <p className="text-sm text-gray-500">
                    30 days for returns at no additional cost
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-gray-500 text-sm">Share:</p>
              <button className="p-3 hover:bg-gray-100 rounded-full focus:ring-4 focus:ring-gray-300 focus:outline-none transition-colors duration-200">
                <TbShare size={15} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-500 mb-4">{product.description}</p>
        </div>
      </section>
      <CategorySection
        category={product.category}
        limit={4}
        title="Related products"
        isHomePage={true}
      />
    </main>
  );
};
