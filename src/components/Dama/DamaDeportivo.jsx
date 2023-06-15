import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Dama.css';
import Products from '../Products/Products';

const DamaDeportivo = () => {
  return (
    <section>
      <Navbar></Navbar>
      <h1>Productos Dama Deportivos</h1>
      <Products genero="Dama" tipo="Deportivo"></Products>
    </section>
  );
};

export default DamaDeportivo;