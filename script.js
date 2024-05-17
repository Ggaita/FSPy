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

/*const nombre = document.getElementById("nombreContacto")
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

const formulario = document.getElementById("form");
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

    inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    });
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    });
*/

document.addEventListener("DOMContentLoaded", function(){
    var visible = false;

    function MapHabitacion(){
        const texto_modif_botom = document.getElementById("btn_map");
        const mapa_habitacion = document.getElementById("mapa_habitacion");
        const img_habitacion = document.getElementById("img_habitacion");
        const contain_map = document.getElementById("contain_hab_map");


        if(!visible){
            contain_map.classList.add("visible");
            mapa_habitacion.classList.add("visible");
            img_habitacion.style.display = "flex";
            texto_modif_botom.textContent = "Ocultar mapa"
            
            visible = true;
        } else{
            contain_map.classList.remove("visible");
            mapa_habitacion.classList.remove("visible");
            img_habitacion.style.display = "none";
            texto_modif_botom.textContent = "Ver mapa de habitación"

            visible = false;
        }
    }

    document.getElementById("btn_map").addEventListener("click", MapHabitacion);

    function Saludo() {
        const imagen = document.getElementById("img_dormitorio");
        const txt_desc_hab = document.getElementById("txt_desc_hab");
        const card_cama = document.getElementById("card_cama")

        if (!visible) {
        imagen.style.display = "block";
        txt_desc_hab.style.display = "block";
        card_cama.classList.add("visible");

        visible = true;
    } else {
        imagen.style.display = "none";
        txt_desc_hab.style.display = "none";
        card_cama.classList.remove("visible");

        visible = false;
    }
    }




    document.getElementById("cir-1").addEventListener("click", Saludo);
    document.getElementById("img_dormitorio").addEventListener("click", Saludo);


    function Hab_2(){
        const imagen_dos = document.getElementById("img_btr");
        const txt_desc_banio = document.getElementById("txt_desc_banio");
        const card_bath = document.getElementById("card_bath");

        if (!visible) {
            imagen_dos.style.display = "block";
            txt_desc_banio.style.display = "block";
            card_bath.classList.add("visible");
            visible = true;
        } else {
            imagen_dos.style.display = "none";
            txt_desc_banio.style.display = "none";
            card_bath.classList.remove("visible");
            visible = false;
        }
   
    }
        document.getElementById("cir-2").addEventListener("click", Hab_2);
        document.getElementById("img_btr").addEventListener("click", Hab_2);




    function Hab_3(){
       
        const imagen_tres = document.getElementById("img_dobl");
        const txt_desc_amob = document.getElementById("txt_desc_amob");
        const card_plac = document.getElementById("card_plac")

   
        if (!visible) {
            imagen_tres.style.display = "block";
            txt_desc_amob.style.display= "block";
            card_plac.classList.add("visible");
            visible = true;
        } else {
            imagen_tres.style.display = "none";
            txt_desc_amob.style.display= "none";
            card_plac.classList.remove("visible");
            visible = false;
        }
   
    }
        document.getElementById("cir-3").addEventListener("click", Hab_3);
        document.getElementById("img_dobl").addEventListener("click", Hab_3);
})
