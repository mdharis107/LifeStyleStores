import React from "react";
import { Route, Routes } from "react-router-dom";
import WomensProducts from "../Pages/Womens/WomensProducts";
import MensProducts from "../Pages/Mens/MensProducts";
import KidsProducts from "../Pages/Kids/KidsProducts";
import ShoesBagsProducts from "../Pages/Shoes&Bags/ShoesBagsProducts";
import Beauty from "../Pages/Beauty/Beauty";
import SingleProduct from "../Pages/SingleProduct";
import { WomenHomePage } from "../Pages/WomensHome/WomenHomePage";
import { MenHomePage } from "../Pages/MensHomePage/MensHomePage";
import { KidsHomePage } from "../Pages/KidsHome/KidsHomePage";
import { ShoesHomePage } from "../Pages/ShoesHome/ShoesHomePage";
import { BeautyHomePage } from "../Pages/BeautyHome/BeautyHomePage";
import Cart from "../Pages/Cart/Cart";
import { Checkout } from "../Pages/Checkout/Checkout";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WomenHomePage />} />
        <Route path="/mens" element={<MenHomePage />} />
        <Route path="/kids" element={<KidsHomePage />} />
        <Route path="/shoes & bags" element={<ShoesHomePage />} />
        <Route path="/beauty" element={<BeautyHomePage />} />
        <Route path="/womens/products" element={<WomensProducts />} />
        <Route path="/mens/products" element={<MensProducts />} />
        <Route path="/kids/products" element={<KidsProducts />} />
        <Route path="/shoes & bags/products" element={<ShoesBagsProducts />} />
        <Route path="/beauty/products" element={<Beauty />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
