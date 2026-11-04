import React from 'react';

export default function Logo({ pequeno = false }) {
  return (
    <a className={`logo ${pequeno ? 'logo--sm' : ''}`} href="#inicio" aria-label="NEXO Inventario, ir al inicio">
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id={pequeno ? 'lgp' : 'lg'} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#e879f9" />
          </linearGradient>
        </defs>
        <path d="M10 2h20l10 18-10 18H10L0 20 10 2z" fill={`url(#${pequeno ? 'lgp' : 'lg'})`} />
        <path d="M13 27V13l14 14V13" fill="none" stroke="#0b0716" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>
        NEXO<small>INVENTARIO</small>
      </span>
    </a>
  );
}
