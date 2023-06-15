import React from "react";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const handleBuy = () => {
    alert("Gracias por tu compra!");
  };

  return (
    <div className="cartTotal">
      <h3>Total a pagar: $ {total}</h3>
      <button onClick={handleBuy}>Comprar</button>
    </div>
  );
};

export default CartTotal;
