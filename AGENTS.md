# Arquitectura Front-end del Sitio Web

## 1. Enfoque General

El sitio se desarrollará utilizando **HTML5, CSS3 y JavaScript vanilla** para las funcionalidades interactivas. Evitaremos frameworks complejos a menos que sea estrictamente indispensable para no introducir complejidad innecesaria. El foco estará en el uso de JavaScript para el carrito de reservas dinámico, los filtros del catálogo, el mapa interactivo y el chatbot. Todo el resto de la interfaz será estática y responsiva mediante CSS.

El código será **sencillo, legible y autoexplicativo**, priorizando nombres en español para clases, IDs y archivos, de modo que cualquier persona con conocimientos básicos pueda entender y modificar el proyecto.

## 2. Reglas de Nomenclatura (HTML, CSS, IDs y Clases)

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
