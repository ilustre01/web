// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current nav item
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.querySelector("a").getAttribute("href").slice(1) === current) {
            li.classList.add("active");
        }
    });
});

<script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add active class to current nav item
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("nav ul li");
        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.querySelector("a").getAttribute("href").slice(1) === current) {
                    li.classList.add("active");
                }
            });
        });

        // Mostrar/Ocultar lista de reservas
        document.querySelector('.btn[href="#lista-reservas"]').addEventListener('click', function (e) {
            e.preventDefault();
            const listaReservas = document.querySelector('#lista-reservas');
            listaReservas.classList.toggle('active');
        });
    </script>

document.querySelector('.reserva-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Capturar los datos del formulario
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const service = document.querySelector('#service').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    // Crear un nuevo elemento en la lista de reservas
    const listaReservas = document.querySelector('.reservas-lista');
    const reservaItem = document.createElement('li');
    reservaItem.innerHTML = `
        <strong>Nombre:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Teléfono:</strong> ${phone}<br>
        <strong>Servicio:</strong> ${service}<br>
        <strong>Fecha:</strong> ${date}<br>
        <strong>Hora:</strong> ${time}
    `;
    listaReservas.appendChild(reservaItem);

    // Enviar mensaje por WhatsApp
    const message = `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nServicio: ${service}\nFecha: ${date}\nHora: ${time}`;
    window.open(`https://wa.me/5353160585?text=${encodeURIComponent(message)}`, '_blank');

    // Limpiar el formulario después de enviar la reserva
    document.querySelector('.reserva-form').reset();
});

document.getElementById('reserva-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Crear elemento de la lista
    const li = document.createElement('li');
    li.textContent = `Nombre: ${nombre}, Teléfono: ${telefono}, Servicio: ${servicio}, Fecha: ${fecha}, Hora: ${hora}`;

    // Añadir a la lista de reservas
    document.getElementById('reservas-list').appendChild(li);

    // Enviar mensaje de WhatsApp automáticamente
    const mensaje = `Nueva reserva:\nNombre: ${nombre}\nTeléfono: ${telefono}\nServicio: ${servicio}\nFecha: ${fecha}\nHora: ${hora}`;
    const whatsappUrl = `https://wa.me/5353160585?text=${encodeURIComponent(mensaje)}`;

    // Abrir la URL de WhatsApp en una nueva ventana o pestaña
    window.open(whatsappUrl, '_blank');

    // Limpiar el formulario después de enviar
    document.getElementById('reserva-form').reset();
});

let reservas = [];  // Array para almacenar reservas

document.getElementById('ver-calendario').addEventListener('click', function() {
    document.getElementById('calendario-reservas').style.display = 'block';
    actualizarHorasReservadas();
});

document.getElementById('fecha-calendario').addEventListener('change', function() {
    actualizarHorasReservadas();
});

function actualizarHorasReservadas() {
    const fechaSeleccionada = document.getElementById('fecha-calendario').value;
    const listaHoras = document.getElementById('hora-calendario');
    const listaReservas = document.getElementById('horas-reservadas');
    listaReservas.innerHTML = '';

    for (let i = 0; i < listaHoras.options.length; i++) {
        const hora = listaHoras.options[i].value;
        const reservaExistente = reservas.find(reserva => reserva.fecha === fechaSeleccionada && reserva.hora === hora);
        const li = document.createElement('li');
        li.textContent = hora;
        
        if (reservaExistente) {
            li.style.textDecoration = 'line-through';
            li.style.color = 'red';
        }

        listaReservas.appendChild(li);
    }
}

// Manejo de reservas al hacer clic en el botón de reserva
document.getElementById('reserva-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    reservas.push({ nombre, telefono, servicio, fecha, hora });

    const li = document.createElement('li');
    li.textContent = `Nombre: ${nombre}, Teléfono: ${telefono}, Servicio: ${servicio}, Fecha: ${fecha}, Hora: ${hora}`;
    document.getElementById('reservas-list').appendChild(li);

    const mensaje = `Nueva reserva:\nNombre: ${nombre}\nTeléfono: ${telefono}\nServicio: ${servicio}\nFecha: ${fecha}\nHora: ${hora}`;
    const whatsappUrl = `https://wa.me/5353160585?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');

    document.getElementById('reserva-form').reset();
    actualizarHorasReservadas();
});
