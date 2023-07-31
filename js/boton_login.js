const miBoton = document.getElementById('miBoton');

miBoton.onclick = function () {
    window.location.href = '../login.html';
};

// lupa.addEventListener('click', function () {
//     var anchoPantalla = window.innerWidth;
//     if (anchoPantalla <= anchoMinimo) {
//         if (buscador) {
//             miBoton.classList.remove("header_boton-login--oculto");
//             buscador = false;
//             console.log("Clase eliminada")
//         } else {
//             miBoton.classList.add("header_boton-login--oculto");
//             buscador = true;
//             console.log("Clase agregada")
//         }
//     }
// });

var lupa = document.querySelector('.header_lupa');
var inputBuscador = document.querySelector('.header_input');

const anchoMinimo = 600;
var buscador = false;

lupa.addEventListener('click', function () {
    var anchoPantalla = window.innerWidth;
    if (anchoPantalla <= anchoMinimo) {
        if (buscador) {
            inputBuscador.classList.remove("header_input-event");
            miBoton.classList.remove("header_boton-login--oculto");
            buscador = false;
        } else {
            inputBuscador.classList.add("header_input-event");
            miBoton.classList.add("header_boton-login--oculto");
            buscador = true;
        }
    }
});
