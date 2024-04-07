import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from './../pages/Home';
import Products from './../pages/Products';
import Cart from './../pages/Cart';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
     
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);