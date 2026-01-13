import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



const Grocery = lazy(()=>import('./components/Grocery'))
const About = lazy(() => import("./components/About"))
const Contact = lazy(()=>import('./components/Contact'));
const Cart = lazy(()=>import('./components/Cart'))
const RestaurantMenu = lazy(()=>import('./components/RestaurantMenu'))

const AppLayout = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const[userInfo,setuserInfo] = useState()

  useEffect(() => {
    const data = {
      name:""
    }
    setuserInfo(data.name)
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
  
   <UserContext.Provider value={{loggedInUser:userInfo , setuserInfo}}>
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
   </UserContext.Provider>
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
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Suspense fallback={<Shimmer/>}> <Contact /> </Suspense>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path: "/cart",
        element: <Suspense fallback={<Shimmer/>}> <Cart/> </Suspense>
      },
      {
        path: "/restaurant/:resId",
        element: <Suspense fallback={<Shimmer/>} > <RestaurantMenu/> </Suspense>
      },
    ],
  },
]);


const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
