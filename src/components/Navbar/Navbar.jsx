import React, { useState, useContext } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { dataContext } from '../Context/DataContext';

import TotalItems from '../CartContent/TotalItems';

const Navbar = () => {
  const { data, loggedInUser, setLoggedInUser } = useContext(dataContext);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cart } = useContext (dataContext);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  
  const handleSearch = () => {
    // Verificar si searchValue está vacío
    if (!searchValue) {
      setSearchResults([]);
      return;
    }

    const filteredResults = data.filter((product) => {
      const searchQuery = searchValue.toLowerCase();
      const propertiesToSearch = [product.nombre, product.genero, product.tipo, product.referencia]; 

      for (let i = 0; i < propertiesToSearch.length; i++) {
        const propertyValue = propertiesToSearch[i]; //

        if (typeof propertyValue === 'string' && propertyValue.toLowerCase().includes(searchQuery)) {
          return true;
        }
      }

      return false;
    });

    // Actualizar el estado con los resultados de búsqueda
    setSearchResults(filteredResults);
    console.log(filteredResults);
  };

  const handleLogout = () => {
    setLoggedInUser(false);

    navigate('/'); // Redirecciona a la página principal
  };
  return (
    <section className='nav-container'>
      <nav className='navbar'>
      <h1 className='navbar-logo'><Link to={"/"}>Solarte Store</Link></h1>

        <ul className="navbar-menu">
          <li>
            <Link to={"/dama-completo"}>
              <a href="#dama">Dama</a>
            </Link>
            <ul className="submenu">
              <li><Link to={"/dama-formal"}>Formal</Link></li>
              <li><Link to={"/dama-deportivo"}>Deportivo</Link></li>
            </ul>
          </li>
          <li>
            <Link to={"/caballero-completo"}>
              <a href="#caballero">Caballero</a>
            </Link>
            <ul className="submenu">
              <li><Link to={"/caballero-formal"}>Formal</Link></li>
              <li><Link to={"/caballero-deportivo"}>Deportivo</Link></li>
            </ul>
          </li>
          <li>
            <Link to={"/contacto"}>
              <a href="#contacto">Contacto</a>
            </Link>
            <ul className="submenu">
              <li><Link to={"/contacto"}>Formulario</Link></li>
            </ul>
          </li>
        </ul>
        {!loggedInUser && (
          <>
            <div className="navbar-auth">
              <Link className="navbar-login" to={"/login"}>Login</Link>
              <Link className="navbar-register" to={"/registro"}>Registro</Link>
            </div>
            <div className="navbar-search">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="search-button" onClick={handleSearch}>
                Buscar
              </button>
              {searchResults.length > 0 && (
                <ul className="search-results">
                  {searchResults.map((product) => (
                    <li key={product.id}>{product.nombre}</li>
                  ))}
                </ul>
              )}
            </div>
          </>)
        }
        {loggedInUser && (
          <>
            <button className="navbar-logout" onClick={handleLogout}>Logout</button>
            <Link className="navbar-carrito" to={"/cart"}>
              🛒
              {cart.length > 0 ? <TotalItems/> : null}
            </Link>
          </>
        )}
      </nav>
    </section>
  );
}

export default Navbar;
