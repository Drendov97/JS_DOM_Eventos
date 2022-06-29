// querySelector

const heading = document.querySelector('.header__texto h2'); // Devuelve 0 o 1 elementos
heading.textContent = 'Nuevo Heading';
//console.log(heading);

//  querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo enlace';
//enlaces[0].classList = add('nueva-clase');
//enlaces[0].classList = remove('navegacion__enlace');


//  getElementById

const heading2 = document.getElementById('heading');
//console.log(heading2);

//  Generar un nuevo enlace

const newLink = document.createElement('A');

//  Agregar el href
newLink.href = 'nuevo-enlace.html';
//  Agregar el texto
newLink.textContent = 'Un new link';
//  Agregar la clase
newLink.classList.add('navegacion__enlace');
//  Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(newLink);

//  Eventos

window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependen del HTML estén listos (incluye hojas de estilos e imágenes)
    //console.log(2);
})

window.onload = function() {
    //console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded solo espera a que esté listo el HTML, pero no espera a que estén las imagenes y el CSS
    //console.log(4);
})

window.onscroll = function() {
    console.log('scrolling...');
}

//console.log(5);

// Seleccionar elementos y asociar un evento
/*
const btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click', function(e) {
    console.log(e);
    e.preventDefault();

    //Validar un formulario
    console.log('Enviando información...');
})
*/


//  Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreInp = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombreInp.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(e) { //  El evento de Submit
    e.preventDefault();

    //Validar el formulario
    const { nombre, email, mensaje } = datos;

    if (nombre == '' || email == '' || mensaje == '') {
        mostrarAlerta('Todos los campos son obligatorios, por favor llénalos', true);
        return; //Corta la ejecución del código
    }
    //Enviar el formulario
    mostrarAlerta('La información ha sido enviada correctamente!');
});


function leerTexto(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    //console.log(datos);
}

//Muestrar Alerta
function mostrarAlerta(msj, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = msj;
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparecer despupés de 3 seg
    setTimeout(() => {
        alerta.remove();
    }, 3000);

}