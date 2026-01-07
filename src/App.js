import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="max-w-300 mx-auto px-6 pb-8">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
      </Routes>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);
