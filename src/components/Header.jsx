import React, { useState } from 'react';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { CONFIG } from '../config.js';

const ENLACES = [
  ['Solución', '#solucion'],
  ['Capacidades', '#capacidades'],
  ['Usos', '#usos'],
  ['Nube', '#nube'],
  ['Hacia dónde vamos', '#vision'],
  ['Contacto', '#contacto']
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="top">
      <div className="wrap top__fila">
        <Logo />
        <nav className={`menu ${abierto ? 'menu--abierto' : ''}`} aria-label="Principal">
          {ENLACES.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setAbierto(false)}>
              {t}
            </a>
          ))}
          <a className="btn btn--p btn--sm menu__demo" href={CONFIG.demoUrl} target="_blank" rel="noopener noreferrer">
            Probar demo gratis
          </a>
        </nav>
        <a className="btn btn--p btn--sm top__demo" href={CONFIG.demoUrl} target="_blank" rel="noopener noreferrer">
          Probar demo gratis
        </a>
        <button className="burger" type="button" aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={abierto} onClick={() => setAbierto(!abierto)}>
          <Icon name={abierto ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}
