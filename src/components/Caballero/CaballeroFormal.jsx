import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Caballero.css';
import Products from '../Products/Products';

const CaballeroFormal = () => {
  return (
    <section>
      <main className='seccion-caballero-formal'>
      <Navbar/>
    
      <h1>Productos Caballero Formal </h1>
       <Products genero="Caballero" tipo="Formal"></Products>
       
    </main>
    </section>
  )
}

export default CaballeroFormal