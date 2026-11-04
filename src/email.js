import emailjs from '@emailjs/browser';
import { CONFIG } from './config.js';

const env = import.meta.env || {};

export const emailConfigurado = () =>
  Boolean(env.VITE_EMAILJS_SERVICE_ID && env.VITE_EMAILJS_TEMPLATE_ID && env.VITE_EMAILJS_PUBLIC_KEY);

/**
 * Envía la autorrespuesta al cliente (plantilla con logo y servicios) y, si existe,
 * el aviso interno al equipo. El cliente solo ve un error si falla la autorrespuesta.
 */
export async function enviarCorreos(d) {
  if (!emailConfigurado()) throw new Error('EMAIL_NO_CONFIGURADO');

  const opciones = { publicKey: env.VITE_EMAILJS_PUBLIC_KEY };
  const params = {
    tipo: d.tipo || 'Contacto',
    to_name: d.nombre,
    to_email: d.email,
    reply_to: d.email,
    empresa: d.empresa || '—',
    cargo: d.cargo || '—',
    telefono: d.telefono || '—',
    pais: d.pais || '—',
    mensaje: d.mensaje || '—',
    folleto: d.folleto || '—',
    logo_url: `${CONFIG.siteUrl}/logo-email.png`,
    demo_url: CONFIG.demoUrl,
    web_url: CONFIG.siteUrl,
    contacto_email: CONFIG.contacto.correo || '',
    contacto_telefono: CONFIG.contacto.telefono || '',
    fecha: new Date().toLocaleString('es-PE')
  };

  await emailjs.send(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_ID, params, opciones);

  if (env.VITE_EMAILJS_TEMPLATE_NOTIFY) {
    try {
      await emailjs.send(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_NOTIFY, params, opciones);
    } catch {
      /* el aviso interno es opcional */
    }
  }
}
