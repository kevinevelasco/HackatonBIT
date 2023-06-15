import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './DamaCompleto.css';
import Products from '../Products/Products';

export const DamaCompleto = () => {
  return (
    <section>
        <Navbar></Navbar>
        <h1>Productos Dama Completos</h1>
      <Products genero="Dama" tipo="Deportivo"></Products>
      <Products genero="Dama" tipo="Formal"></Products>
      
      <Footer/>
       
    </section>
  )
}
