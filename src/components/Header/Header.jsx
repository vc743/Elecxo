import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {
  TbShoppingCart,
  TbDeviceTv,
  TbHeadphones,
  TbDeviceMobile,
  TbDeviceLaptop,
  TbDeviceGamepad,
  TbSofa,
  TbMenu2,
  TbX,
} from "react-icons/tb";

export const Header = () => {
  const { cartCount } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { category: "tv", icon: <TbDeviceTv size={20} /> },
    { category: "audio", icon: <TbHeadphones size={20} /> },
    { category: "laptop", icon: <TbDeviceLaptop size={20} /> },
    { category: "mobile", icon: <TbDeviceMobile size={20} /> },
    { category: "gaming", icon: <TbDeviceGamepad size={20} /> },
    { category: "appliances", icon: <TbSofa size={20} /> },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white px-4 shadow-sm">
        <nav className="flex flex-wrap justify-between items-center gap-3 md:gap-3 mx-auto max-w-7xl border-b py-2">
          <Link
            to="/"
            className="text-2xl text-gray-800 font-bold -tracking-wider"
          >
            <span className="text-[#58A0E2]">Elec</span>xo
          </Link>
          <div className="flex gap-2">
            <Link
              to="cart"
              className="p-3 hover:bg-gray-100 rounded-full focus:ring-4 focus:ring-gray-300 focus:outline-none relative transition-colors duration-200"
            >
              <TbShoppingCart size={20} />
              {cartCount === 0 ? null : (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    duration: 0.5,
                    scale: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    },
                    rotate: {
                      duration: 0.3
                    }
                  }}
                  className="flex justify-center items-center absolute font-semibold text-xs text-white h-4 w-4 bg-[#58A0E2] rounded-full top-0 right-0 transform translate-x-1 -translate-y-1"
                >
                  {cartCount}
                </motion.div>
              )}
            </Link>
            <button
              className="transition-colors duration-200 p-3 hover:bg-gray-100 rounded-full focus:ring-4 focus:ring-gray-300 focus:outline-none md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <TbX size={20} /> : <TbMenu2 size={20} />}
            </button>
          </div>
        </nav>

        {/* Category Bar */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="grid grid-cols-3 gap-3 py-4">
                {categories.map(({ category, icon }) => (
                  <NavLink
                    key={category}
                    to={category}
                    className={({ isActive }) =>
                      `flex flex-col items-center px-4 py-2 transition-colors duration-200 rounded 
                      border hover:bg-gray-100 hover:border-gray-200 ${
                        isActive ? " bg-gray-100 border border-gray-200" : ""
                      }`
                    }
                  >
                    <span>{icon}</span>
                    <span className="text-sm font-medium first-letter:uppercase">
                      {category}
                    </span>
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Category Bar */}
        <div className="hidden md:block max-w-xl mx-auto py-4">
          <div className="grid grid-cols-6 gap-3">
            {categories.map(({ category, icon }) => (
              <NavLink
                key={category}
                to={category}
                className={({ isActive }) =>
                  `flex flex-col items-center px-4 py-2 transition-colors duration-200 rounded 
                  hover:bg-gray-100 ${
                    isActive ? " bg-gray-100" : ""
                  }`
                }
              >
                <span>{icon}</span>
                <span className="text-sm font-medium first-letter:uppercase">
                  {category}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};
