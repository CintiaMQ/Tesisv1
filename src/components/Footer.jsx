import React from 'react';
import tecvoc2 from '../assets/tecvoc2.png'


function Footer() {
  return (
    <footer style={{ backgroundColor: '#24306E', padding: '20px 0' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
    {/* Primera parte - Logo */}
    <div>
      <img src={tecvoc2} alt="Logo" className='logo-image2'/>
    </div>
    {/* Segunda parte - Enlaces */}
    <div className="links-container">
      <a href="#">Inicio</a>
      <a href="#">Información</a>
      <a href="#">Acerca</a>
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
