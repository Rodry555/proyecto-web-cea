# Arquitectura Front-end del Sitio Web

## 1. Enfoque General

El sitio se desarrollará utilizando **HTML5, CSS3 y JavaScript vanilla** para las funcionalidades interactivas. Evitaremos frameworks complejos a menos que sea estrictamente indispensable para no introducir complejidad innecesaria. El foco estará en el uso de JavaScript para el carrito de reservas dinámico, los filtros del catálogo, el mapa interactivo y el chatbot. Todo el resto de la interfaz será estática y responsiva mediante CSS.

El código será **sencillo, legible y autoexplicativo**, priorizando nombres en español para clases, IDs y archivos, de modo que cualquier persona con conocimientos básicos pueda entender y modificar el proyecto.

## 2. Estructura de Archivos y Carpetas
proyecto-belleza/
│
├── index.html
├── catalogo.html
├── contacto.html
├── carrito.html
├── reserva-confirmada.html
│
├── css/
│ ├── estilos-principales.css
│ ├── estilos-index.css
│ ├── estilos-catalogo.css
│ ├── estilos-carrito.css
│ ├── estilos-formularios.css
│ └── estilos-responsive.css
│
├── js/
│ ├── scripts-globales.js
│ ├── catalogo.js (para la lógica de filtros y ordenación)
│ └── carrito.js (para la lógica del carrito de reservas)
│
├── imagenes/
│ ├── productos/
│ ├── servicios/
│ └── iconos/
│
├── fuentes/ (si se usan fuentes locales)
│
└── chatbot/ (si se integra una solución externa como Chatbase, solo su script de integración, o la lógica de nuestro chatbot)

## 3. Reglas de Nomenclatura (HTML, CSS, IDs y Clases)

- **Idioma**: Español.
- **Formato**: Todo en minúsculas, palabras separadas por guión (`-`).
- **Clases**: Descriptivas del contenido o función, no de la apariencia.
- **IDs**: Reservados para elementos únicos por página (ej. `#carrito-icono`, `#formulario-reserva`).

### Ejemplos de nombres válidos:

| Tipo | Ejemplo |
|------|---------|
| Clase de contenedor | `.contenedor-principal` |
| Clase de tarjeta de producto | `.tarjeta-producto` |
| Clase de botón | `.boton-reservar` |
| Clase de descuento | `.precio-descuento` |
| ID del formulario | `#formulario-reserva-rapida` |
| ID del carrito | `#carrito-lateral` |
| Clase de mensaje de chatbot | `.mensaje-ia` |
| Clase de filtros | `.filtro-categoria` |

### Nombres de archivos CSS:

- `estilos-principales.css` → estilos globales (tipografía, colores, header, footer, etc.)
- `estilos-catalogo.css` → grid de productos, tarjetas, filtros.
- `estilos-carrito.css` → tabla de productos reservados, resumen.
- `estilos-formularios.css` → inputs, botones, validaciones visuales.
- `estilos-responsive.css` → media queries y ajustes móviles.

## 4. Estructura HTML Base (index.html)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Nombre del Negocio - Belleza Integral</title>
    <link rel="stylesheet" href="css/estilos-principales.css">
    <link rel="stylesheet" href="css/estilos-responsive.css">
    <!-- Los demás CSS se cargarán según la página -->
</head>
<body>

    <!-- Cabecera común -->
    <header class="cabecera">
        <div class="logo">
            <img src="imagenes/logo.svg" alt="Logo del negocio">
        </div>
        <nav class="menu-principal">
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="catalogo.html">Catálogo</a></li>
                <li><a href="servicios.html">Mis Servicios</a></li>
                <li><a href="como-reservar.html">Cómo Reservar</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
        <div class="carrito-icono" id="carrito-icono">
            <a href="carrito.html">
               <span class="contador-reservas">0</span>
            </a>
        </div>
    </header>

    <!-- Contenido principal de cada página -->
    <main class="contenedor-principal">
        <!-- Aquí irá el contenido específico -->
    </main>

    <!-- Pie de página -->
    <footer class="pie-pagina">
        <div class="info-contacto">
            <p> Dirección: Calle Falsa 123, Lima</p>
            <p> Teléfono: +51 987 654 321</p>
            <p> correo@negocio.com</p>
        </div>
        <div class="enlaces-legales">
            <a href="libro-reclamaciones.html">Libro de Reclamaciones</a>
            <a href="politica-privacidad.html">Política de Privacidad</a>
            <a href="politica-reservas.html">Política de Reservas</a>
        </div>
        <div class="copyright">
            &copy; 2025 - Nombre del Negocio
        </div>
    </footer>

    <!-- Solo si es indispensable: script para el chatbot o para reserva -->
    <!-- <script src="js/chatbot.js" defer></script> -->
</body>
</html>
```

## 5. Habilidades y Documentación de Referencia
Para tareas específicas, consulta y sigue estrictamente los archivos en la carpeta `/skills/`:
- **Gestión de Git**: `/skills/gestion-git.md` (Uso de commits).
- **Arquitectura**: `/skills/diseno-responsivo-bolivia.md` (diseño resposivo).
