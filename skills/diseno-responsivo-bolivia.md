# Skill: Diseño Responsivo y UX Móvil

## Estrategia
1. **Mobile-First**: Escribe primero el CSS para móviles y usa `@media (min-width: 768px)` para escritorio.
2. **Touch-Ready**: Los botones (`.boton-reservar`) deben tener un tamaño mínimo de 44x44px para ser fáciles de tocar.
3. **Optimización**: Dado que los usuarios en La Paz/Bolivia pueden tener conexiones móviles variables, las imágenes deben usar `loading="lazy"`.

## Estilos Específicos
- Usa Flexbox y CSS Grid para el catálogo.
- El menú de navegación en móvil debe ser un menú hamburguesa que no oculte el icono del carrito.