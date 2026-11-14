const formulario = document.getElementById("formulario-contacto");
const mensajeFormulario = document.getElementById("mensaje-formulario");

if (formulario) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        mensajeFormulario.textContent = "Datos validados correctamente.";

        formulario.reset();
    });
}