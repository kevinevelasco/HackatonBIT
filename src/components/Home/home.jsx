import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Caballero from "../Caballero/Caballero";
import { Dama } from "../Dama/Dama";
import Products from "../Products/Products";
import Contacto from "../Contacto/Contacto";
import Registro from "../Registro/Registro";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import './home.css'



const Home = () => {
    return (
  <>
  <Navbar/>
  <Slider/>
  <h1>Productos Más Vendidos</h1>
  < Products tipo={"Formal"} genero={"Caballero"} limit={4}/>  
  <Caballero/>
  <Dama/>
  <div className = 'productCardContainer'>
   <Products/> 
  </div> 
  <Footer/>
  </>
  );
};

export default Home;
  