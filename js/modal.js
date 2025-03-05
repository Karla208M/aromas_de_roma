//modal de orden
document.querySelectorAll('.product-img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('productName').value = this.dataset.name;
        document.getElementById('productPrice').value = this.dataset.price;
        new bootstrap.Modal(document.getElementById('orderModal')).show();
    });
});