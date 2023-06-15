import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
  const { cart } = useContext(dataContext);

  const itemsQuanty = cart.reduce((acc,el) => acc + el.cantidad, 0);
  return <span className="cartItemsTotal">{itemsQuanty}</span>;   
};

export default TotalItems