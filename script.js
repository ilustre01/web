// script.js

document.addEventListener("DOMContentLoaded", () => {
    const reservationForm = document.getElementById("new-reservation-form");
    const reservationSuccess = document.getElementById("reservation-success");
    const overlay = document.querySelector(".overlay");
    const modal = document.getElementById("admin-login-form");
    const newReservationLink = document.getElementById("new-reservation-link");
    const reservationsListLink = document.getElementById("reservations-list-link");
    const registrationLink = document.getElementById("registration-link");
    const registeredUsersLink = document.getElementById("registered-users-link");

    // Mostrar mensajes de éxito
    reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        reservationSuccess.style.display = "block";
        setTimeout(() => {
            reservationSuccess.style.display = "none";
        }, 3000);
        reservationForm.reset();
    });

    // Mostrar y ocultar el formulario de inicio de sesión del administrador
    const toggleModal = (show) => {
        modal.style.display = show ? "block" : "none";
        overlay.style.display = show ? "block" : "none";
    };

    document.getElementById("admin-login").addEventListener("submit", (e) => {
        e.preventDefault();
        // Aquí se maneja la autenticación
        toggleModal(false);
    });

    overlay.addEventListener("click", () => {
        toggleModal(false);
    });

    // Agregar comportamiento a los enlaces
    newReservationLink.addEventListener("click", (e) => {
        e.preventDefault();
        // Mostrar sección de nueva reserva
    });

    reservationsListLink.addEventListener("click", (e) => {
        e.preventDefault();
        // Mostrar lista de reservas
    });

    registrationLink.addEventListener("click", (e) => {
        e.preventDefault();
        // Mostrar formulario de registro
    });

    registeredUsersLink.addEventListener("click", (e) => {
        e.preventDefault();
        // Mostrar lista de usuarios registrados
    });
});
