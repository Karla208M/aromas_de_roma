// Inicializa el total en cero
let total = 0;

function actualizarTotal() {
    // Obtiene todos los selectores de productos y cantidades
    const productos = document.querySelectorAll('#productosContainer .producto');
    total = 0;

    // Recorre todos los productos agregados
    productos.forEach(producto => {
        const selectProducto = producto.querySelector('select');
        const cantidad = producto.querySelector('input[type="number"]').value;
        const precio = parseFloat(selectProducto.options[selectProducto.selectedIndex].getAttribute('data-precio'));

        // Suma al total
        total += precio * cantidad;
    });

    // Actualiza el valor mostrado en el total
    document.getElementById('totalCuenta').textContent = total.toFixed(2);
}

function agregarOtroCafe() {
    const productosContainer = document.getElementById('productosContainer');
    const nuevoProducto = document.createElement('div');
    nuevoProducto.classList.add('producto');

    nuevoProducto.innerHTML = `
        <label>Producto:</label>
        <select name="producto" required onchange="actualizarTotal()">
            <optgroup label="Cafés Calientes">
                <option value="espresso" data-precio="2.50">Espresso - $2.50</option>
                <option value="cappuccino" data-precio="3.00">Cappuccino - $3.00</option>
                <option value="caffe-latte" data-precio="3.50">Caffè Latte - $3.50</option>
            </optgroup>
            <optgroup label="Cafés Fríos">
                <option value="caffe-freddo" data-precio="3.00">Caffè Freddo - $3.00</option>
                <option value="shakerato" data-precio="3.50">Shakerato - $3.50</option>
                <option value="affogato" data-precio="4.00">Affogato - $4.00</option>
            </optgroup>
        </select>

        <label>Cantidad:</label>
        <input type="number" name="cantidad" min="1" value="1" required onchange="actualizarTotal()">
        
        <button type="button" onclick="eliminarProducto(this)">Eliminar</button>
    `;

    productosContainer.appendChild(nuevoProducto);
    actualizarTotal();
}

function eliminarProducto(button) {
    // Elimina el contenedor del producto correspondiente
    const producto = button.closest('.producto');
    producto.remove();
    actualizarTotal();
}

function abrirFormulario() {
    document.getElementById('modal').style.display = 'flex'; // Muestra el modal
}

function cerrarFormulario() {
    document.getElementById('modal').style.display = 'none'; // Oculta el modal
}

// Validación antes de enviar el formulario
function validarFormulario(event) {
    // Evitar el envío del formulario si no se pasa la validación
    event.preventDefault();

    // Validación para el nombre
    const nombre = document.getElementById('nombre').value.trim();
    const errorNombre = document.getElementById('errorNombre');
    if (nombre === "") {
        errorNombre.textContent = "Por favor, ingresa tu nombre completo.";
        return;
    } else {
        errorNombre.textContent = "";
    }

    // Validación para la dirección
    const direccion = document.getElementById('direccion').value.trim();
    const errorDireccion = document.getElementById('errorDireccion');
    if (direccion === "") {
        errorDireccion.textContent = "Por favor, ingresa una dirección de entrega válida.";
        return;
    } else {
        errorDireccion.textContent = "";
    }

    // Validación para el teléfono
    const telefono = document.getElementById('telefono').value.trim();
    const errorTelefono = document.getElementById('errorTelefono');
    const telefonoRegex = /^[0-9]{8}$/; // Validación de un teléfono de 8 dígitos
    if (!telefonoRegex.test(telefono)) {
        errorTelefono.textContent = "El número de teléfono debe tener 8 dígitos.";
        return;
    } else {
        errorTelefono.textContent = "";
    }

    // Validar que el total sea mayor a 0
    if (total <= 0) {
        alert("El total de tu pedido no puede ser 0. Por favor, agrega productos a tu carrito.");
        return;
    }

    // Si el total es mayor a 0, proceder con el envío
    alert("Pedido realizado con éxito!");
    document.getElementById('pedidoForm').submit(); // Si quieres enviar el formulario realmente.
}

// Asocia la validación al enviar el formulario
document.getElementById('pedidoForm').addEventListener('submit', validarFormulario);
