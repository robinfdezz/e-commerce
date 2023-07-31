// Obtener el input y el ícono
var input = document.getElementById('myInput');
var toggleIcon = document.querySelector('.toggle-icon');

// Escuchar el evento de clic en el ícono
toggleIcon.addEventListener('click', function() {
    console.log("Hola")
    // Cambiar el tipo de input
    if (input.type === 'password') {
        input.type = 'text';
        toggleIcon.classList.add("toggle-icon-nomostrar");
    } else {
        input.type = 'password';
        toggleIcon.classList.remove("toggle-icon-nomostrar");
    }
});
