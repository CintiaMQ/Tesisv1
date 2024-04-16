import React from 'react';
import Logo from '../assets/react.svg';


function Footer() {
  return (
    <footer style={{ backgroundColor: '#24306E', padding: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Primera parte - Logo */}
        <div>
          <img src={Logo} alt="Logo" style={{ width: '100px' }} />
        </div>
        {/* Segunda parte - Enlaces */}
        <div>
          <a href="#">Inicio</a>
          <br />
          <a href="#">Información</a>
          <br />
          <a href="#">Acerca</a>
          <br />
          <a href="#">Contacto</a>
        </div>
        {/* Tercera parte - Contactos */}
        <div>
          <a href="#" className="fab fa-facebook">Facebook</a>
          <a href="#" className="fab fa-twitter">twitter</a>
          <a href="#">instagram<i className="fab fa-instagram"></i></a>
          <a href="#">linkedin<i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
