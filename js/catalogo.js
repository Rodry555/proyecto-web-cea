/* ============================================
   LÓGICA DEL CATÁLOGO - Belleza Integral
   Conecta botones "Reservar" con el carrito
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const botonesReservar = document.querySelectorAll('.boton-reservar');
    const LIMITE_GLOBAL = 5;

    botonesReservar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Obtener datos del producto desde el artículo padre
            const articulo = e.target.closest('.tarjeta-producto');
            if (!articulo) return;

            const nombre = articulo.getAttribute('data-nombre');
            const precioOriginal = articulo.querySelector('.precio-normal').textContent;
            const precioReserva = articulo.querySelector('.precio-descuento').textContent;
            const imagen = articulo.querySelector('img').src;
            
            // Obtener precio numérico
            const textoPrecio = precioReserva.replace('Bs. ', '');
            const precioNumerico = parseFloat(textoPrecio);

            const producto = {
                id: Date.now(),
                nombre: nombre,
                precioOriginal: precioOriginal,
                precioReserva: precioReserva,
                precioNumerico: precioNumerico,
                imagen: imagen,
                cantidad: 1
            };

            // Validar límite
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

            if (totalItems >= LIMITE_GLOBAL) {
                alert('⚠️ Has alcanzado el límite de 5 productos por reserva. Ve al carrito para gestionar tu pedido.');
                return;
            }

            // Verificar si el producto ya está en el carrito
            const existeIndex = carrito.findIndex(p => p.nombre === producto.nombre);
            if (existeIndex !== -1) {
                if (carrito[existeIndex].cantidad < 5) {
                    carrito[existeIndex].cantidad++;
                } else {
                    alert('⚠️ Ya tienes el máximo de este producto.');
                    return;
                }
            } else {
                carrito.push(producto);
            }

            // Guardar y redirigir
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Feedback visual
            boton.textContent = '¡Agregado!';
            boton.style.backgroundColor = 'var(--color-exito)';
            boton.style.color = 'white';
            
            setTimeout(() => {
                window.location.href = 'carrito.html';
            }, 800);
        });
    });

    // Actualizar contador del header al cargar
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const contadorHeader = document.querySelector('.contador-reservas');
    if (contadorHeader) {
        contadorHeader.textContent = totalItems;
    }
});
