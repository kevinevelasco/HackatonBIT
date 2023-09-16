import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='footer'>
        <div>
          Síguenos en redes sociales:
          <a href="https://www.instagram.com/kevinevelasco/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/kevincitoevelasco" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <div>
          Derechos reservados MedAnalysis &copy; {new Date().getFullYear()}
        </div>
      </section>
    </footer>
  );
};

export default Footer;

