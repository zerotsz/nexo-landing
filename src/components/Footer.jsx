import React, { useState } from 'react';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { CONFIG } from '../config.js';
import { enviarCorreos, emailConfigurado } from '../email.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('idle');
  const [aviso, setAviso] = useState('');

  const suscribir = async (e) => {
    e.preventDefault();
    setEstado('enviando');
    try {
      await enviarCorreos({ tipo: 'Suscripción', nombre: 'Suscriptor', email, mensaje: 'Solicitud de novedades' });
      setEstado('ok');
      setEmail('');
    } catch (err) {
      setEstado('error');
      setAviso(err.message === 'EMAIL_NO_CONFIGURADO' ? 'Configure EmailJS en el archivo .env.' : 'No se pudo suscribir. Inténtelo de nuevo.');
    }
  };

  return (
    <footer className="pie">
      <div className="wrap">
        <div className="pie__susc">
          <div>
            <h3>Reciba nuestras novedades</h3>
            <p>Nuevos módulos, mejoras y consejos de gestión de inventario.</p>
          </div>
          <form onSubmit={suscribir}>
            <label htmlFor="susc" className="sr">Correo electrónico</label>
            <input id="susc" type="email" required placeholder="su@correo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="btn btn--p btn--sm" type="submit" disabled={estado === 'enviando'}>
              {estado === 'enviando' ? 'Enviando…' : 'Suscribir'}
            </button>
          </form>
          <p className="pie__msg" role="status" aria-live="polite">
            {estado === 'ok' && '¡Gracias por suscribirse!'}
            {estado === 'error' && aviso}
            {estado === 'idle' && !emailConfigurado() && ''}
          </p>
        </div>

        <div className="pie__cols">
          <div className="pie__marca">
            <Logo pequeno />
            <p>Sistema de inventario y Kardex para negocios que quieren crecer con orden.</p>
            <div className="redes">
              <a href={CONFIG.redes.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href={CONFIG.redes.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="youtube" /></a>
              <a href={CONFIG.redes.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            </div>
          </div>
          <div>
            <h4>Soluciones</h4>
            <a href="#solucion">Inventario y Kardex</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#usos">Casos de uso</a>
          </div>
          <div>
            <h4>NEXO</h4>
            <a href="#porque">¿Por qué NEXO?</a>
            <a href="#nube">En la nube</a>
            <a href="#vision">Hacia dónde vamos</a>
          </div>
          <div>
            <h4>Contáctenos</h4>
            <a href="#contacto">Contacto comercial</a>
            <a href={CONFIG.demoUrl} target="_blank" rel="noopener noreferrer">Probar demo gratis</a>
            {CONFIG.contacto.correo && <span>{CONFIG.contacto.correo}</span>}
            {CONFIG.contacto.ciudad && <span>{CONFIG.contacto.ciudad}</span>}
          </div>
        </div>

        <div className="pie__base">
          <span>© 2026 NEXO Inventario. Todos los derechos reservados.</span>
          <span>Proyecto académico SENATI · Seminario IA 501</span>
        </div>
      </div>
    </footer>
  );
}
