import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ producto }) => {
  const { cart, setCart, buyProducts } = useContext(dataContext);

  const decrese = () => {
    const productRepeat = cart.find((item) => item.id === producto.id);

    productRepeat.cantidad !== 1 &&
      setCart(cart.map((item) => (item.id === producto.id ? {...producto, cantidad: productRepeat.cantidad - 1} : item )));
  };
  return (
    <>
    <p className='counterButton' onClick={decrese}> - </p>
    <p> {producto.cantidad} </p>
    <p className='counterButtonPlus' onClick={() => buyProducts(producto)}> + </p>
    </>
  )
}

export default CartItemCounter