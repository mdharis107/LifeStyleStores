import React from 'react';
import { Route,Routes } from 'react-router-dom';
import WomensProducts from "../Pages/Womens/WomensProducts";
import MensProducts from "../Pages/Mens/MensProducts";
import KidsProducts from "../Pages/Kids/KidsProducts";
import ShoesBagsProducts from '../Pages/Shoes&Bags/ShoesBagsProducts';
import Beauty from "../Pages/Beauty/Beauty";
import SingleProduct from "../Pages/SingleProduct";

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<WomensProducts/>} />
            <Route path='/mens/products' element={<MensProducts/>}/>
            <Route path='/kids/products' element={<KidsProducts/>}/>
            <Route path='/shoes & bags/products' element={<ShoesBagsProducts/>}/>
            <Route path='/beauty/products' element={<Beauty/>}/>
            <Route path='/SingleProduct' element={<SingleProduct/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes