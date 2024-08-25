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
</body>
</html>
