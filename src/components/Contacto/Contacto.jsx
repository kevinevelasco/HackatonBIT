import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Contacto.css'

const Contacto = () => {
  return (
    <main className='seccion-contacto'>
      <Navbar/>
     <h2>Contacto</h2>
      <form>
        <fieldset>
          <legend>Información de contacto</legend>
          <label>
            Nombre:
            <input type="text" name="nombre" required />
          </label>
          <label>
            Correo electrónico:
            <input type="email" name="correo" required />
          </label>
          <label>
            Asunto:
            <input type="text" name="asunto" required />
          </label>
          <label>
            Mensaje:
            <textarea name="mensaje" rows="4" required></textarea>
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
     
    
    </main>
    
  );
}

export default Contacto;