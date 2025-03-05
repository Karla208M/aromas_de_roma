/*ocument.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    
    const dateInput = document.getElementById("reservationDate").value;
    const timeInput = document.getElementById("reservationTime").value;
    const confirmationMessage = document.getElementById("confirmationMessage");
    const errorMessage = document.getElementById("errorMessage");
    
    if (!dateInput || !timeInput) {
        errorMessage.innerText = "Por favor, ingresa una fecha y hora válidas.";
        errorMessage.style.display = "block";
        confirmationMessage.style.display = "none";
        return;
    }
    
    const selectedDate = new Date(dateInput);
    const selectedDay = selectedDate.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    const selectedTime = parseFloat(timeInput.replace(':', '.'));
    
    let validTime = false;
    if (selectedDay >= 1 && selectedDay <= 5) { // Lunes a Viernes
        validTime = selectedTime >= 7.00 && selectedTime <= 21.00;
    } else { // Sábado y Domingo
        validTime = selectedTime >= 13.00 && selectedTime <= 21.00;
    }
    
    if (validTime) {
        confirmationMessage.style.display = "block";
        errorMessage.style.display = "none";
    } else {
        errorMessage.innerText = "Horario no disponible. Por favor, elige otro horario.";
        errorMessage.style.display = "block";
        confirmationMessage.style.display = "none";
    }
});

// boton
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    document.getElementById("confirmationMessage").style.display = "block"; // Muestra el mensaje
})*/

document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    
    const dateInput = document.getElementById("reservationDate").value;
    const timeInput = document.getElementById("reservationTime").value;
    
    if (!dateInput || !timeInput) {
        alert("Por favor, ingresa una fecha y hora válidas.");
        return;
    }
    
    const selectedDate = new Date(dateInput);
    const selectedDay = selectedDate.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    const selectedTime = parseFloat(timeInput.replace(':', '.'));
    
    let validTime = false;
    let availableHours = "";
    
    if (selectedDay >= 1 && selectedDay <= 5) { // Lunes a Viernes
        validTime = selectedTime >= 7.00 && selectedTime <= 21.00;
        availableHours = "Lunes a Viernes de 7:00 AM a 9:00 PM";
    } else { // Sábado y Domingo
        validTime = selectedTime >= 13.00 && selectedTime <= 21.00;
        availableHours = "Sábado y Domingo de 1:00 PM a 9:00 PM";
    }
    
    if (validTime) {
        alert("¡Reserva realizada con éxito!");
    } else {
        alert("Horario no disponible. Por favor, elige otro horario. Horarios disponibles: " + availableHours);
    }
});