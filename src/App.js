import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {Shimmer} from "./components/Shimmer";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery"))

const About = lazy(()=>import("./components/About"))


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* if path is /  */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (<Suspense fallback={<Shimmer/>}><About /></Suspense>),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
       {
        path: "/Grocery",
        element:(
          <Suspense fallback={<Shimmer></Shimmer>}><Grocery/></Suspense>
        )
      },
      {
        path:"/restaurentmenu/:resId",
        element:<RestaurantMenu/>
      }
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
