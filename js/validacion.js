function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
} 

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let contrasenia = document.getElementById("password1").value.trim();
    let contrasenia2 = document.getElementById("password2").value.trim();
    let terminos = document.getElementById("terminos");

    // Validar campos vacíos
    if (!nombre || !apellido || !contrasenia || !contrasenia2) {
        showAlertError();
        return;
    }

    // Validar longitud de contraseña
    if (contrasenia.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    // Validar que coincidan
    if (contrasenia !== contrasenia2) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Validar términos
    if (!terminos.checked) {
        alert("Debes aceptar los términos y condiciones");
        return;
    }

    // Si todo está bien
    showAlertSuccess();
});
