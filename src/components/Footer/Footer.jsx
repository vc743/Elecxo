import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Link
            to="/"
            className="text-lg font-bold -tracking-wider mb-4 text-white"
          >
            Elecxo
          </Link>
          <p className="text-gray-400 mb-4">
            Your trusted online store with the best products and prices on the
            market.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Information</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
