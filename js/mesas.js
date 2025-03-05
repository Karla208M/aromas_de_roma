 // Función para validar si la hora seleccionada está dentro del horario permitido
 function isValidReservationTime(date, time) {
    const dayOfWeek = date.getDay();  // Obtiene el día de la semana (0: Domingo, 1: Lunes, etc.)
    const hours = time.getHours();
    const minutes = time.getMinutes();

    // Horarios de Lunes a Viernes
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        if ((hours >= 7 && hours < 9) || (hours >= 13 && hours <= 21)) {
            return 'weekdays'; // De 7:00 AM a 9:00 AM y 1:00 PM a 9:00 PM
        }
    }
    // Horarios de Sábado y Domingo
    if (dayOfWeek === 6 || dayOfWeek === 0) {
        if (hours >= 13 && hours <= 21) {
            return 'weekends'; // De 1:00 PM a 9:00 PM
        }
    }

    return false; // Si está fuera de los horarios permitidos
}

// Evento al enviar el formulario
document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Evita que el formulario se envíe antes de la validación

    // Oculta los mensajes de error antes de realizar la nueva validación
    document.getElementById('errorMessageWeekdays').style.display = 'none';
    document.getElementById('errorMessageWeekends').style.display = 'none';

    const reservationDate = document.getElementById('reservationDate').value;
    const reservationTime = document.getElementById('reservationTime').value;

    if (reservationDate && reservationTime) {
        const date = new Date(reservationDate);
        const time = new Date(reservationDate + " " + reservationTime);  // Combina la fecha con la hora para la validación

        const validTime = isValidReservationTime(date, time);

        if (validTime === 'weekdays') {
            document.getElementById('confirmationMessage').style.display = 'block';
            document.getElementById('errorMessageWeekdays').style.display = 'none';
            document.getElementById('errorMessageWeekends').style.display = 'none';
        } else if (validTime === 'weekends') {
            document.getElementById('confirmationMessage').style.display = 'block';
            document.getElementById('errorMessageWeekdays').style.display = 'none';
            document.getElementById('errorMessageWeekends').style.display = 'none';
        } else {
            if (date.getDay() >= 1 && date.getDay() <= 5) {
                document.getElementById('errorMessageWeekdays').style.display = 'block';
            } else {
                document.getElementById('errorMessageWeekends').style.display = 'block';
            }
            document.getElementById('confirmationMessage').style.display = 'none';
        }
    } else {
        document.getElementById('errorMessageWeekdays').style.display = 'block';
        document.getElementById('confirmationMessage').style.display = 'none';
    }
});