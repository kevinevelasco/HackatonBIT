import React from 'react'
import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { dataContext } from "../Context/DataContext";

import CartElements from './CartElements';
import CartTotal from './CartTotal';

import "./CartContent.css"

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
    <>
    <Navbar/>
   
    <CartElements />
    <CartTotal />
  </>  
  ): (
    <section>
      <Navbar/>
    
    <h2 className='cartEmptyMess'>No hay productos en el carrito</h2>
    
    </section>
  ) 
};

export default CartContent;