import React from 'react';
import Icon from './Icon.jsx';
import { ArtProcesos } from '../art/Escenas.jsx';

const BENEFICIOS = [
  { icono: 'chart', titulo: 'Control total', texto: 'Visibilidad de todo lo que entra, sale y queda en el almacén, con el responsable de cada movimiento.' },
  { icono: 'bolt', titulo: 'Mayor eficiencia', texto: 'Menos tiempo en conteos y planillas. El stock se actualiza solo y el sistema avisa qué reponer.' },
  { icono: 'rocket', titulo: 'Escalabilidad', texto: 'Empiece con un almacén y crezca a más productos, usuarios y canales sin cambiar de sistema.' }
];

export default function Solucion() {
  return (
    <>
      <section className="sec" id="solucion">
        <div className="wrap dos">
          <div>
            <span className="eyebrow">La solución</span>
            <h2 className="titulo">Mucho más que un sistema de inventario</h2>
            <p className="sub">
              NEXO es la plataforma que ordena los procesos de su almacén: registra cada entrada y salida, mantiene el stock al día y le dice cuándo reponer.
            </p>
            <p className="sub">
              Su arquitectura abierta (API REST) permite conectarlo con el ERP, la contabilidad o la tienda en línea, de modo que todos trabajen con la misma información.
            </p>
            <div className="bloque">
              <h3>Procesos de inventario bien definidos</h3>
              <p>
                Antes de empezar le ayudamos a ordenar categorías, proveedores y stock mínimo. Así el sistema refleja cómo trabaja su negocio desde el primer día.
              </p>
              <a className="enlace" href="#contacto">
                Conversemos sobre su operación <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div className="arte arte--cuadrado">
            <ArtProcesos />
          </div>
        </div>
      </section>

      <section className="sec sec--alt">
        <div className="wrap">
          <div className="tres">
            {BENEFICIOS.map((b) => (
              <article className="beneficio" key={b.titulo}>
                <div className="hex">
                  <Icon name={b.icono} />
                </div>
                <h3>{b.titulo}</h3>
                <p>{b.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
