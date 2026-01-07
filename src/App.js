import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";

const AppLayout = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="max-w-300 mx-auto px-6 pb-8">
      {/* Online Status Indicator */}
      <div className="fixed top-4 right-4 z-50">
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg ${
          isOnline 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            isOnline ? 'bg-white' : 'bg-white animate-pulse'
          }`} />
          <span className="text-sm font-semibold">
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
