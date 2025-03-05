// Función para agregar otro café
function agregarOtroCafe() {
    let container = document.getElementById('productosContainer');

    let nuevoProducto = document.createElement('div');
    nuevoProducto.classList.add('producto');
    nuevoProducto.style.marginBottom = '15px'; // Espaciado entre productos

    nuevoProducto.innerHTML = `
        <label>Producto:</label>
        <select name="producto" required>
            <optgroup label="Cafés Calientes">
                <option value="espresso">Espresso</option>
                <option value="cappuccino">Cappuccino</option>
                <option value="caffe-latte">Caffè Latte</option>
            </optgroup>
            <optgroup label="Cafés Fríos">
                <option value="caffe-freddo">Caffè Freddo</option>
                <option value="shakerato">Shakerato</option>
                <option value="affogato">Affogato</option>
            </optgroup>
        </select>

        <label>Cantidad:</label>
        <input type="number" name="cantidad" min="1" required>

        <div style="margin-top: 10px;">
            <!-- Eliminar café con el mismo estilo que el de agregar otro café -->
            <button type="button" onclick="eliminarCafe(this)" style="background-color: rgb(141, 79, 12); color: white; border: none; padding: 5px 10px; cursor: pointer;">Eliminar café</button>
        </div>
    `;

    container.appendChild(nuevoProducto);
}

// Función para eliminar un café agregado
function eliminarCafe(elemento) {
    elemento.parentNode.parentNode.remove();
}


// Función de validación en tiempo real
function validarTelefono() {
    let telefono = document.getElementById('telefono').value.trim();
    let error = document.getElementById('errorTelefono');
    if (!/^\d{8}$/.test(telefono)) {
        error.textContent = "El teléfono debe tener exactamente 8 dígitos.";
    } else {
        error.textContent = "";
    }
}

// Restricción de caracteres en los inputs
document.getElementById('nombre').addEventListener('input', function() {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, ""); // Solo letras y espacios
});

document.getElementById('telefono').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, "").slice(0, 8); // Solo números, máximo 8
    validarTelefono();
});

// Funciones para abrir y cerrar el modal

function abrirFormulario() {
    document.getElementById("modal").style.display = "flex";
    document.body.classList.add("modal-open"); // Evita el desplazamiento del fondo
}

function cerrarFormulario() {
    document.getElementById("modal").style.display = "none";
    document.body.classList.remove("modal-open"); // Restaura el desplazamiento
}