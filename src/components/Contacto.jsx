import React, { useState } from 'react';
import Icon from './Icon.jsx';
import { CONFIG, FOLLETOS, PAISES, SERVICIOS } from '../config.js';
import { enviarCorreos, emailConfigurado } from '../email.js';

const VACIO = { nombre: '', empresa: '', cargo: '', telefono: '', email: '', pais: '', mensaje: '', folleto: FOLLETOS[0].valor, web: '' };

export default function Contacto() {
  const [d, setD] = useState(VACIO);
  const [estado, setEstado] = useState('idle'); // idle | enviando | ok | error
  const [aviso, setAviso] = useState('');

  const cambiar = (e) => setD({ ...d, [e.target.name]: e.target.value });

  const enviar = async (e) => {
    e.preventDefault();
    if (d.web) return; // campo trampa para robots
    setEstado('enviando');
    setAviso('');
    try {
      await enviarCorreos({ ...d, tipo: 'Contacto' });
      setEstado('ok');
      setD(VACIO);
    } catch (err) {
      setEstado('error');
      setAviso(
        err.message === 'EMAIL_NO_CONFIGURADO'
          ? 'El envío de correos aún no está configurado. Complete las variables VITE_EMAILJS_* en el archivo .env.'
          : 'No pudimos enviar su mensaje. Revise sus datos e inténtelo de nuevo.'
      );
    }
  };

  return (
    <section className="sec sec--alt" id="contacto">
      <div className="wrap contacto">
        <div className="contacto__info">
          <span className="eyebrow">Contacto</span>
          <h2 className="titulo">Conecte con nuestros especialistas</h2>
          <p className="sub">Cuéntenos cómo trabaja hoy su almacén. Le responderemos con una propuesta y un correo con todo lo que NEXO ofrece.</p>

          <h3 className="contacto__sub">Lo que recibirá en su correo</h3>
          <ul className="servicios">
            {SERVICIOS.map((s) => (
              <li key={s.titulo}>
                <span className="servicios__ico"><Icon name={s.icono} /></span>
                <div>
                  <b>{s.titulo}</b>
                  <span>{s.texto}</span>
                </div>
              </li>
            ))}
          </ul>

          {(CONFIG.contacto.correo || CONFIG.contacto.telefono || CONFIG.contacto.ciudad) && (
            <ul className="datos">
              {CONFIG.contacto.correo && <li><Icon name="mail" />{CONFIG.contacto.correo}</li>}
              {CONFIG.contacto.telefono && <li><Icon name="phone" />{CONFIG.contacto.telefono}</li>}
              {CONFIG.contacto.ciudad && <li><Icon name="pin" />{CONFIG.contacto.ciudad}</li>}
            </ul>
          )}
        </div>

        <form className="form" onSubmit={enviar} noValidate={false}>
          <div className="form__fila">
            <label htmlFor="nombre">Nombre y apellido *
              <input id="nombre" name="nombre" value={d.nombre} onChange={cambiar} required autoComplete="name" />
            </label>
            <label htmlFor="empresa">Empresa *
              <input id="empresa" name="empresa" value={d.empresa} onChange={cambiar} required autoComplete="organization" />
            </label>
          </div>
          <div className="form__fila">
            <label htmlFor="cargo">Cargo en la empresa *
              <input id="cargo" name="cargo" value={d.cargo} onChange={cambiar} required autoComplete="organization-title" />
            </label>
            <label htmlFor="telefono">Teléfono
              <input id="telefono" name="telefono" type="tel" value={d.telefono} onChange={cambiar} autoComplete="tel" />
            </label>
          </div>
          <div className="form__fila">
            <label htmlFor="email">Email *
              <input id="email" name="email" type="email" value={d.email} onChange={cambiar} required autoComplete="email" />
            </label>
            <label htmlFor="pais">País *
              <select id="pais" name="pais" value={d.pais} onChange={cambiar} required>
                <option value="">Seleccione…</option>
                {PAISES.map((p) => <option key={p}>{p}</option>)}
              </select>
            </label>
          </div>
          <label htmlFor="mensaje">Mensaje
            <textarea id="mensaje" name="mensaje" rows="4" value={d.mensaje} onChange={cambiar} placeholder="¿Qué productos maneja y qué le gustaría mejorar?" />
          </label>

          <fieldset className="folletos">
            <legend>Quiero recibir el folleto de</legend>
            {FOLLETOS.map((f) => (
              <label key={f.valor} className={`folleto ${d.folleto === f.valor ? 'folleto--on' : ''}`}>
                <input type="radio" name="folleto" value={f.valor} checked={d.folleto === f.valor} onChange={cambiar} />
                {f.etiqueta}
              </label>
            ))}
          </fieldset>

          <input className="trampa" name="web" tabIndex="-1" autoComplete="off" aria-hidden="true" value={d.web} onChange={cambiar} />

          <button className="btn btn--p btn--bloque" type="submit" disabled={estado === 'enviando'}>
            {estado === 'enviando' ? 'Enviando…' : 'Enviar'}
          </button>

          <div className="form__estado" role="status" aria-live="polite">
            {estado === 'ok' && <p className="ok"><Icon name="check" />¡Gracias! El correo fue enviado </p>}
            {estado === 'error' && <p className="mal">{aviso}</p>}
            {estado === 'idle' && !emailConfigurado() && <p className="pista">Modo desarrollo: configure EmailJS en <code>.env</code> para enviar correos reales.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
