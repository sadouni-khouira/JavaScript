/*des variables qui récuperent les différents paragraphes correspondants aux divs soupe, fauteuil et lits/*/

let Bol = document.getElementsByClassName('soupe')[0];
let Bolenfant = Bol.children;


let Fauteuil = document.getElementsByClassName('fauteuil')[0];
let Fauteuilenfant = Fauteuil.children;

let Lit = document.getElementsByClassName('lit')[0];
let Litenfant = Lit.children;

/*Des variables qui récuperent les Boutons*/

let Boire = document.getElementById('boire');
let Reposer = document.getElementById('reposer');
let Dormir = document.getElementById('dormir');


Boire.addEventListener('click', fonctionBoire);
Reposer.addEventListener('click', fonctionReposer);
Dormir.addEventListener('click', fonctionDormir);

/* Les fonction boire, se reposer et dormir qui changeront le texte des paragraphes concernés*/

function fonctionBoire() {
    let Vide1 = Bolenfant[0].innerHTML = 'Bol de soupe vide.';
    let Vide2 = Bolenfant[1].innerHTML = 'Bol de soupe vide.';
    let Vide3 = Bolenfant[2].innerHTML = 'Bol de soupe vide.';
}

function fonctionReposer() {
    let ancien1 = Fauteuilenfant[0].innerHTML = 'Fauteuil ancien.';
    let ancien2 = Fauteuilenfant[1].innerHTML = 'Fauteuil ancien.';
    let ancien3 = Fauteuilenfant[2].innerHTML = 'Fauteuil ancien.';
}

function fonctionDormir() {
    let litdef1 = Litenfant[0].innerHTML = 'Lit défait.';
    let litdef2 = Litenfant[1].innerHTML = 'Lit défait.';
    let litdef3 = Litenfant[2].innerHTML = 'Lit défait.';
}