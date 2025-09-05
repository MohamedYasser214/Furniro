import "./App.css";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Favorites from "./Components/Favorites/Favorites"; 

import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { FavoritesProvider } from "./context/FavoritesContext"; 
import Search from "./Components/Search/Search";
import Checkout from "./Components/Checkout/Checkout";
import Register from "./Components/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "product/:id", element: <SingleProduct /> },
        { path: "cart", element: <Cart /> },
        {path:"checkout" , element:<Checkout/>},
        { path: "favorites", element: <Favorites /> }, 
        { path: "contact", element: <Contact /> },
        {path:'search' , element:<Search/>},
        { path: "about", element: <About /> },
        {path:'register' , element:<Register/>},
        { path: "*", element: <NotFound /> },
        
      ],
    },
  ]);

  return (
    <FavoritesProvider>
      <ProductsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductsProvider>
    </FavoritesProvider>
  );
}

export default App;
