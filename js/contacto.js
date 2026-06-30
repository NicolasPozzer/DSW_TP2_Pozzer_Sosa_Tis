document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        let valido = true;

        const nombre = document.getElementById("contactName");
        const email = document.getElementById("contactEmail");
        const asunto = document.getElementById("contactSubject");
        const mensaje = document.getElementById("contactMessage");

        if (nombre.value.trim() === "") {
            nombre.classList.add("is-invalid");
            valido = false;
        } else {
            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");
        }

        const regex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email.value)) {
            email.classList.add("is-invalid");
            valido = false;
        } else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }

        if (asunto.value === "") {
            asunto.classList.add("is-invalid");
            valido = false;
        } else {
            asunto.classList.remove("is-invalid");
            asunto.classList.add("is-valid");
        }

        if (mensaje.value.trim().length < 20) {
            mensaje.classList.add("is-invalid");
            valido = false;
        } else {
            mensaje.classList.remove("is-invalid");
            mensaje.classList.add("is-valid");
        }

        if (valido) {
            const toast = new bootstrap.Toast(
                document.getElementById("toastContacto")
            );

            toast.show();

            form.reset();

            document
                .querySelectorAll(".is-valid")
                .forEach(campo => campo.classList.remove("is-valid"));
        }

    });

});