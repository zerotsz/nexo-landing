import React from 'react';

const RUTAS = {
  box: <><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>,
  truck: <><path d="M3 6h11v10H3z" /><path d="M14 9h4l3 3v4h-7" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" /><path d="M16 4.5a3.5 3.5 0 010 7M18 14c2.5.6 4 2.6 4 6" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></>,
  bell: <><path d="M6 16v-5a6 6 0 0112 0v5l2 2H4l2-2z" /><path d="M10 21h4" /></>,
  swap: <path d="M4 8h14l-3-3M20 16H6l3 3" />,
  chart: <><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>,
  key: <><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M16 7l3 3M14 9l2 2" /></>,
  bolt: <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />,
  check: <path d="M5 12l4 4 10-10" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  db: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
  play: <path d="M7 4l13 8-13 8V4z" />,
  home: <><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  cloud: <path d="M7 18a4 4 0 01-.5-8A6 6 0 0118 9.5 4.3 4.3 0 0117.5 18H7z" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></>,
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
  rocket: <><path d="M5 19c0-3 1-4.5 3-6l3 3c-1.5 2-3 3-6 3z" /><path d="M9 13c2-5 6-8 11-9-1 5-4 9-9 11z" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 11v6M8 8v.01M12 17v-4a2.2 2.2 0 014.4 0v4M12 11v6" /></>,
  youtube: <><rect x="3" y="6" width="18" height="12" rx="4" /><path d="M10 9.5v5l4.5-2.5-4.5-2.5z" /></>,
  github: <path d="M9 19c-4 1-4-2-6-2m12 4v-3.5a3 3 0 00-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 00-6 0C6.5 2.7 5.5 3 5.5 3a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.8 5.7 5.5 6a3 3 0 00-.8 2.3V21" />
};

export default function Icon({ name, size }) {
  return (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" style={size ? { width: size, height: size } : undefined}>
      {RUTAS[name]}
    </svg>
  );
}
