function validarHora(selectedTime, selectedDate) {
    const timePattern = /^([01]?\d|2[0-3]):([0-5]\d)\s?(AM|PM)?$/i;
    if (!timePattern.test(selectedTime)) {
        return false;
    }

    const timeParts = selectedTime.match(timePattern);
    let hours = parseInt(timeParts[1]);
    const minutes = parseInt(timeParts[2]);
    const period = timeParts[3] ? timeParts[3].toUpperCase() : "";

    // Convertir a formato de 24 horas si está en AM/PM
    if (period === "AM" && hours !== 12) {
        hours += 12;
    } else if (period === "PM" && hours === 12) {
        hours = 0;
    }

    if (!selectedDate) {
        return false;
    }

    const dateParts = selectedDate.split("-");
    if (dateParts.length !== 3) {
        return false;
    }
    
    const date = new Date(selectedDate);
    if (isNaN(date.getTime())) {
        return false;
    }
    
    const dayOfWeek = date.getDay(); // 0 (Domingo) - 6 (Sábado)

    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Lunes a Viernes
        return hours >= 7 && hours < 21;
    } else { // Sábado y Domingo
        return hours >= 13 && hours < 21;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const timeInput = document.getElementById("reservationTime");
    const dateInput = document.getElementById("reservationDate");
    const timeError = document.createElement("div");
    timeError.id = "timeError";
    timeError.style.color = "red";
    timeInput.parentNode.appendChild(timeError);

    function validateFields() {
        let valid = true;
        timeError.textContent = "";

        if (!dateInput.value) {
            valid = false;
            dateInput.style.border = "2px solid red";
        } else {
            dateInput.style.border = "";
        }

        if (timeInput.value && dateInput.value && !validarHora(timeInput.value, dateInput.value)) {
            timeError.textContent = "Horario no disponible. Lunes-Viernes: 7AM-9PM | Sábado-Domingo: 1PM-9PM.";
            valid = false;
        }

        return valid;
    }

    timeInput.addEventListener("change", validateFields);
    dateInput.addEventListener("change", validateFields);

    document.getElementById("reservationForm").addEventListener("submit", function (event) {
        if (!validateFields()) {
            event.preventDefault();
            document.getElementById("errorMessage").style.display = "block";
        } else {
            document.getElementById("errorMessage").style.display = "none";
            document.getElementById("confirmationMessage").style.display = "block";
        }
    });
});
