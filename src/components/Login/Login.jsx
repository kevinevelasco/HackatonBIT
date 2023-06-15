import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa el componente Link desde React Router
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { dataContext } from "../Context/DataContext";
import './Login.css'

const Login = () => {
  const {usersData, setLoggedInUser} = useContext(dataContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = usersData.find((user) => user.correo === email && user.contra === password);

    if (user) {
      // El inicio de sesión es exitoso
      setLoggedInUser(true);
      alert("Inicio de sesión exitoso");
      navigate('/'); // Redirecciona a la página principal
    } else {
      // El inicio de sesión falla
      alert("Inicio de sesión fallido");
    }
  };

  return (
   <main className='seccion-login'>
    <Navbar/>
    
     <section className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <article className='login-container-div'>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </article>
        <article className='login-container-div'>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </article>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>No tienes una cuenta? <Link className="navbar-register" to={"/registro"}>Registrate</Link></p> 
    </section>
    
   </main>
  );
};

export default Login;
