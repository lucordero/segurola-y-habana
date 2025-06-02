# Página Web de Segurola y Habana FC

Este repositorio contiene el código fuente de la página de aterrizaje (landing page) para el equipo de fútbol amateur "Segurola y Habana". La página está construida con [Astro](https://astro.build/) y estilizada con [Tailwind CSS](https://tailwindcss.com/).

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
│   ├── images/                 # Directorio para todas las imágenes
│   │   ├── logo-syh.png        # Logo principal del equipo
│   │   ├── players/            # Imágenes de los jugadores
│   │   └── matches/            # Fotos de los partidos
│   └── favicon.svg             # Favicon del sitio
├── src/
│   ├── components/             # Componentes reutilizables de Astro
│   │   ├── Header.astro
│   │   ├── PlayerCarousel.astro
│   │   ├── MatchPhotos.astro
│   │   ├── ResultsList.astro
│   │   └── Footer.astro
│   ├── layouts/                # Plantillas base para las páginas
│   │   └── Layout.astro
│   ├── pages/                  # Páginas del sitio
│   │   └── index.astro         # Página principal
│   └── env.d.ts                # Definiciones de tipos para Astro
├── astro.config.mjs            # Configuración de Astro
├── tailwind.config.mjs         # Configuración de Tailwind CSS
├── package.json
└── README.md                   # Este archivo
```

## Requisitos Previos

*   Node.js (se recomienda la última versión LTS)
*   npm (o pnpm, yarn)

## Instalación

1.  Clona este repositorio:
    ```bash
    git clone https://URL_DEL_REPOSITORIO_AQUI
    cd NOMBRE_DEL_DIRECTORIO_DEL_PROYECTO
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

---

¡Vamos Segurola y Habana!
```

**Instrucciones Adicionales:**

1.  **URL del Repositorio:** No olvides reemplazar `https://URL_DEL_REPOSITORIO_AQUI` con la URL real de tu repositorio Git.
2.  **Nombre del Directorio:** Cambia `NOMBRE_DEL_DIRECTORIO_DEL_PROYECTO` por el nombre de la carpeta que se crea al clonar el repositorio.
3.  Guarda este contenido como `README.md` en la raíz de tu proyecto.

Este README debería proporcionar una buena guía para cualquiera que quiera entender, configurar o contribuir al proyecto.

