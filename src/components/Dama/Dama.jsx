import React from 'react';
import './Dama.css';
import { Link } from 'react-router-dom';

export const Dama = () => {
  return (
    <main className="dama-section">
      <section className='dama-section-1'>
      <article className="image-container">
          <Link to= {"/dama-completo"}>
            <img src="/assets/dama.jpeg" alt="Imagen-1" id='imagen-1' title='Catálogo para Dama'/>
            <button>Ir a Dama Deportivo</button>
            <p>SECCIÓN DAMA</p>
          </Link>
        </article>
      </section>
      <section className='dama-section-2'>
      <article className="image-container">
          <Link to= {"/dama-deportivo"}>
            <img src="/assets/deportivo-dama.jpeg" alt="Imagen-3" id='imagen-3' title='Calzado Deportivo para Dama'/>
            <button>Ir a Dama Deportivo</button>
            <p className='parrafo'>SECCIÓN DEPORTIVA</p>
          </Link>
        </article>
        <article className="image-container">
          <Link to= {"/dama-formal"}>
            <img src="/assets/formal-dama.jpeg" alt="Imagen-3" id='imagen-3' title='Calzado Formal para Dama'/>
            <button>Ir a Dama Formal</button>
            <p className='parrafo'>SECCIÓN FORMAL</p>
          </Link>
        </article>
        
      </section>
    </main>
  );
}
