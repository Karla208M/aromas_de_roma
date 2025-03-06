document.addEventListener("DOMContentLoaded", function () {
    let dateInput = document.getElementById("reservationDate");
    let timeInput = document.getElementById("reservationTime");
    let peopleSelect = document.querySelector("select.custom-select");
    let form = document.getElementById("reservationForm");

    let errorMessageWeekdays = document.getElementById("errorMessageWeekdays");
    let errorMessageWeekends = document.getElementById("errorMessageWeekends");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        let dateValue = dateInput.value;
        let timeValue = timeInput.value;
        let peopleValue = peopleSelect.value;

        // Ocultar mensajes previos
        errorMessageWeekdays.style.display = "none";
        errorMessageWeekends.style.display = "none";

        // Validar que los campos no estén vacíos
        if (!dateValue || !timeValue || !peopleValue) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Validar fecha
        let selectedDate = new Date(dateValue);
        let today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert("No puedes seleccionar una fecha pasada.");
            return;
        }

        // Validar hora y día de la semana
        let dayOfWeek = selectedDate.getDay(); // 0 = Domingo, 6 = Sábado
        let timeParts = timeValue.split(":");

        if (timeParts.length !== 2) {
            alert("Por favor, ingresa una hora válida en formato HH:MM.");
            return;
        }

        let selectedHour = parseInt(timeParts[0], 10);
        let selectedMinutes = parseInt(timeParts[1], 10);
        let selectedTimeInMinutes = selectedHour * 60 + selectedMinutes; // Convertir la hora a minutos

        let isValidTime = false;

        // Validación de Lunes a Viernes (7:00 AM - 9:00 PM)
        if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Lunes - Viernes
            let openingTime = 7 * 60;  // 7:00 AM en minutos
            let closingTime = 21 * 60; // 9:00 PM en minutos

            if (selectedTimeInMinutes >= openingTime && selectedTimeInMinutes <= closingTime) {
                isValidTime = true;
            } else {
                errorMessageWeekdays.style.display = "block"; // Mostrar error para días de semana
                return;
            }
        } else if (dayOfWeek === 0 || dayOfWeek === 6) { // Sábado - Domingo
            let openingTime = 13 * 60; // 1:00 PM en minutos
            let closingTime = 21 * 60;  // 9:00 PM en minutos

            if (selectedTimeInMinutes >= openingTime && selectedTimeInMinutes <= closingTime) {
                isValidTime = true;
            } else {
                errorMessageWeekends.style.display = "block"; // Mostrar error para fines de semana
                return;
            }
        }

        // Si la hora es válida, se envía la reserva (puedes procesar aquí la reserva como desees)
        if (isValidTime) {
            alert("¡Reserva realizada con éxito!");
        }
    });
});