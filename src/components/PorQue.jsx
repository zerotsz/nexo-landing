import React from 'react';
import Icon from './Icon.jsx';

const RAZONES = [
  { icono: 'rocket', titulo: 'Innovación tecnológica permanente', puntos: ['Construido con React, Node.js y MySQL, tecnologías vigentes y con comunidad activa.', 'Mejoras continuas: nuevos módulos y reportes sin cambiar de plataforma.'] },
  { icono: 'shield', titulo: 'Seguridad desde el diseño', puntos: ['Contraseñas cifradas, sesión con vencimiento y permisos por rol en cada acción.', 'Consultas protegidas contra inyección SQL y límite de intentos de acceso.'] },
  { icono: 'users', titulo: 'Evolución y cercanía', puntos: ['Trabajamos por etapas cortas y ajustamos el sistema con su equipo.', 'Soporte directo, sin intermediarios.'] },
  { icono: 'code', titulo: 'Integración de sistemas', puntos: ['API REST documentada para conectar su ERP, contabilidad o tienda.', 'Misma información en todas las áreas, sin copiar datos a mano.'] }
];

export default function PorQue() {
  return (
    <section className="sec sec--alt" id="porque">
      <div className="wrap porque">
        <div className="porque__cab">
          <span className="eyebrow">¿Por qué NEXO?</span>
          <h2 className="titulo">Una base sólida para su inventario de hoy y de mañana</h2>
          <a className="btn btn--g" href="#contacto">Solicitar información</a>
        </div>
        <div className="porque__lista">
          {RAZONES.map((r) => (
            <article className="razon" key={r.titulo}>
              <span className="razon__ico"><Icon name={r.icono} /></span>
              <div>
                <h3>{r.titulo}</h3>
                <ul>
                  {r.puntos.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
