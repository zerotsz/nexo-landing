import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Indicadores from './components/Indicadores.jsx';
import Solucion from './components/Solucion.jsx';
import Capacidades from './components/Capacidades.jsx';
import PorQue from './components/PorQue.jsx';
import Usos from './components/Usos.jsx';
import Nube from './components/Nube.jsx';
import Vision from './components/Vision.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Indicadores />
        <Solucion />
        <Capacidades />
        <PorQue />
        <Usos />
        <Nube />
        <Vision />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
