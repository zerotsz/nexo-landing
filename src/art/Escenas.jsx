import React from 'react';
import { Iso, rack, pallet, piso } from './iso.jsx';

/* ---------- Hero: almacén isométrico ---------- */
export function ArtHero() {
  const items = [
    ...piso(9.4, 7.8, 0),
    { x: 0, y: 3.15, z: 0, w: 9.4, d: 0.5, h: 0.02, c: 'lane', g: 0, l: 0 },
    ...rack(0.8, 0.5, 6, 3, 11, 1),
    ...rack(0.8, 4.5, 6, 3, 29, 2),
    ...pallet(7.3, 0.7, 3, 5),
    ...pallet(7.3, 3.9, 4, 9, ['cyan', 'pink', 'light']),
    ...pallet(7.3, 6.1, 5, 14, ['violet', 'light', 'amber'])
  ];
  return <Iso items={items} vb="0 0 620 460" ox="310" oy="170" label="Almacén ordenado con estanterías y tarimas" />;
}

/* ---------- Procesos: entrada, almacén, salida ---------- */
export function ArtProcesos() {
  const belt = (x, w) => ({ x, y: 3.55, z: 0, w, d: 0.9, h: 0.14, c: 'lane', g: 1, l: 1 });
  const caja = (x, c) => ({ x, y: 3.8, z: 0.14, w: 0.6, d: 0.6, h: 0.5, c, g: 2, l: 2 });
  const items = [
    ...piso(10.2, 8, 0),
    ...pallet(0.5, 3.2, 1, 7),
    belt(2.2, 1.5),
    caja(2.6, 'light'),
    ...rack(4, 3, 2.4, 3, 21, 3),
    belt(6.6, 1.3),
    caja(7, 'pink'),
    ...pallet(8.3, 3.2, 4, 12, ['cyan', 'light', 'violet'])
  ];
  const labels = [
    { x: 1.3, y: 4, z: 2.4, t: 'Entrada', c: '#34d399' },
    { x: 5.2, y: 3.6, z: 5.4, t: 'Almacén', c: '#b26bff' },
    { x: 9.1, y: 4, z: 2.4, t: 'Salida', c: '#fbbf24' }
  ];
  return <Iso items={items} labels={labels} vb="40 160 540 400" ox="300" oy="250" label="Flujo de entrada, almacenamiento y salida de mercadería" />;
}

/* ---------- Usos ---------- */
export function ArtBotica() {
  const items = [
    ...piso(6.4, 5.6, 0),
    ...rack(0.5, 0.4, 5, 2, 41, 1, ['light', 'green', 'cyan']),
    { x: 0.5, y: 3.4, z: 0, w: 5, d: 1.1, h: 1.1, c: 'violet', g: 2, l: 1 },
    { x: 2.7, y: 3.4, z: 1.1, w: 0.7, d: 1.1, h: 0.1, c: 'light', g: 2, l: 2 }
  ];
  const cruz = [
    { x: 2.85, y: 3.55, z: 1.2, w: 0.4, d: 0.8, h: 0.5, c: 'green', g: 3, l: 3 },
    { x: 2.7, y: 3.7, z: 1.5, w: 0.7, d: 0.4, h: 0.2, c: 'green', g: 3, l: 3 }
  ];
  return <Iso items={[...items, ...cruz]} vb="0 0 460 300" ox="230" oy="118" label="Botica con estantes de productos" />;
}

export function ArtTienda() {
  const items = [
    ...piso(6.4, 5.6, 0),
    ...rack(0.5, 0.4, 5.2, 3, 67, 1, ['violet', 'cyan', 'amber', 'light']),
    ...pallet(0.8, 3.2, 2, 18, ['cyan', 'violet', 'light']),
    ...pallet(3.4, 3.3, 3, 25, ['pink', 'amber', 'light'])
  ];
  return <Iso items={items} vb="0 0 460 300" ox="230" oy="118" label="Tienda de tecnología con productos en estantes y tarimas" />;
}

export function ArtDistribuidora() {
  const items = [
    ...piso(6.8, 6.4, 0),
    ...pallet(0.5, 0.5, 1, 31),
    ...pallet(2.6, 0.5, 2, 32, ['violet', 'pink', 'light']),
    ...pallet(4.7, 0.5, 3, 33, ['cyan', 'light', 'violet']),
    ...pallet(0.5, 3, 4, 34, ['pink', 'light', 'amber']),
    ...pallet(2.6, 3, 5, 35),
    ...pallet(4.7, 3, 6, 36, ['light', 'cyan', 'pink'])
  ];
  return <Iso items={items} vb="0 0 460 300" ox="230" oy="100" label="Distribuidora con tarimas de mercadería" />;
}

/* ---------- Capacidades ---------- */
export function ArtParam() {
  const fila = (y, t, c) => (
    <g transform={`translate(0 ${y})`}>
      <text x="0" y="5" fill="#d9ceff" fontFamily="Inter, sans-serif" fontSize="13">{t}</text>
      {c}
    </g>
  );
  const toggle = (on) => (
    <g transform="translate(268 -10)">
      <rect width="42" height="22" rx="11" fill={on ? '#8b5cf6' : '#2d2352'} />
      <circle cx={on ? 31 : 11} cy="11" r="8" fill="#fff" />
    </g>
  );
  const slider = (p) => (
    <g transform="translate(196 -3)">
      <rect width="114" height="6" rx="3" fill="#2d2352" />
      <rect width={114 * p} height="6" rx="3" fill="url(#pg)" />
      <circle cx={114 * p} cy="3" r="8" fill="#fff" stroke="#8b5cf6" strokeWidth="3" />
    </g>
  );
  return (
    <svg viewBox="0 0 464 293" role="img" aria-label="Pantalla de parámetros del sistema">
      <defs>
        <linearGradient id="pg" x1="0" x2="1"><stop offset="0" stopColor="#7c3aed" /><stop offset="1" stopColor="#e879f9" /></linearGradient>
      </defs>
      <rect x="40" y="26" width="384" height="240" rx="18" fill="#151028" stroke="#3b2d6d" />
      <rect x="40" y="26" width="384" height="44" rx="18" fill="#1d1538" />
      <text x="66" y="54" fill="#efeaff" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="19" letterSpacing="1.5">PARÁMETROS</text>
      <g transform="translate(74 106)">
        {fila(0, 'Stock mínimo por producto', slider(0.62))}
        {fila(40, 'Alertas de bajo stock', toggle(true))}
        {fila(80, 'Bloquear salidas sin stock', toggle(true))}
        {fila(120, 'Cierre de sesión (horas)', slider(0.28))}
      </g>
      <rect x="74" y="230" width="316" height="1" fill="#2d2352" />
      <rect x="320" y="238" width="70" height="20" rx="10" fill="url(#pg)" />
      <text x="355" y="252" textAnchor="middle" fill="#fff" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600">Guardar</text>
    </svg>
  );
}

export function ArtIntegracion() {
  const nodo = (x, y, t, c) => (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-52" y="-24" width="104" height="48" rx="14" fill="#151028" stroke={c} strokeWidth="1.6" />
      <text x="0" y="5" textAnchor="middle" fill="#efeaff" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600">{t}</text>
    </g>
  );
  const linea = (x2, y2) => <path d={`M232 146 C ${232 + (x2 - 232) / 2} 146, ${232 + (x2 - 232) / 2} ${y2}, ${x2} ${y2}`} stroke="#8b5cf6" strokeWidth="2" fill="none" strokeDasharray="6 6" className="flujo" />;
  return (
    <svg viewBox="0 0 464 293" role="img" aria-label="NEXO conectado con ERP, contabilidad y tienda en línea">
      {linea(76, 56)}{linea(76, 146)}{linea(76, 236)}{linea(388, 56)}{linea(388, 146)}{linea(388, 236)}
      {nodo(76, 56, 'ERP', '#34d399')}{nodo(76, 146, 'Contabilidad', '#fbbf24')}{nodo(76, 236, 'Facturación', '#38bdf8')}
      {nodo(388, 56, 'Tienda web', '#e879f9')}{nodo(388, 146, 'Mostrador', '#b26bff')}{nodo(388, 236, 'Reportes', '#34d399')}
      <g transform="translate(232 146)">
        <path d="M-34 -50h68l34 50-34 50h-68l-34-50z" fill="#7c3aed" />
        <path d="M-34 -50h68l34 50-34 50h-68l-34-50z" fill="none" stroke="#e879f9" strokeWidth="2" />
        <text x="0" y="9" textAnchor="middle" fill="#fff" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="26" letterSpacing="2">NEXO</text>
      </g>
    </svg>
  );
}

export function ArtAutomatizacion() {
  const items = [
    ...piso(8, 4.6, 0),
    { x: 0.4, y: 1.7, z: 0, w: 7.2, d: 1.1, h: 0.2, c: 'lane', g: 1, l: 1 },
    { x: 0.9, y: 1.9, z: 0.2, w: 0.7, d: 0.7, h: 0.6, c: 'violet', g: 2, l: 2 },
    { x: 2.6, y: 1.9, z: 0.2, w: 0.7, d: 0.7, h: 0.6, c: 'pink', g: 2, l: 2 },
    { x: 4.3, y: 1.9, z: 0.2, w: 0.7, d: 0.7, h: 0.6, c: 'light', g: 2, l: 2 },
    { x: 6, y: 1.9, z: 0.2, w: 0.7, d: 0.7, h: 0.6, c: 'cyan', g: 2, l: 2 }
  ];
  return (
    <div className="art-stack">
      <Iso items={items} vb="0 0 464 293" ox="232" oy="86" label="Cinta transportadora con cajas" />
      <div className="art-chip art-chip--a"><i /> Stock actualizado</div>
      <div className="art-chip art-chip--b"><i /> Alerta: 7 por reponer</div>
    </div>
  );
}

export function ArtOmni() {
  const canal = (x, y, t, c) => (
    <g transform={`translate(${x} ${y})`}>
      <circle r="34" fill="#151028" stroke={c} strokeWidth="1.8" />
      <text x="0" y="4" textAnchor="middle" fill="#efeaff" fontFamily="Inter, sans-serif" fontSize="11.5" fontWeight="600">{t}</text>
    </g>
  );
  const l = (x, y) => <line x1="232" y1="146" x2={x} y2={y} stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 6" className="flujo" />;
  return (
    <svg viewBox="0 0 464 293" role="img" aria-label="Un solo stock para varios canales de venta">
      {l(80, 70)}{l(384, 70)}{l(80, 226)}{l(384, 226)}
      {canal(80, 70, 'Mostrador', '#34d399')}{canal(384, 70, 'Tienda web', '#e879f9')}
      {canal(80, 226, 'Marketplace', '#fbbf24')}{canal(384, 226, 'Almacén 2', '#38bdf8')}
      <g transform="translate(232 146)">
        <circle r="52" fill="#7c3aed" /><circle r="52" fill="none" stroke="#e879f9" strokeWidth="2" />
        <text y="-2" textAnchor="middle" fill="#fff" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="20" letterSpacing="1.5">STOCK</text>
        <text y="20" textAnchor="middle" fill="#e9ddff" fontFamily="Inter, sans-serif" fontSize="12">único</text>
      </g>
    </svg>
  );
}

/* ---------- Nube ---------- */
export function ArtNube() {
  const server = (y, c) => (
    <g transform={`translate(0 ${y})`}>
      <rect x="-86" y="0" width="172" height="40" rx="10" fill="#1b1434" stroke="#3b2d6d" />
      <circle cx="-62" cy="20" r="5" fill={c} />
      <circle cx="-44" cy="20" r="5" fill="#3b2d6d" />
      <rect x="-12" y="16" width="84" height="8" rx="4" fill="#2d2352" />
    </g>
  );
  return (
    <svg viewBox="0 0 411 463" role="img" aria-label="Servicio en la nube con servidores y protección">
      <defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7c3aed" /><stop offset="1" stopColor="#e879f9" /></linearGradient></defs>
      <g transform="translate(205 120)">
        <path d="M-96 50a46 46 0 01-4-92 66 66 0 01126-14 54 54 0 0170 52 40 40 0 01-12 54z" fill="url(#cg)" />
        <path d="M-96 50a46 46 0 01-4-92 66 66 0 01126-14 54 54 0 0170 52 40 40 0 01-12 54z" fill="none" stroke="#f5d0fe" strokeOpacity=".5" strokeWidth="2" />
      </g>
      <path d="M205 180v54" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 6" className="flujo" />
      <g transform="translate(205 246)">{server(0, '#34d399')}{server(54, '#34d399')}{server(108, '#fbbf24')}</g>
      <g transform="translate(320 390)">
        <path d="M0-30l30 11v22c0 20-13 32-30 38-17-6-30-18-30-38v-22z" fill="#151028" stroke="#34d399" strokeWidth="2.4" />
        <path d="M-11 4l8 8 15-17" fill="none" stroke="#34d399" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* ---------- Visión: escalera hacia la meta ---------- */
export function ArtVision() {
  const paso = (i, c) => ({ x: i * 2.1, y: (3 - i) * 1.7, z: 0, w: 1.6, d: 1.6, h: 0.9 + i * 1.05, c, g: 1 + i, l: 1 });
  const items = [
    ...piso(8.6, 6.8, 0),
    paso(0, 'light'), paso(1, 'cyan'), paso(2, 'violet'), paso(3, 'pink'),
    { x: 6.7, y: 0.7, z: 4.05, w: 0.1, d: 0.1, h: 1.6, c: 'light', g: 9, l: 2 },
    { x: 6.8, y: 0.7, z: 5.05, w: 0.9, d: 0.1, h: 0.55, c: 'amber', g: 9, l: 3 }
  ];
  const lab = (i, t, c) => ({ x: i * 2.1 + 0.8, y: (3 - i) * 1.7 + 0.8, z: 0.9 + i * 1.05 + (i === 3 ? 2.3 : 0.9), t, c });
  const labels = [lab(0, 'Hoy', '#34d399'), lab(1, 'Próximo', '#38bdf8'), lab(2, 'Luego', '#b26bff'), lab(3, 'Meta', '#e879f9')];
  return <Iso items={items} labels={labels} vb="60 30 480 450" ox="300" oy="250" label="Escalera de crecimiento del producto" />;
}
