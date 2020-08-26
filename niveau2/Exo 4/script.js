function multiplication(a) {
    return a * 4;
}

function addition(a) {
    return a + 10;
}

var a = Number(prompt("Entrez une valeur "));
console.log(multiplication(addition(a)));