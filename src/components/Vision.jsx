import React from 'react';
import Icon from './Icon.jsx';
import { ArtVision } from '../art/Escenas.jsx';

const ETAPAS = [
  { e: 'Hoy', t: 'Inventario y Kardex', d: 'Productos, proveedores, usuarios, roles y movimientos.' },
  { e: 'Próximo', t: 'Compras, ventas y reportes', d: 'Órdenes de compra, salidas por venta y exportación a Excel y PDF.' },
  { e: 'Luego', t: 'Multi-almacén y lotes', d: 'Stock por almacén, transferencias y fechas de vencimiento.' },
  { e: 'Meta', t: 'Plataforma logística completa', d: 'Todo el recorrido de la mercadería, integrado con su ERP.' }
];

export default function Vision() {
  return (
    <section className="sec" id="vision">
      <div className="wrap dos">
        <div>
          <span className="eyebrow">Hacia dónde vamos</span>
          <h2 className="titulo">Del control de inventario a una logística conectada</h2>
          <p className="sub">
            Queremos que cada negocio, sea pequeño o grande, tenga la misma visibilidad de su mercadería que una gran operación logística, sin la complejidad ni el costo.
          </p>
          <ol className="etapas">
            {ETAPAS.map((x) => (
              <li key={x.e}>
                <span className="etapas__tag">{x.e}</span>
                <div>
                  <h3>{x.t}</h3>
                  <p>{x.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="stat">
            <Icon name="target" size={30} />
            <div>
              <b>1 sola fuente de verdad</b>
              <span>para todo el recorrido de su mercadería</span>
            </div>
          </div>
        </div>
        <div className="arte">
          <ArtVision />
        </div>
      </div>
    </section>
  );
}
