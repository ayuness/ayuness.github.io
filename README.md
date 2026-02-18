# Portfolio - Adolfo Yunes Silva

Sitio web personal (single-page) creado con HTML, CSS y JavaScript vanilla. Está diseñado para ser moderno, limpio y profesional — listo para desplegar en GitHub Pages o Netlify.

Estructura de carpetas

```
My_Webb/
  index.html        # Página principal
  styles.css        # Estilos organizados por secciones
  script.js         # Animaciones e interactividad (reveal, smooth scroll, form)
  assets/
    avatar.svg      # Placeholder para tu foto (reemplazar por tu foto profesional)
  README.md         # Este archivo
```

Cómo personalizar (rápido)

- Reemplaza `assets/avatar.svg` por tu foto profesional (square). Para mantener el círculo, sube una imagen cuadrada y reemplaza el `src` en `index.html`.
- Abre `index.html` y actualiza cualquier texto: tagline, párrafos en About, descripciones de proyectos y experiencia.
- Para añadir proyectos: edita la sección `#projects` — cada `.project-card` es un placeholder.
- Cambia el enlace de LinkedIn y el email si lo necesitas (ya están configurados según tu información).
- Si usas Font Awesome vía kit, reemplaza `yourkitid.js` por tu kit; si prefieres CDN, descomenta el link al CSS de Font Awesome en `index.html`.

Despliegue rápido

- GitHub Pages:
  1. Inicializa git: `git init` (si no hay repo)
  2. Añade, commitea y sube al repositorio en GitHub.
  3. En GitHub repo -> Settings -> Pages -> selecciona la rama `main` y la carpeta `/`.

- Netlify:
  1. Conecta tu repo de GitHub en Netlify.
  2. Selecciona la rama `main` y publica. No se requieren build commands para este sitio (sitio estático).

Notas técnicas

- El formulario de contacto usa `mailto:` para abrir el cliente de correo por defecto; si prefieres una integración con un backend o servicio (Formspree, Netlify Forms), dímelo y lo agrego.
- Animaciones: `IntersectionObserver` para revelar secciones al hacer scroll.
- Tipografía: usa `Inter` desde Google Fonts. Puedes cambiar a `Poppins` si prefieres.

Buenas prácticas al desplegar

- Sustituye la imagen placeholder por una foto profesional en alta resolución (optimiza a ~200KB).
- Añade tu favicon en `index.html` si lo deseas.
- Revisa enlaces externos (LinkedIn) y el kit de Font Awesome.

Si quieres, continuo con:

- Reemplazar el placeholder del avatar por tu foto y ajustar estilos.
- Añadir ejemplos reales de 2-3 proyectos con imágenes, enlaces y badges.
- Integrar Netlify Forms o Formspree para formulario de contacto persistente.

--
Creado para: Adolfo Yunes Silva — Data Science Student at ITAM
# My_Webb