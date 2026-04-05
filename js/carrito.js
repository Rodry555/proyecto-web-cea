/* ============================================
   LÓGICA DEL CARRITO - Belleza Integral
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Estado inicial
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const LIMITE_ITEMS = 5;

    // Elementos del DOM
    const listaCarrito = document.getElementById('lista-carrito');
    const carritoVacio = document.getElementById('carrito-vacio');
    const contadorHeader = document.getElementById('contador-header');
    const elSubtotal = document.getElementById('subtotal');
    const elDescuento = document.getElementById('descuento');
    const elTotal = document.getElementById('total');
    const formReserva = document.getElementById('form-reserva');
    const avisoLimite = document.querySelector('.aviso-limite');

    // Inicializar
    renderizarCarrito();

    // --- Funciones Principales ---

    function renderizarCarrito() {
        listaCarrito.innerHTML = '';
        
        if (carrito.length === 0) {
            carritoVacio.style.display = 'block';
            if (avisoLimite) avisoLimite.style.display = 'none';
        } else {
            carritoVacio.style.display = 'none';
            if (avisoLimite) avisoLimite.style.display = 'block';
            
            carrito.forEach((producto, index) => {
                const tarjeta = crearTarjetaProducto(producto, index);
                listaCarrito.appendChild(tarjeta);
            });
        }

        actualizarTotales();
        actualizarContadorHeader();
    }

    function crearTarjetaProducto(producto, index) {
        const div = document.createElement('div');
        div.classList.add('tarjeta-carrito');
        
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="info-producto-carrito">
                <h3>${producto.nombre}</h3>
                <span class="precio-original">${producto.precioOriginal}</span>
                <span class="precio-reserva">${producto.precioReserva}</span>
            </div>
            <div class="controles-cantidad">
                <button class="btn-cantidad btn-restar" data-index="${index}">−</button>
                <span class="cantidad-valor">${producto.cantidad}</span>
                <button class="btn-cantidad btn-sumar" data-index="${index}">+</button>
            </div>
            <button class="btn-eliminar" data-index="${index}" title="Eliminar">🗑️</button>
        `;

        // Eventos
        div.querySelector('.btn-sumar').addEventListener('click', () => cambiarCantidad(index, 1));
        div.querySelector('.btn-restar').addEventListener('click', () => cambiarCantidad(index, -1));
        div.querySelector('.btn-eliminar').addEventListener('click', () => eliminarProducto(index));

        return div;
    }

    function cambiarCantidad(index, delta) {
        const producto = carrito[index];
        const nuevaCantidad = producto.cantidad + delta;

        // Calcular total de items si sumamos
        const totalActual = carrito.reduce((acc, item, i) => acc + (i === index ? 0 : item.cantidad), 0);
        
        if (nuevaCantidad > 0 && (totalActual + nuevaCantidad) <= LIMITE_ITEMS) {
            producto.cantidad = nuevaCantidad;
            guardarYRenderizar();
        } else if ((totalActual + nuevaCantidad) > LIMITE_ITEMS) {
            alert('⚠️ Has alcanzado el límite de 5 productos por reserva.');
        }
    }

    function eliminarProducto(index) {
        carrito.splice(index, 1);
        guardarYRenderizar();
    }

    function actualizarTotales() {
        let suma = 0;
        carrito.forEach(p => {
            suma += p.precioNumerico * p.cantidad;
        });

        const descuento = suma * 0.10;
        const total = suma - descuento;

        elSubtotal.textContent = `Bs. ${suma.toFixed(2)}`;
        elDescuento.textContent = `-Bs. ${descuento.toFixed(2)}`;
        elTotal.textContent = `Bs. ${total.toFixed(2)}`;
    }

    function actualizarContadorHeader() {
        const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        if (contadorHeader) contadorHeader.textContent = totalItems;
    }

    function guardarYRenderizar() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderizarCarrito();
    }

    // --- Evento Formulario ---
    if (formReserva) {
        formReserva.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const whatsapp = document.getElementById('whatsapp').value;

            if (carrito.length === 0) {
                alert('Tu carrito está vacío.');
                return;
            }

            // Generar código simple
            const codigo = 'RES-' + Math.floor(Math.random() * 9000 + 1000);

            // Guardar datos de reserva para la página de confirmación
            localStorage.setItem('ultimaReserva', JSON.stringify({
                codigo,
                nombre,
                whatsapp,
                total: elTotal.textContent,
                fecha: new Date().toLocaleDateString()
            }));

            // Limpiar carrito
            carrito = [];
            localStorage.removeItem('carrito');

            // Redirigir
            window.location.href = 'reserva-confirmada.html';
        });
    }
});
