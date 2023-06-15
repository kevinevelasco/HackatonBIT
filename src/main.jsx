import React from 'react'
import ReactDOM from 'react-dom/client'
import DataProvider from './components/Context/DataContext'
import CartContent from './components/CartContent/CartContent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home'
import { Dama } from './components/Dama/Dama';
import DamaDeportivo from './components/Dama/DamaDeportivo';
import DamaFormal from './components/Dama/DamaFormal';
import Caballero from './components/Caballero/Caballero';
import CaballeroDeportivo from './components/Caballero/CaballeroDeportivo';
import CaballeroFormal from './components/Caballero/CaballeroFormal';
import Registro from './components/Registro/Registro';
import Login from './components/Login/Login';
import Contacto from './components/Contacto/Contacto';
import { DamaCompleto } from './components/Dama/DamaCompleto';
import { CaballeroCompleto } from './components/Caballero/CaballeroCompleto';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<CartContent />}/>
          <Route path='/dama' element={<Dama/>}/>
          <Route path='/dama-deportivo' element={<DamaDeportivo/>}/>
          <Route path='/dama-formal' element={<DamaFormal/>}/>
          <Route path='/caballero' element={<Caballero/>}/>
          <Route path='/caballero-deportivo' element={<CaballeroDeportivo/>}/>
          <Route path='/caballero-formal' element={<CaballeroFormal/>}/>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/dama-completo' element={<DamaCompleto/>}/>
          <Route path='/caballero-completo' element={<CaballeroCompleto/>}/>

          


      </Routes>
    </BrowserRouter>
  </DataProvider>
)
