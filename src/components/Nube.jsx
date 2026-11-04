import React from 'react';
import Icon from './Icon.jsx';
import { ArtNube } from '../art/Escenas.jsx';

const BLOQUES = [
  { icono: 'cloud', titulo: 'En la nube', texto: 'Acceso desde cualquier dispositivo con internet, sin servidores propios que mantener.' },
  { icono: 'bolt', titulo: 'Menor inversión inicial', texto: 'Sin compra de equipos. Usted paga por usar el sistema y empieza más rápido.' },
  { icono: 'db', titulo: 'Datos respaldados', texto: 'Base de datos administrada con copias de seguridad para proteger su información.' },
  { icono: 'rocket', titulo: 'Siempre actualizado', texto: 'Las mejoras llegan a todos los usuarios sin instalaciones ni paradas.' }
];

export default function Nube() {
  return (
    <section className="sec sec--alt" id="nube">
      <div className="wrap dos dos--inv">
        <div className="arte arte--vertical">
          <ArtNube />
        </div>
        <div>
          <span className="eyebrow">NEXO en la nube</span>
          <h2 className="titulo">Disponible donde usted trabaje</h2>
          <p className="sub">Un modelo pensado para que el negocio crezca sin preocuparse por la infraestructura.</p>
          <div className="nube__lista">
            {BLOQUES.map((b) => (
              <div className="nube__item" key={b.titulo}>
                <span className="nube__ico"><Icon name={b.icono} /></span>
                <div>
                  <h3>{b.titulo}</h3>
                  <p>{b.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
