var lupa = document.querySelector('.header_lupa');
var inputBuscador = document.querySelector('.header_input');

const anchoMinimo = 600;
var buscador = false;

lupa.addEventListener('click', function () {
    var anchoPantalla = window.innerWidth;
    if (anchoPantalla <= anchoMinimo) {
        if (buscador) {
            inputBuscador.classList.remove("header_input-event");
            buscador = false;
        } else {
            inputBuscador.classList.add("header_input-event");
            buscador = true;
        }
    }
});
