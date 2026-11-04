import React from 'react';
import { ArtParam, ArtIntegracion, ArtAutomatizacion, ArtOmni } from '../art/Escenas.jsx';

const ITEMS = [
  { arte: <ArtParam />, titulo: 'Alta parametrización', texto: 'Stock mínimo por producto, alertas, bloqueo de salidas sin stock y tiempo de sesión. El sistema se ajusta a su forma de trabajar.' },
  { arte: <ArtIntegracion />, titulo: 'Integración con su ERP', texto: 'Una API REST segura para conectar contabilidad, facturación, tienda en línea y reportes con el mismo inventario.' },
  { arte: <ArtAutomatizacion />, titulo: 'Automatización de procesos', texto: 'Cada movimiento actualiza el stock en la misma operación y las alertas de bajo stock aparecen sin que nadie las busque.' },
  { arte: <ArtOmni />, titulo: 'Preparado para varios canales', texto: 'Un solo stock como fuente de la verdad para mostrador, tienda web y nuevos puntos de venta.' }
];

export default function Capacidades() {
  return (
    <section className="sec" id="capacidades">
      <div className="wrap">
        <div className="cab">
          <span className="eyebrow">Capacidades avanzadas</span>
          <h2 className="titulo">Capacidades para gestionar operaciones de alta exigencia</h2>
        </div>
        <div className="cap">
          {ITEMS.map((c) => (
            <article className="cap__card" key={c.titulo}>
              <div className="cap__arte">{c.arte}</div>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
