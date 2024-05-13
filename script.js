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