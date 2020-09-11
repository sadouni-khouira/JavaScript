let Span = document.getElementsByTagName("SPAN");
let Heure = Span[0];
let Minute = Span[1];
let Seconde = Span[2];
let Miliseconde = Span[3];

let Heure0 = 0;
let Minute0 = 0;
let Seconde0 = 0;
let Miliseconde0 = 0;

let temps;



function start() {
    temps = setInterval(function tempscoul() {
        Miliseconde0 += 1;
        if (Miliseconde0 == 60) {
            Seconde0 += 1;
            Miliseconde0 = 0;
        }
        if (Seconde0 == 60) {
            Minute0 += 1;
            Seconde0 = 0;
        }
        if (Minute0 == 60) {
            Heure0 += 1;
            Minute0 = 0;
        }
        if (Heure0 == 12) {
            Minute0 = 0;
        }
        Heure.innerHTML = Heure0 + "h";
        Minute.innerHTML = Minute0 + "min";
        Seconde.innerHTML = Seconde0 + "s";
        Miliseconde.innerHTML = Miliseconde0 + "ms";
    }, 1000);
}

function stop() {
    clearInterval(temps);
};

function reset() {
    let Heure0 = 0;
    let Minute0 = 0;
    let Seconde0 = 0;
    let Miliseconde0 = 0;

    Heure.innerHTML = Heure0 + "h";
    Minute.innerHTML = Minute0 + "min";
    Seconde.innerHTML = Seconde0 + "s";
    Miliseconde.innerHTML = Miliseconde0 + "ms";
};