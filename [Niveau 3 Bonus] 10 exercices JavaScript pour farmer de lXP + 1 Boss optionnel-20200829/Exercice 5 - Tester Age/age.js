function age() {

    var age = prompt("saisir votre age SVP !");

    if (age < 0 || isNaN(age)) {
        alert("valeur non acceptée !");
    } else if (age < 18) {
        alert("vous etes mineur , Vous n'avez pas le droit de venir sur ce site");
    } else if (age >= 18 && age <= 50) {
        alert('Vous êtes majeur mais pas encore senior, la vie est belle');
    } else if (age >= 51 && age <= 60) {
        alert('Vous êtes senior mais pas encore retraité');
    } else if (age > 60) {
        alert('Vous êtes retraité, profitez de votre temps libre !');
    }
}
age();