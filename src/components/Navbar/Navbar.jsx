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
  const { cart } = useContext(dataContext);

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
        <h1 className='navbar-logo'>
          <Link to={"/"}>
            <span className="logo-text">MedAnalysis</span>
            <img src="/assets/logo.png" alt="logo" />
          </Link></h1>

        <ul className="navbar-menu">
          <li>
            <Link to={'/'}>
              <a href="#dama">Inicio</a>
            </Link>
          </li>
          <li>
            {loggedInUser && (
              <Link to={"/Dashboard"}>
                <a href="#caballero">Dashboard</a>
              </Link>
            )}
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
                  {searchResults
                    .filter((product, index, self) => {
                      // Devuelve true solo si el nombre del producto no se encuentra en ningún otro elemento anterior
                      return (
                        self.findIndex((p) => p.nombre === product.nombre) === index
                      );
                    })
                    .map((product) => (
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
            {/*   <Link className="navbar-carrito" to={"/cart"}>
              🛒
              {cart.length > 0 ? <TotalItems /> : null}
            </Link>*/}
          </>
        )}
      </nav>
    </section>
  );
}

export default Navbar;
