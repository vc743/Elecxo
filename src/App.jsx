import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";
import { Layout } from "./Layout";
import { HomePage } from "./Pages/HomePage";
import { CartPage } from "./Pages/CartPage";
import { ProductsByCategoryPage } from "./Pages/ProductsByCategoryPage";
import { ProductDetailPage } from "./Pages/ProductDetailPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="/:category" element={<ProductsByCategoryPage />}/>
      <Route path="/product/:id" element={<ProductDetailPage />}/>
    </Route>
  ),
  {
    basename: "/Elecxo",
  }
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
