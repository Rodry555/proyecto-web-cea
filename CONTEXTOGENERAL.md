# Especificaciones del Proyecto: Sitio Web para Egresado en Belleza Integral (Modelo Híbrido)

## 1. Visión General del Proyecto

Se desarrollará un sitio web profesional para un **egresado en belleza integral** que posee una tienda física. El sitio actuará como una **extensión digital de su negocio físico**, permitiendo a los clientes:

- Consultar el catálogo completo de productos (maquillaje, cuidado facial, corporal, capilar, etc.) con precios y disponibilidad.
- Reservar productos online con un descuento especial, pagando directamente en la tienda física al momento de la recogida.
- Conocer los servicios profesionales que ofrece (tratamientos faciales, corporales, etc.) y contactar para agendar citas.
- Interactuar con un **asistente virtual (chatbot IA)** restringido exclusivamente a responder preguntas sobre los productos del catálogo y el proceso de reserva.

**No incluirá** pasarela de pago online ni sistema de envíos a domicilio. El objetivo es potenciar la afluencia a la tienda física, fidelizar clientes mediante descuentos por reserva anticipada y posicionar al egresado como un referente local de belleza integral.

## 2. Público Objetivo

- **Clientes finales** (mujeres y hombres) interesados en productos de belleza (maquillaje, cuidado facial, corporal, capilar), que valoran la comodidad de ver el catálogo online y el ahorro por reservar.
- **Usuarios recurrentes** de la tienda física que desean agilidade sus compras y aprovechar descuentos.
- **Usuarios que buscan Kits y Sets** con descuento especial por ser conjuntos de productos.

## 3. Estructura y Navegación del Sitio

El sitio tendrá las siguientes secciones principales (estructura de navegación):

### 3.1. Página de Inicio
- **Header**: Logo, menú de navegación (Inicio, Catálogo, Asistente IA, Contacto), icono del carrito/reserva.
- **Hero banner**: Imagen atractiva de productos + llamado a la acción destacado: *"Reserva online, paga en tienda y ahorra un 10%"*.
- **Productos destacados**: Muestra de 4-6 productos con foto, precio y botón "Reservar".
- **Carrusel "Cómo Reservar"**: Sección interactiva con carrusel CSS puro que muestra los 3 pasos del proceso de reserva.
- **Sección Asistente IA**: Invitación a interactuar con el chatbot de asistencia, con descripción de capacidades y botón para iniciar conversación.
- **Testimonios**: Carrusel horizontal con opiniones de clientes.
- **Footer**: Enlaces a políticas de reserva, libro de reclamaciones, aviso de privacidad, contacto, horarios y dirección de la tienda física.

### 3.2. Catálogo de Productos
- Visualización en cuadrícula (grid) con filtros por categoría.
- **Categorías principales** (las 5 principales del negocio):
  - Maquillaje
  - Cuidado Facial
  - Cuidado Corporal
  - Cuidado Capilar
  - Kits y Sets (con descuento adicional por ser conjuntos de productos)
- **Filtros secundarios** (opcionales):
  - Por valor (vegano, cruelty-free, natural)
- **Ficha de cada producto** incluirá:
  - Imagen principal
  - Nombre y marca
  - Descripción detallada
  - Precio normal (ej. $50.000)
  - **Precio con descuento por reserva** (ej. $45.000, destacado visualmente)
  - Indicador de stock aproximado (“Disponible en tienda”, “Últimas unidades”)
  - Botón principal: **“Reservar con X% dto”** (el porcentaje se define según estrategia, sugerido 10%).
  - Botón secundario: “Añadir a mi lista” (opcional, para guardar productos favoritos sin compromiso de reserva).

### 3.3. Sistema de Reserva (Carrito sin pago online)
- **Carrito de reserva**: Accesible desde el icono en el header. Muestra los productos añadidos, cantidades, subtotal, descuento aplicado y total a pagar en tienda.
- **Flujo de reserva**:
  1. El usuario añade productos al carrito.
  2. Hace clic en “Confirmar reserva”.
  3. Se le solicita un **formulario mínimo**: nombre, correo electrónico, número de teléfono (opcional pero recomendado para recordatorios).
  4. El sistema genera un **código de reserva único** (alfanumérico, ej. `RES-1234XYZ`).
  5. Se envía un email y/o SMS al usuario con:
     - Lista de productos reservados.
     - Código de reserva.
     - Total a pagar (con descuento aplicado).
     - Dirección y horario de la tienda física.
     - Plazo de recogida (ej. 48 horas) y condiciones.
  6. Opcional: El usuario puede descargar/guardar un comprobante PDF.
- **Lógica de expiración**: Las reservas no pagadas caducan automáticamente tras el plazo establecido (configurable desde el panel de administración). Se envía un recordatorio automático 12 horas antes de la caducidad.
- **Panel de administración para el negocio**:
  - Ver todas las reservas activas, caducadas y completadas.
  - Buscar por código o datos del cliente.
  - Marcar una reserva como “recogida y pagada” (esto libera stock conceptualmente, aunque el stock real se gestiona en tienda).
  - Opción de anular reserva manualmente.
  - Configurar el porcentaje de descuento general o por producto/categoría.

### 3.4. Carrusel "Cómo Reservar" (en Página de Inicio)
Carrusel interactivo (CSS puro) que muestra los 3 pasos del proceso de reserva:
1. **Elegí tus productos**: Explorá el catálogo y agregá al carrito.
2. **Confirmá tu reserva**: Completá el formulario y recibí tu código único.
3. **Pasá a retirar y pagar**: Acudí a la tienda en 48 horas, mostrá tu código y pagá con descuento.

### 3.5. Sección Asistente IA (en Página de Inicio)
- Invitación a interactuar con el chatbot de asistencia.
- Descripción de capacidades del asistente (precios, disponibilidad, proceso de reserva, horarios).
- Botón para iniciar conversación con el chatbot.

### 3.6. Contacto y Ubicación
- Mapa interactivo (Google Maps) con la dirección exacta.
- Horario de atención de la tienda física.
- Teléfono, correo electrónico y enlace directo a WhatsApp Business.
- Formulario de contacto general (nombre, email, mensaje).

## 4. Características Técnicas y Lógica del Sitio

### 4.1. Chatbot IA de Asistencia (Restringido a Catálogo)
- **Implementación**: Integrar un chatbot entrenado con la información del sitio (textos de productos, precios, descuentos, políticas de reserva). Herramientas sugeridas: Chatbase, Botpress, o la opción nativa de plataformas como Shopify (con apps tipo “Tidio” + integración de IA).
- **Alcance estricto**:
  - Responde únicamente preguntas relacionadas con:
    - Productos del catálogo (existencia, precio, descuento, stock aproximado).
    - Cómo funciona el sistema de reserva y descuento.
    - Dirección y horario de la tienda.
  - **No responde** a preguntas de asesoría cosmética personalizada (“¿Qué base me va bien para piel grasa?”), tendencias, marcas no vendidas, ni consejos profesionales. En esos casos, responde con un mensaje estándar: *“Para una recomendación personalizada, te invitamos a visitar nuestra tienda física o contactarnos directamente. ¿Puedo ayudarte con el precio o disponibilidad de algún producto de nuestro catálogo?”*.
- **Lógica de entrenamiento**: Se carga un conjunto de datos que incluye:
  - La ficha de cada producto (nombre, precio, descuento, categoría).
  - La página “Cómo reservar” y las políticas.
  - Preguntas frecuentes predefinidas (FAQ).
- **Interfaz**: Ventana flotante en la esquina inferior derecha, con bienvenida personalizada. Puede incluir botones de acceso rápido (ej. “Ver descuentos”, “Cómo reservar”).

### 4.2. Gestión de Stock y Reservas (Lógica simplificada)
Dado que no hay integración con un sistema de inventario en tiempo real (al menos en una fase inicial), se manejará de forma **semiestática**:
- El negocio puede actualizar manualmente el stock en la ficha de producto (“Disponible”, “Pocas unidades”, “Agotado”).
- Las reservas no descontarán automáticamente del stock mostrado (para evitar sobreventa si dos usuarios reservan el último producto a la vez). En su lugar, se recomienda:
  - Mostrar un aviso: *“La disponibilidad puede variar. Tu reserva se confirmará al llegar a la tienda.”*
  - Opcional: El administrador puede habilitar un “stock virtual” para productos de alta demanda, restando unidades cuando se confirma una reserva (esto ya es más avanzado, se puede posponer).
- La lógica prioriza la simplicidad: la reserva es una **solicitud** que el negocio atenderá en el orden de llegada a tienda. Si por algún motivo el producto ya no está, se ofrecerá un reemplazo o devolución de la reserva (sin penalización).

### 4.3. Responsive Design y Rendimiento
- El sitio debe ser completamente adaptable a dispositivos móviles (mobile-first), dado que la mayoría de los usuarios navegarán desde el celular.
- Tiempos de carga optimizados (imágenes comprimidas, uso de lazy loading).
- Accesibilidad básica (contrastes, etiquetas para lectores de pantalla).

### 4.4. Plataforma de desarrollo recomendada
- **Shopify** (con plugins de “reserva sin pago” como *Pre-Order Now* o *Back in Stock*) o **WooCommerce** (con plugin *YITH Pre-Order* o *Request a Quote* adaptado a reservas). Dado que no se necesita pasarela de pago, se puede configurar el checkout para que muestre un mensaje de “Pagar en tienda” y genere un código de pedido.
- Alternativa más simple: **Wix** o **Tiendanube** con funcionalidades de formulario personalizado, pero sacrificando algunas automatizaciones.

## 5. Beneficios Clave para el Negocio

- **Incremento de visitas a la tienda física**: el cliente debe acudir para pagar y recoger, lo que aumenta las oportunidades de venta cruzada (otros productos).
- **Fidelización**: el descuento por reserva online incentiva la repetición de compra y la consulta habitual del catálogo.
- **Reducción de stock no rotado**: se puede ofrecer descuentos mayores para productos con poca salida.
- **Recopilación de datos de clientes** (email y teléfono) para futuras campañas de marketing (siempre con consentimiento y cumpliendo la ley de protección de datos).
- **Posicionamiento como referente de belleza**: el sitio muestra los productos de calidad que ofrece la tienda física.

## 6. Consideraciones Legales y Normativas (Perú)

- **Libro de Reclamaciones Virtual**: Enlace visible en el footer, conforme al Código de Protección y Defensa del Consumidor.
- **Políticas de reserva**: Debe especificarse claramente el plazo de recogida, condiciones de cancelación, y que la reserva no implica un contrato de compra-venta hasta el pago en tienda.
- **Protección de datos personales**: Incluir un aviso de privacidad que informe sobre la recolección de nombres, correos y teléfonos, así como el derecho de acceso, rectificación y cancelación.
- **Notificación Sanitaria Obligatoria (NSO)**: Todos los productos cosméticos comercializados deben contar con NSO de DIGEMID. El sitio debe reflejar que se cumple con esta normativa (se puede mencionar en una sección de “Transparencia”).

## 7. Posibles Extensiones a Futuro (Roadmap)

- Integración con un sistema de inventario en tiempo real (si el negocio digitaliza su stock).
- Pasarela de pago online y opción de envíos (cuando el negocio esté preparado logística y legalmente).
- Programa de puntos o membresía fidelización.
- Blog de belleza (contenido educativo para atraer tráfico orgánico).

---

*Este documento constituye las especificaciones funcionales y lógicas del sitio web para el egresado en belleza integral, aprobadas para su desarrollo e implementación inicial.*
