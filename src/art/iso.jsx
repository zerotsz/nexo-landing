import React from 'react';

// Ilustración isométrica propia: cubos con tres caras. Unidad = K píxeles.
const K = 30;
const P = (x, y, z) => [(x - y) * 0.866 * K, (x + y) * 0.5 * K - z * K];
const pts = (a) => a.map((p) => P(...p).map((n) => n.toFixed(1)).join(',')).join(' ');

// [cara superior, cara izquierda, cara derecha]
export const PAL = {
  violet: ['#b79cff', '#7c4dff', '#5b32d6'],
  pink: ['#f7b3ff', '#d45cf0', '#a43bc4'],
  light: ['#f4efff', '#d7caff', '#b9a6f2'],
  cyan: ['#a5ecff', '#38bdf8', '#1d8fc9'],
  green: ['#9bf6cd', '#34d399', '#1f9e72'],
  amber: ['#ffe3a0', '#fbbf24', '#c98f0a'],
  dark: ['#3a2b6b', '#241a47', '#1a1236'],
  slab: ['#4d3d8c', '#35286a', '#291e52'],
  floor: ['#21173f', '#170f2f', '#110a24'],
  lane: ['#3b2a78', '#2a1d58', '#20164a']
};

export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const depth = (i) => i.x + (i.w || 1) / 2 + i.y + (i.d || 1) / 2 + i.z + (i.h || 1) / 2;

export function Cube({ x, y, z, w = 1, d = 1, h = 1, c = 'violet', o = 1 }) {
  const [t, l, r] = PAL[c] || PAL.violet;
  return (
    <g opacity={o}>
      <polygon points={pts([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]])} fill={t} />
      <polygon points={pts([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]])} fill={l} />
      <polygon points={pts([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]])} fill={r} />
    </g>
  );
}

// Etiqueta con forma de píldora anclada a una coordenada isométrica
export function Pill({ x, y, z, t, c = '#b26bff', dx = 0, dy = 0 }) {
  const [px, py] = P(x, y, z);
  const w = t.length * 7.4 + 22;
  return (
    <g transform={`translate(${(px + dx).toFixed(1)} ${(py + dy).toFixed(1)})`}>
      <rect x={-w / 2} y={-13} width={w} height={26} rx={13} fill="#0b0716" stroke={c} strokeWidth="1.4" />
      <text x="0" y="5" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="#efeaff">
        {t}
      </text>
    </g>
  );
}

export function Iso({ items, labels = [], vb = '0 0 600 440', ox = 300, oy = 190, label, children }) {
  const ordenados = [...items].sort((a, b) => (a.g || 0) - (b.g || 0) || (a.l ?? 1) - (b.l ?? 1) || depth(a) - depth(b));
  return (
    <svg viewBox={vb} role="img" aria-label={label} preserveAspectRatio="xMidYMid meet">
      <g transform={`translate(${ox} ${oy})`}>
        {ordenados.map((it, i) => (
          <Cube key={i} {...it} />
        ))}
        {labels.map((l, i) => (
          <Pill key={i} {...l} />
        ))}
      </g>
      {children}
    </svg>
  );
}

// Estantería con niveles y cajas
export function rack(x0, y0, len, levels, seed, g, cols = ['violet', 'pink', 'light', 'cyan']) {
  const r = rng(seed);
  const H = 1.45;
  const D = 1.3;
  const it = [];
  [0, len / 2, len - 0.14].forEach((px) => [0, D - 0.14].forEach((py) => it.push({ x: x0 + px, y: y0 + py, z: 0, w: 0.14, d: 0.14, h: levels * H + 0.15, c: 'dark', g, l: 1 })));
  for (let l = 0; l < levels; l++) {
    const z = l * H + 0.12;
    it.push({ x: x0, y: y0, z, w: len, d: D, h: 0.1, c: 'slab', g, l: 1 });
    const n = Math.floor(len / 1.05);
    for (let k = 0; k < n; k++) {
      it.push({ x: x0 + 0.12 + k * 1.05, y: y0 + 0.2, z: z + 0.1, w: 0.8, d: 0.85 + r() * 0.25, h: 0.55 + r() * 0.55, c: cols[Math.floor(r() * cols.length)], g, l: 2 });
    }
  }
  return it;
}

// Tarima con pila de cajas
export function pallet(x, y, g, seed = 3, cols = ['light', 'violet', 'pink']) {
  const r = rng(seed);
  const it = [{ x, y, z: 0, w: 1.6, d: 1.6, h: 0.18, c: 'slab', g, l: 1 }];
  for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) {
    const lv = 1 + Math.floor(r() * 3);
    for (let k = 0; k < lv; k++) it.push({ x: x + 0.1 + a * 0.75, y: y + 0.1 + b * 0.75, z: 0.18 + k * 0.62, w: 0.68, d: 0.68, h: 0.6, c: cols[Math.floor(r() * cols.length)], g, l: 2 });
  }
  return it;
}

export const piso = (w, d, g = 0) => [
  { x: 0, y: 0, z: -0.35, w, d, h: 0.35, c: 'floor', g, l: 0 }
];
