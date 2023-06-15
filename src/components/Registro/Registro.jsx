import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa el componente Link desde React Router
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { dataContext } from "../Context/DataContext";
import './Registro.css'

const Registro = () => {
  const {usersData, setUsersData, setLoggedInUser} = useContext(dataContext);
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
  const [correo, setCorreo] = useState('');
  const [contra, setContra] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   const newUser = {
    nombre,
    numeroIdentificacion,
    fechaNacimiento,
    correo,
    contra,
    id: usersData.length + 1
  };
  // Guardar el usuario en el archivo JSON local
  registerUser(newUser);

  // Establecer el estado de inicio de sesión como verdadero
  setLoggedInUser(true);

  // Redireccionar al usuario a la página principal
  alert("Registro exitoso, bienvenido " + nombre);
  navigate('/'); // Redirecciona a la página principal
};

const registerUser = (userData) => {
  fetch("https://6478216f362560649a2d3d21.mockapi.io/api/users/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (response.ok) {
        // Actualizar el estado local con los nuevos datos solo si la solicitud es exitosa
        const storedUsersData = [...usersData, userData];
        setUsersData(storedUsersData);
      } else {
        throw new Error('Error al guardar los datos');
      }
    })
    .catch((error) => {
      console.error('Error al guardar los datos:', error);
    });
};

  return (
    <main className='seccion-registro'>
      <Navbar />

      <section className='Formulario-registro'>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <article className='formulario-registro-div'>
            <label>Nombre completo:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </article>
          <article className='formulario-registro-div'>
            <label>Fecha de nacimiento:</label>
            <input
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </article>
          <article className='formulario-registro-div'>
            <label>Número de identificación:</label>
            <input
              type="text"
              value={numeroIdentificacion}
              onChange={(e) => setNumeroIdentificacion(e.target.value)}
              required
            />
          </article>
          <article className='formulario-registro-div'>
            <label>Correo electrónico:</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </article>
          <article className='formulario-registro-div'>
            <label htmlFor="contra">Contraseña:</label>
            <input
              type="password"
              value={contra}
              onChange={(e) => setContra(e.target.value)}
              required
            />
          </article>
          <button type="submit">Registrar</button>
        </form>
        <p>¿Ya tienes una cuenta? <Link className="navbar-login" to={"/login"}>Login</Link></p> {/* Agrega el enlace de inicio de sesión */}
      </section>
      
    </main>
  );
};

export default Registro;
