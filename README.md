# Provia Consulting — sitio web

Sitio construido con Next.js (App Router) + TypeScript + Tailwind CSS.

## 🚀 Estructura del proyecto

```text
/
├── public/
│   ├── Images/
│   ├── scripts/contact-form.js
│   ├── favicon.svg
│   └── robots.txt
├── app/
│   ├── layout.tsx        # metadata global, JSON-LD, fuentes
│   ├── page.tsx           # página principal
│   ├── contacto/page.tsx  # página de contacto (formulario)
│   ├── globals.css
│   └── sitemap.xml/route.ts
├── components/
│   ├── Header.tsx
│   ├── Soluciones.tsx      # hero
│   ├── QuienesSomos.tsx
│   ├── NuestrosServicios.tsx  # carrusel Swiper
│   ├── PorqueElegirnos.tsx
│   ├── Contactanos.tsx     # teaser de contacto (home)
│   ├── ContactForm.tsx     # formulario (Formspree), usado en /contacto
│   └── Footer.tsx
└── package.json
```

## 🧞 Comandos

| Comando         | Acción                                          |
| :-------------- | :----------------------------------------------- |
| `npm install`    | Instala las dependencias                         |
| `npm run dev`    | Inicia el servidor de desarrollo en `localhost:3000` |
| `npm run build`  | Genera el build de producción                    |
| `npm run start`  | Sirve el build de producción                      |
| `npm run lint`   | Corre el linter de Next.js                       |

El formulario de contacto envía a Formspree — ver [FORMSPREE_SETUP.md](./FORMSPREE_SETUP.md).
