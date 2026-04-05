/* JavaScript global para el sitio */
console.log('Scripts globales cargados');

/* --- Menú Hamburguesa Responsive --- */
document.addEventListener('DOMContentLoaded', () => {
    const botonHamburguesa = document.querySelector('.boton-hamburguesa');
    const menuPrincipal = document.querySelector('.menu-principal');

    if (botonHamburguesa && menuPrincipal) {
        botonHamburguesa.addEventListener('click', () => {
            const estaAbierto = menuPrincipal.classList.toggle('menu-abierto');
            botonHamburguesa.classList.toggle('activo');
            botonHamburguesa.setAttribute('aria-expanded', estaAbierto);
        });

        // Cerrar menú al hacer clic en un enlace
        menuPrincipal.querySelectorAll('a').forEach(enlace => {
            enlace.addEventListener('click', () => {
                menuPrincipal.classList.remove('menu-abierto');
                botonHamburguesa.classList.remove('activo');
                botonHamburguesa.setAttribute('aria-expanded', 'false');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!menuPrincipal.contains(e.target) && !botonHamburguesa.contains(e.target)) {
                menuPrincipal.classList.remove('menu-abierto');
                botonHamburguesa.classList.remove('activo');
                botonHamburguesa.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
