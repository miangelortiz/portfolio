# Miguel Angel Ortiz Olid — CV Interactivo

> Desarrollador Backend Sénior | Especialista en IoT  
> [maortizolid@gmail.com](mailto:maortizolid@gmail.com) · [linkedin.com/in/maortizolid](https://linkedin.com/in/maortizolid) · [github.com/miangelortiz](https://github.com/miangelortiz)

Currículum web interactivo construido sin frameworks ni compilación. Desplegado en  [portfolio-maortiz.vercel.app](https://portfolio-maortiz.vercel.app) y compatible con cualquier servidor estático.

---

## Características

- **Bilingüe ES / EN** — Traducción dinámica en tiempo real sin recarga de página, incluyendo tooltips y terminal CLI.
- **Tema claro / oscuro** — Detección automática del sistema con persistencia en `localStorage`.
- **Terminal CLI integrada** — Consola Unix simulada con comandos `help`, `cv`, `skills`, `experience`, `contact`, `neofetch`, `api`, `theme`, `lang`, `clear` y `exit`. El comando `api` devuelve el CV completo en JSON con resaltado de sintaxis.
- **Easter egg F12** — Mensaje de bienvenida en la consola del navegador con los datos del CV disponibles como `window.cvData`.
- **Dock flotante glassmorphic** — Menú de controles fijo en la base central con efectos de desenfoque, aura glow en hover y tooltips estilo terminal.
- **Optimizado para impresión A4** — Generación de PDF de exactamente 2 páginas vía `@media print` y `@page`.
- **Acelerado con agentes de IA** — Flujo de trabajo de desarrollo asistido por Claude Code y Gemini CLI.

---

## Exportar a PDF

1. Abre [portfolio-maortiz.vercel.app](https://portfolio-maortiz.vercel.app) en Chrome, Edge o Safari.
2. Pulsa el botón de impresora del dock inferior o `Ctrl + P`.
3. Configura: destino **Guardar como PDF**, tamaño **A4**, márgenes **predeterminados**, cabeceras y pies de página **desactivados**.
4. Guarda. El resultado son exactamente **2 páginas limpias**.

---

## Tests de integración

El proyecto incluye una suite **Playwright** que cubre carga de página, alternancia de tema, traducción dinámica, apertura/cierre de la terminal y procesamiento de comandos. Se ejecuta en Chromium, Firefox y WebKit en paralelo.

```bash
npm install
npx playwright install
npm run test        # 15 tests en 3 navegadores
npm run test:ui     # Dashboard visual interactivo
```

---

## Estructura

```
portfolio/
├── assets/
│   ├── css/style.css          # Estilos, glassmorphism, responsive, @media print
│   ├── js/script.js           # Traducciones, lógica CLI, temas
│   └── img/                   # Fotografía de perfil
├── tests/cv.spec.js           # Suite de integración Playwright
├── index.html                 # Estructura semántica del CV
├── package.json
└── playwright.config.js
```

## Stack

`HTML5` · `CSS3` · `JavaScript ES6+` · `Playwright`

---

## Licencia y Copyright

El código fuente de este proyecto está publicado bajo la **[Licencia MIT](./LICENSE)**.

No obstante, todo el contenido personal — incluyendo, entre otros, textos del perfil, descripciones de experiencia laboral, datos del CV y fotografías — es **Copyright © 2026 Miguel Angel Ortiz Olid** y no puede ser reutilizado ni reproducido sin permiso explícito y por escrito.


