// Configuración central de la landing. Los textos de SERVICIOS se usan en la página y
// deben coincidir con la plantilla de correo (docs/emailjs-autorespuesta.html).
const env = import.meta.env || {};

export const CONFIG = {
  marca: 'NEXO',
  demoUrl: env.VITE_DEMO_URL || 'http://localhost:5173',
  siteUrl: (env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')).replace(/\/$/, ''),
  contacto: {
    correo: env.VITE_CONTACT_EMAIL || '',
    telefono: env.VITE_CONTACT_PHONE || '',
    ciudad: env.VITE_CONTACT_CITY || ''
  },
  redes: {
    linkedin: 'https://www.linkedin.com/',
    youtube: 'https://www.youtube.com/',
    github: 'https://github.com/'
  }
};

export const SERVICIOS = [
  { icono: 'swap', titulo: 'Inventario y Kardex en tiempo real', texto: 'El stock cambia con cada entrada, salida y ajuste, con historial completo.' },
  { icono: 'box', titulo: 'Productos, categorías y proveedores', texto: 'Catálogo ordenado, con stock mínimo y alertas de reposición.' },
  { icono: 'users', titulo: 'Usuarios y permisos por rol', texto: 'Administrador, Almacenero y Supervisor, cada uno con sus accesos.' },
  { icono: 'shield', titulo: 'Seguridad y respaldo', texto: 'Contraseñas cifradas, sesión protegida y datos respaldados en la nube.' },
  { icono: 'rocket', titulo: 'Implementación y soporte', texto: 'Carga inicial de datos, capacitación del equipo y acompañamiento.' },
  { icono: 'code', titulo: 'Integración por API', texto: 'Conexión con su ERP, contabilidad o tienda en línea.' }
];

export const PAISES = ['Perú', 'Chile', 'Argentina', 'Uruguay', 'Paraguay', 'Bolivia', 'Ecuador', 'Colombia', 'México', 'Otro'];

export const FOLLETOS = [
  { valor: 'Corporativo', etiqueta: 'Folleto corporativo' },
  { valor: 'Inventario y Kardex', etiqueta: 'Solución Inventario y Kardex' },
  { valor: 'Seguridad y roles', etiqueta: 'Seguridad y control de acceso' }
];
