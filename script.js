const carrousell = document.querySelector(".carrousel-items");

let maxScrollLeft = carrousell.scrollWidth - carrousell.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
    intervalo = setInterval(function () {   
        carrousell.scrollLeft = carrousell.scrollLeft + step;
        if (carrousell.scrollLeft === maxScrollLeft) {
            step = step *-1;
        } else if (carrousell.scrollLeft === 0) {
            step = step *-1;
        }
    }, 10)
}

const stop = () => {
 clearInterval(intervalo);
}

carrousell.addEventListener("mouseover", () => {
    stop ();
}) 

carrousell.addEventListener("mouseout", () => {
    start ();
}) 

start(); 

/* VALIDACIÓN FORMULARIO*/

const nombre = document.getElementById("nombreContacto")
const apellido = document.getElementById("apellidoContacto")
const email = document.getElementById("emailContacto")
const telefono = document.getElementById("telefonoContacto")
const formulario = document.getElementById("form")
const parrafo = document.getElementById("warnings")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let warnings = ""
    let entrar = false;

    if(nombre.value.length < 3){
        warnings += 'El nombre es muy corto'
        entrar = true;
    }

    if(apellido.value.length < 3){
        warnings += 'El apellido es muy corto'
        entrar = true
    }

    if(regexEmail.test(email.value)){
        warnings += 'El email no es valido'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})















/*const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input")

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letras y Espacios, pueden llevar acento
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ //de 7 a 14 números
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombreContacto":
            if(expresiones.nombre.test(e.target.value)){
                console.log('Funciona')
            }
        break;

        case "apellidoContacto":
            
        break;

        case "emailContacto":
            
        break;

        case "telefonoContacto":
            
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});*/