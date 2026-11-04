# NEXO Inventario · Landing page (React + Vite)

Página comercial del sistema de inventario. Explica **qué es**, **para qué se usa** y **hacia dónde va** el producto, con un botón **"Probar demo gratis"** que abre el panel de inventario y un formulario de contacto que envía correos con **EmailJS**.

Sigue el mismo recorrido que una landing corporativa de software de almacenes: hero, indicadores, solución, beneficios, capacidades avanzadas, por qué elegirlo, casos de uso, nube, visión a futuro, formulario y pie con suscripción. Todos los textos, el logo y las ilustraciones son propios de NEXO (ilustraciones isométricas dibujadas en SVG dentro de `src/art/`).

```
landing-web/
├── index.html
├── vercel.json              # despliegue en Vercel
├── .env.example             # variables (EmailJS, enlaces, contacto)
├── public/                  # favicon.svg, logo.svg, logo-email.png (logo para el correo)
├── docs/
│   ├── emailjs-autorespuesta.html   # correo al cliente: logo + servicios
│   └── emailjs-aviso-equipo.html    # aviso interno (opcional)
└── src/
    ├── config.js            # servicios, países, folletos, enlaces
    ├── email.js             # envío con @emailjs/browser
    ├── art/                 # ilustraciones propias (isométricas y diagramas)
    └── components/          # Header, Hero, Indicadores, Solucion, Capacidades, PorQue, Usos, Nube, Vision, Contacto, Footer
```

## 1. Ejecutar en local
```bash
cd landing-web
cp .env.example .env     # en Windows: copy .env.example .env
npm install
npm run dev              # http://localhost:5174
```
Para que el botón de demo funcione, tenga corriendo el panel (`frontend`, puerto 5173) y el backend.

## 2. Configurar EmailJS (correo con logo y servicios)
1. Cree una cuenta en https://www.emailjs.com y en **Email Services** conecte su Gmail. Copie el **Service ID**.
2. En **Email Templates** cree la plantilla **autorrespuesta**: pegue `docs/emailjs-autorespuesta.html` en el editor de código y configure `To Email: {{to_email}}` y el asunto indicado en el comentario del archivo. Copie el **Template ID**.
3. *(Opcional)* Cree otra plantilla con `docs/emailjs-aviso-equipo.html`, con su correo fijo en `To Email`. Su ID va en `VITE_EMAILJS_TEMPLATE_NOTIFY`.
4. En **Account > General** copie la **Public Key**.
5. Complete `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   VITE_EMAILJS_TEMPLATE_NOTIFY=template_yyyyyyy
   VITE_SITE_URL=https://su-landing.vercel.app
   VITE_DEMO_URL=https://su-panel.vercel.app
   ```
   Reinicie `npm run dev` después de cambiar el `.env`.

> **El logo en el correo:** los correos no muestran bien los SVG, por eso se usa `public/logo-email.png`. La imagen se carga desde `VITE_SITE_URL`, así que el logo aparece cuando la landing ya está publicada (en local, con `localhost`, no se verá en el correo recibido).
> **Plan gratuito de EmailJS:** tiene un límite mensual de envíos. Si envía autorrespuesta y aviso, cada consulta usa dos.
> **Textos de servicios:** edítelos en `src/config.js` (página) y en `docs/emailjs-autorespuesta.html` (correo) para que coincidan.

## 3. Despliegue completo (Vercel + Railway + Supabase)

| Pieza | Plataforma | Carpeta raíz | Variables clave |
|---|---|---|---|
| Landing | **Vercel** | `landing-web` | `VITE_EMAILJS_*`, `VITE_SITE_URL`, `VITE_DEMO_URL` |
| Panel de inventario | **Vercel** | `frontend` | `VITE_API_URL=https://su-api.up.railway.app/api` |
| API (Express) | **Railway** | `backend` | `PORT`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `CORS_ORIGIN`, datos de la base |
| Base de datos | **Supabase** | n/a | cadena de conexión de Postgres |

Orden recomendado:
1. **Supabase:** cree el proyecto y copie los datos de conexión (Project Settings > Database).
2. **Railway:** nuevo proyecto desde GitHub (repositorio del backend), con las variables anteriores. `CORS_ORIGIN` debe ser la URL del panel en Vercel, sin barra final. La landing no consulta la API, así que no necesita permiso de CORS.
3. **Vercel (panel):** importe el repositorio del frontend, con `VITE_API_URL` apuntando a Railway.
4. **Vercel (landing):** importe este proyecto. Framework **Vite**, y agregue las variables del `.env`.
5. Ponga la URL del panel en `VITE_DEMO_URL` de la landing y vuelva a desplegar.

> **Importante, base de datos:** el backend actual usa **MySQL** (mysql2). **Supabase es PostgreSQL**, así que hay que cambiar el *dialect* de Sequelize a `postgres` (paquetes `pg` y `pg-hstore`, cadena de conexión con SSL). Es un cambio pequeño y localizado en `backend/src/config/database.js`. Si prefiere seguir con MySQL, Railway ofrece MySQL propio y no hay que tocar el código.

## Qué falta que usted defina
- Correo, teléfono y ciudad reales (`VITE_CONTACT_*`). Si quedan vacíos, no se muestran.
- Enlaces reales de LinkedIn y YouTube en `src/config.js`.
- Los números de la franja de indicadores son datos reales del producto (5 módulos, 3 roles, etc.). Cuando tenga clientes, puede reemplazarlos por cifras de uso.
