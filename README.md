# Página Web de Segurola y Habana FC

Este repositorio contiene el código fuente de la página de aterrizaje (landing page) para el equipo de fútbol amateur "Segurola y Habana". La página está construida con [Astro](https://astro.build/) y estilizada con [Tailwind CSS](https://tailwindcss.com/), también utilizando ocasionalmente [Preact](https://preactjs.com/).

## Características

*   **Header:** Logo del equipo, nombre y menú de navegación.
*   **Carrusel de Jugadores:** Muestra los miembros del equipo con foto, nombre y posición.
*   **Fotos de Partidos:** Galería con imágenes destacadas de los encuentros.
*   **Últimos Resultados:** Lista de los resultados más recientes de los partidos.
*   **Footer:** Información de copyright y un guiño a la inspiración del equipo.
*   **Diseño Responsivo:** Adaptable a diferentes tamaños de pantalla.

## Estructura del Proyecto

```
/
├── public/
│   ├── images/                 # Directorio para imágenes generales
│   ├── matches/                # Recursos específicos de partidos
│   ├── players/                # Imágenes de jugadores
│   ├── image0.jpg              # Imagen de ejemplo
│   ├── logo-syl.svg            # Logo del equipo
│   └── favicon.svg             # Favicon del sitio
├── src/
│   ├── assets/
│   │   ├── astro.svg           # Logo del framework Astro
│   │   ├── background.svg      # Imagen de fondo
│   │   └── placeholder.svg     # Imagen de reemplazo temporal
│   ├── components/
│   │   ├── MatchPhoto/         # Componentes de fotos de partidos
│   │   ├── MatchPhotoGallery.astro
│   │   ├── MatchPhotos.astro
│   │   ├── ModalPhotolviewer.tex
│   │   ├── PreviewGallery.astro
│   │   ├── PlayerCarousel/     # Componentes del carrusel de jugadores
│   │   │   ├── PlayerCarousel.astro
│   │   │   └── PlayerCarouselIsland.tex
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── ResultsList.astro
│   ├── data/
│   │   ├── matchPhotos.js      # Datos de fotos de partidos
│   │   └── players.js          # Datos de jugadores
│   ├── layouts/
│   │   └── Layout.astro        # Plantilla principal de diseño
│   ├── pages/
│   │   ├── matches/
│   │   │   ├── [id].astro      # Página dinámica de detalle de partido
│   │   │   └── index.astro     # Listado de partidos
│   │   └── index.astro         # Página de inicio
│   └── styles/
│       └── global.css          # Estilos globales
├── astro.config.mjs            # Configuración de Astro
├── tailwind.config.mjs         # Configuración de Tailwind CSS
├── package.json
└── README.md
```

## Requisitos Previos

*   Node.js (se recomienda la última versión LTS)
*   npm (o pnpm, yarn)

## Instalación

1.  Clona este repositorio:
    ```bash
    git clone https://github.com/lucordero/segurola-y-habana
    cd segurola-y-habana
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    ```
    O si usas `pnpm`:
    ```bash
    pnpm install
    ```

## Ejecutar el Proyecto en Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
npm run dev
```

Esto iniciará la aplicación en `http://localhost:4321` (o el puerto que Astro indique). La página se recargará automáticamente al realizar cambios en los archivos.

## Cómo Editar el Contenido

Todo el contenido es estático y se gestiona directamente en los archivos de componentes de Astro.

### 1. Imágenes

*   **Logo del Equipo:** Reemplaza `public/images/logo-syh.png` con tu archivo de logo. Si el nombre es diferente, actualiza la ruta en `src/components/Header.astro`.
*   **Fotos de Jugadores:**
    1.  Coloca las imágenes de los jugadores en la carpeta `public/images/players/`.
    2.  Abre el archivo `src/components/PlayerCarousel.astro`.
    3.  Modifica el array `players` al inicio del script (`---`) para actualizar nombres, posiciones y las rutas a las imágenes (`imageUrl`). Ejemplo:
        ```javascript
        const players = [
          { name: "Diego Maradona", position: "Enganche", imageUrl: "/images/players/diego.jpg" },
          // ... más jugadores
        ];
        ```
*   **Fotos de Partidos:**
    1.  Coloca las fotos de los partidos en la carpeta `public/images/matches/`.
    2.  Abre el archivo `src/components/MatchPhotos.astro`.
    3.  Modifica el array `matchPhotos` para actualizar el texto alternativo (`altText`) y las rutas a las imágenes (`imageUrl`).

### 2. Últimos Resultados

1.  Abre el archivo `src/components/ResultsList.astro`.
2.  Modifica el array `results` para añadir, eliminar o cambiar los resultados de los partidos. Asegúrate de incluir fecha, oponente, marcador y el estado (`Win`, `Loss`, `Draw`). Ejemplo:
    ```javascript
    const results = [
      { date: "2025-06-01", opponent: "Floresta United", score: "2 - 0", status: "Win" },
      // ... más resultados
    ];
    ```

### 3. Textos Generales

*   **Título y Descripción del Sitio:** Modifica las props `title` y `description` en `src/layouts/Layout.astro` o directamente en `src/pages/index.astro` dentro del componente `<Layout>`.
*   **Textos del Header y Footer:** Edita directamente los archivos `src/components/Header.astro` y `src/components/Footer.astro`.
*   **Textos de la Sección Hero (Principal):** Edita el contenido dentro de la etiqueta `<section>` en `src/pages/index.astro`.

## Construcción para Producción (Build)

Para generar una versión optimizada y estática del sitio para producción:

```bash
npm run build
```

Los archivos generados se encontrarán en la carpeta `dist/`. Estos son los archivos que debes desplegar en tu servidor o plataforma de hosting.

## Tecnologías Utilizadas

*   **Astro:** Framework para construir sitios web rápidos y orientados al contenido.
*   **Tailwind CSS:** Framework CSS de utilidad primero para un diseño rápido y personalizado.
*   **Preact:** Utilizado como motor de renderizado para los componentes de Astro.

---

¡Vamos Segurola y Habana!
