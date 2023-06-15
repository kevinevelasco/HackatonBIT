import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link, useNavigate } from 'react-router-dom';
import './Products.css'

const Products = ({ tipo, genero, limit}) => {
  const { data, buyProducts } = useContext(dataContext);
  const { loggedInUser } = useContext(dataContext); 

  const filteredProducts = data.filter((product) => product.tipo === tipo && product.genero === genero);

  const limitedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;


  return (
    <div className="productCardContainer">
      {limitedProducts.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.img} alt="img-product" />
          <h3>{product.nombre}</h3>
          <Link to={"/dashboard"}>
          <button onClick={() => buyProducts(product)}>Ver más</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Products;
