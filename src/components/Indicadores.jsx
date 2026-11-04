import React from 'react';

// Pequeñas animaciones propias (equivalen a los GIF de la página de referencia)
function Anim({ tipo }) {
  return (
    <svg className={`anim anim--${tipo}`} viewBox="0 0 48 48" aria-hidden="true">
      {tipo === 'modulos' && (
        <g>
          <rect className="a1" x="6" y="6" width="16" height="16" rx="4" />
          <rect className="a2" x="26" y="6" width="16" height="16" rx="4" />
          <rect className="a3" x="6" y="26" width="16" height="16" rx="4" />
          <rect className="a4" x="26" y="26" width="16" height="16" rx="4" />
        </g>
      )}
      {tipo === 'roles' && (
        <g>
          <circle className="a1" cx="24" cy="14" r="7" />
          <path className="a2" d="M8 40c0-9 7-14 16-14s16 5 16 14" />
        </g>
      )}
      {tipo === 'tx' && (
        <g>
          <path className="a1" d="M8 18h30l-7-7" />
          <path className="a2" d="M40 30H10l7 7" />
        </g>
      )}
      {tipo === 'cero' && (
        <g>
          <path className="a1" d="M24 5l16 6v12c0 10-7 17-16 20-9-3-16-10-16-20V11z" />
          <path className="a2" d="M17 24l5 5 10-11" />
        </g>
      )}
    </svg>
  );
}

const DATOS = [
  { tipo: 'modulos', cifra: '5', texto: 'módulos integrados en un solo panel' },
  { tipo: 'roles', cifra: '3', texto: 'roles con permisos independientes' },
  { tipo: 'tx', cifra: '100%', texto: 'de los movimientos con respaldo transaccional' },
  { tipo: 'cero', cifra: '0', texto: 'salidas que dejen el stock en negativo' }
];

export default function Indicadores() {
  return (
    <div className="indic">
      <div className="wrap indic__fila">
        {DATOS.map((d) => (
          <div className="indic__item" key={d.tipo}>
            <Anim tipo={d.tipo} />
            <div>
              <b>{d.cifra}</b>
              <span>{d.texto}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
