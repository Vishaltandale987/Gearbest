import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Cart from "../page/cart";
import Payment from "../page/Payment";
import Super_Deals from "../page/Super_Deals";
import Wishlist from "../page/Wishlist";
import App_only from "../page/App_only";
import OderPlace from "../page/OderPlace";
import PrivateRout from "./PrivateRout";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/apponly"
          element={
            <PrivateRout>
              <App_only />
            </PrivateRout>
          }
        ></Route>

        <Route path="/cart" element={
          <PrivateRout>
          <Cart />
            </PrivateRout>
        }></Route>

        <Route path="/" element={
          <Home /> 
        
        
        }></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/payment" element={
        <PrivateRout>
        <Payment />
        </PrivateRout>
        
        }></Route>

        <Route path="/superdeals" element={
        <PrivateRout>
        <Super_Deals />
        </PrivateRout>
        }></Route>

        <Route path="/wishlist" element={
        <PrivateRout>
        <Wishlist />
        </PrivateRout>
        }></Route>

        <Route path="/oderplace" element={
        <PrivateRout>
        <OderPlace />
        </PrivateRout>
        }></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
