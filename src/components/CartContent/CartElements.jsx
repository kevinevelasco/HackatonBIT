import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
const { cart , setCart } = useContext(dataContext);

const deleteProduct = (id) => {
  const foundId = cart.find((element) => element.id === id);

  const newCart = cart.filter((element) => {
    return element !== foundId;
  });
  
  setCart(newCart);
};

  return cart.map ((product) => {
    return (
      <div className="cartContent" key={product.id}>
        <img src={product.img} alt="productCard"/>
        <h3 className="name">{product.nombre}</h3>
        <CartItemCounter producto = {product}/>
        <h4 className="price">$ {product.precio * product.cantidad}</h4>
        <h3 className = "cartDeleteButton" onClick={() => deleteProduct(product.id)}> ❌ </h3>
      </div>
    )
  });
};

export default CartElements;