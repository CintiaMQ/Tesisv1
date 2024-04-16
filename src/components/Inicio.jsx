import React from 'react';
import Footer from './Footer';
import './Styles/style.css';
import { Link } from 'react-router-dom';
import YouTubeVideo from './YouTubeVideo';

function Inicio() {
  return (
    <>
      <div className="font-sans text-lg font-medium tracking-wide leading-normal" style={{ marginLeft: '2%', marginTop: '20px' }}>
        <div style={{ width: '50%' }}>
          <h1 className="text-2xl font-bold">Orientacion Vocacional</h1>
          <p className='text-base' style={{ textAlign: 'justify' }}>
            ¡Descubre tu destino profesional con la magia de la inteligencia artificial! ¡Desafía las fronteras y sumérgete en un viaje de autoconocimiento! Deja que la tecnología te guíe hacia la carrera de tus sueños. ¡Es momento de explorar y elegir tu camino con confianza!
          </p>
          <div style={{ marginTop: '20px' }}>
            <Link to="/registro">
              <button className="bg-[#24306E] text-[1.1rem] font-normal text-white px-4 py-2 rounded-full lg:ml-0 md:ml-6 sm:ml-0 ml-0">
                Comenzar
              </button>
            </Link>
          </div>
        </div>
        <div style={{ width: '50%', marginLeft: '50%', marginBottom:'20px' }}>
          <h1 className="text-3xl font-semibold">Ver Video</h1>
          <p className="text-base" style={{ textAlign: 'justify' }}>
            ¡Explora nuestra página web a través de este video instructivo! Descubre paso a paso cómo navegar, usar nuestras herramientas y encontrar tu camino hacia tu vocación profesional. Una guía práctica para sacar el máximo provecho de nuestra plataforma.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin:'20px' }}>
            
            <YouTubeVideo videoId="VIDEO_ID" />
          </div>
        <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'start', justifyContent: 'flex-start', margin: '20px' }}>
          <div style={{ width: '40%' }}>
            <YouTubeVideo videoId="VIDEO_ID" />
          </div>
          <div style={{ width: '50%', marginRight: '10%', marginTop: '20px' }}>
            <h1 className="text-3xl font-semibold">Test Vocacional</h1>
            <p className="text-base" style={{ textAlign: 'justify' }}>
              Es una serie de preguntas creadas con el propósito de guiar y brindar una solución a aquellas personas que día a día se preguntan "qué estudiar
            </p>
          </div>
        </div>
        <div style={{ width: '50%', marginLeft: '50%', marginBottom: '50px' }}>
          <h1 className="text-3xl font-semibold">Carreras</h1>
          <p className="text-base" style={{ textAlign: 'justify' }}>
            Las carreras que ofrece Tecsup se dividen en 4 departamentos
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Inicio;