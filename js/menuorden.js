 // Mostrar modal al hacer clic en una imagen
 document.querySelectorAll('.product-img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('productName').value = this.dataset.name;
        document.getElementById('productPrice').value = this.dataset.price;
        let modal = new bootstrap.Modal(document.getElementById('orderModal'));
        modal.show();

        // Cerrar completamente el modal al ocultarse
        document.getElementById('orderModal').addEventListener('hidden.bs.modal', function () {
            document.querySelector('.modal-backdrop')?.remove(); // Elimina fondo oscuro si queda
            document.body.classList.remove('modal-open'); // Quita clase que bloquea el scroll
        }, { once: true });
    });
});