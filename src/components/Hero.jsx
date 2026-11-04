import React from 'react';
import Icon from './Icon.jsx';
import { ArtHero } from '../art/Escenas.jsx';
import { CONFIG } from '../config.js';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero__fila">
        <div className="hero__texto">
          <span className="eyebrow">Inventario · Kardex · Logística</span>
          <h1>
            Controle su inventario <em>sin sorpresas</em>
          </h1>
          <p className="sub">
            NEXO integra productos, proveedores, Kardex y usuarios en un solo panel para lograr más orden, trazabilidad y capacidad de crecer en su negocio.
          </p>
          <div className="cta">
            <a className="btn btn--p" href={CONFIG.demoUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="play" />
              Probar demo gratis
            </a>
            <a className="btn btn--g" href="#contacto">
              Hablar con un especialista
            </a>
          </div>
          <p className="nota">
            <Icon name="check" />
            Nosotro programamos su tranquilad y su inventario
          </p>
        </div>

        <div className="hero__arte">
          <ArtHero />
          <div className="flota flota--a">
            <span className="flota__t">Salud del stock</span>
            <b>91%</b>
            <span className="bar"><i style={{ width: '91%' }} /></span>
          </div>
          <div className="flota flota--b">
            <span className="flota__t">Bajo stock</span>
            <b className="amb">7</b>
            <span className="flota__s">productos por reponer</span>
          </div>
          <div className="flota flota--c">
            <span className="punto" /> Entrada registrada · +20 uds
          </div>
        </div>
      </div>
    </section>
  );
}
