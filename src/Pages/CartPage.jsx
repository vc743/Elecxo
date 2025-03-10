import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { TbTrash, TbArrowLeft } from "react-icons/tb";
import { CategorySection } from "../components/CategorySection/CategorySection";

export const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } =
    useContext(CartContext);

  return (
    <>
      {cartItems.length === 0 ? (
        <main className="flex items-center justify-center h-screen">
          <section>
            <h1 className="text-4xl font-bold">Your Cart is Empty</h1>
            <div className="p-4 flex items-center justify-center">
              <Link
                to="/"
                className="flex items-center justify-center text-sm font-medium border rounded-md px-4 py-3 hover:bg-gray-200"
              >
                <TbArrowLeft size={20} />
                <span>Continue shopping</span>
              </Link>
            </div>
          </section>
        </main>
      ) : (
        <main>
          <section className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <div className="rounded-md border overflow-hidden">
                  <div className="p-4 border-b bg-gray-100">
                    <div className="grid grid-cols-12 gap-4">
                      <p className="col-span-6 font-medium">Product</p>
                      <p className="col-span-2 text-center font-medium">
                        Price
                      </p>
                      <p className="col-span-2 text-center font-medium">
                        Quantity
                      </p>
                      <p className="col-span-2 text-center font-medium">
                        Total
                      </p>
                    </div>
                  </div>
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 border-b">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-6">
                          <div className="flex gap-3">
                            <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                              <img src={item.image} alt={item.title} />
                            </div>
                            <div>
                              <h3 className="font-medium line-clamp-2">
                                {item.title}
                              </h3>
                              <div className="text-sm text-gray-500 mt-1">
                                <p>Color: {item.color}</p>
                                <p>Model: {item.model}</p>
                              </div>
                              <button
                                className="text-sm text-red-500 hover:text-red-700 mt-2 flex items-center gap-1"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <TbTrash size={15} /> <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium">${item.price}</p>
                        </div>
                        <div className="col-span-2">
                          <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value))
                            }
                          />
                        </div>
                        <div className="col-span-2 text-right font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-4 flex items-center justify-start">
                    <Link
                      to="/"
                      className="flex items-center justify-center text-sm font-medium border rounded-md px-4 py-3 hover:bg-gray-200"
                    >
                      <TbArrowLeft size={20} />
                      <span>Continue shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="rounded-md border overflow-hidden sticky top-24">
                  <div className="p-4 border-b bg-gray-100">
                    <h2 className="font-bold text-lg">Summary</h2>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Subtotal</span>
                        <span className="font-medium">
                          {getCartTotal().toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Shipping</span>
                        <span className="font-medium text-green-600">free</span>
                      </div>
                      <div className="shrink-0 bg-border h-[1px] w-full"></div>
                      <div className="flex justify-between text-lg">
                        <span className="font-bold">Total</span>
                        <span className="font-bold">
                          {getCartTotal().toFixed(2)}
                        </span>
                      </div>
                      <button className="bg-black text-white text-sm font-medium rounded-md px-4 py-3 w-full mt-6">
                        Proceder al pago
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <CategorySection category="gaming" title="You may also like" isHomePage/>
        </main>
      )}
    </>
  );
};
