// Función para actualizar el total
function actualizarTotal() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('productPrice').value);

    if (!isNaN(cantidad) && !isNaN(precio) && cantidad > 0) {
        let total = precio * cantidad;
        document.getElementById('totalCuenta').textContent = total.toFixed(2);
    }
}

// Mostrar modal al hacer clic en una imagen de producto
document.querySelectorAll('.product-img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('productName').value = this.dataset.name;
        document.getElementById('productPrice').value = this.dataset.price; // Precio sin '$'

        document.getElementById('cantidad').value = 1; // Resetear cantidad
        actualizarTotal(); // Actualizar total con cantidad = 1

        let modal = new bootstrap.Modal(document.getElementById('orderModal'));
        modal.show();
    });
});

// Validación y envío del formulario
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const producto = document.getElementById('productName').value;
    const precio = parseFloat(document.getElementById('productPrice').value);

    if (producto && !isNaN(precio) && cantidad > 0) {
        alert(`Pedido confirmado!\nProducto: ${producto}\nCantidad: ${cantidad}\nTotal: $${(precio * cantidad).toFixed(2)}`);

        // Cerrar el modal correctamente
        let modal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
        modal.hide();

        // Resetear el formulario después de confirmar el pedido
        document.getElementById('orderForm').reset();
        document.getElementById('totalCuenta').textContent = '0.00';
    } else {
        alert("Por favor, complete los campos correctamente.");
    }
});
