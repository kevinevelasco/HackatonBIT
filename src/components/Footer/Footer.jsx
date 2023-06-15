import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='footer'>
        <div>
          Síguenos en redes sociales:
          <a href="https://www.instagram.com/solartestore/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/SolarteStore" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <div>
          Derechos reservados Solarte Store &copy; {new Date().getFullYear()}
        </div>
      </section>
    </footer>
  );
};

export default Footer;

