import React from 'react';
import Icon from './Icon.jsx';
import { ArtBotica, ArtTienda, ArtDistribuidora } from '../art/Escenas.jsx';
import { CONFIG } from '../config.js';

const CASOS = [
  {
    arte: <ArtBotica />,
    titulo: 'Boticas y farmacias',
    problema: 'Medicamentos que se agotan sin aviso y diferencias entre lo que hay y lo que dice el cuaderno.',
    solucion: 'Stock mínimo por producto, alertas de reposición y Kardex con cada salida registrada.'
  },
  {
    arte: <ArtTienda />,
    titulo: 'Tiendas de tecnología y ferreterías',
    problema: 'Cientos de artículos de varios proveedores, con precios y existencias que cambian cada semana.',
    solucion: 'Catálogo por categorías y proveedores, búsqueda instantánea y valor del inventario al día.'
  },
  {
    arte: <ArtDistribuidora />,
    titulo: 'Almacenes y distribuidoras',
    problema: 'Varias personas moviendo mercadería y nadie sabe quién tocó qué.',
    solucion: 'Roles para almacenero y supervisor, movimientos con responsable y anulación con reversión de stock.'
  }
];

export default function Usos() {
  return (
    <section className="sec" id="usos">
      <div className="wrap">
        <div className="cab">
          <span className="eyebrow">¿Para qué se usa?</span>
          <h2 className="titulo">Resultados en acción en cada tipo de negocio</h2>
          <p className="sub">NEXO sirve a cualquier operación que compre, guarde y venda productos y necesite saber, en todo momento, cuánto tiene y dónde está.</p>
        </div>
        <div className="usos">
          {CASOS.map((c) => (
            <article className="uso" key={c.titulo}>
              <div className="uso__arte">{c.arte}</div>
              <div className="uso__cuerpo">
                <h3>{c.titulo}</h3>
                <p><b>El problema.</b> {c.problema}</p>
                <p><b>Con NEXO.</b> {c.solucion}</p>
                <a className="enlace" href={CONFIG.demoUrl} target="_blank" rel="noopener noreferrer">
                  Probar la demo <Icon name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
