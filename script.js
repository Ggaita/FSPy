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


document.addEventListener("DOMContentLoaded", function(){
    var visible = false;


    function MapHabitacion(){
        const mapa_habitacion = document.getElementById("mapa_habitacion");
        const img_habitacion = document.getElementById("img_habitacion");

        if(!visible){
            mapa_habitacion.style.display = "flex";
            img_habitacion.style.display = "flex";
            
            visible = true;
        } else{
            mapa_habitacion.style.display = "none";
            img_habitacion.style.display = "none";

            visible = false;
        }
    }

    document.getElementById("vistaHab").addEventListener("click", MapHabitacion);

    function Saludo() {
        const imagen = document.getElementById("img_pinte");
        const txt_desc_hab = document.getElementById("txt_desc_hab")


        if (!visible) {
        imagen.style.display = "block";
        txt_desc_hab.style.display = "block";

        visible = true;
    } else {
        imagen.style.display = "none";
        txt_desc_hab.style.display = "none";

        visible = false;
    }
    }




    document.getElementById("cir-1").addEventListener("click", Saludo);
    document.getElementById("img_pinte").addEventListener("click", Saludo);


    function Hab_2(){
       
        const imagen_dos = document.getElementById("img_btr");
        const txt_desc_banio = document.getElementById("txt_desc_banio");
   
        if (!visible) {
            imagen_dos.style.display = "block";
            txt_desc_banio.style.display = "block";
            visible = true;
        } else {
            imagen_dos.style.display = "none";
            txt_desc_banio.style.display = "none";
            visible = false;
        }
   
    }
        document.getElementById("cir-2").addEventListener("click", Hab_2);
        document.getElementById("img_btr").addEventListener("click", Hab_2);




    function Hab_3(){
       
        const imagen_tres = document.getElementById("img_dobl");
        const txt_desc_amob = document.getElementById("txt_desc_amob");
   
        if (!visible) {
            imagen_tres.style.display = "block";
            txt_desc_amob.style.display= "block";
            visible = true;
        } else {
            imagen_tres.style.display = "none";
            txt_desc_amob.style.display= "none";
            visible = false;
        }
   
    }
        document.getElementById("cir-3").addEventListener("click", Hab_3);
        document.getElementById("img_dobl").addEventListener("click", Hab_3);
})
