let Bol = document.getElementsByClassName('soupe')[0];
let BolP = Bol.children;


let Fauteuil = document.getElementsByClassName('fauteuil')[0];
let FauteuilP = Fauteuil.children;

let Lit = document.getElementsByClassName('lit')[0];
let LitP = Lit.children;

/************************ BOUTONS ********************/
let Boire = document.getElementById('boire');
let Reposer = document.getElementById('reposer');
let Dormir = document.getElementById('dormir');


Boire.addEventListener('click', fBoire);
Reposer.addEventListener('click', fReposer);
Dormir.addEventListener('click', fDormir);
/*************************** LES FONCTIONS ************************** */

function fBoire() {
    let Vide1 = BolP[0].innerHTML = 'Bol de soupe vide.';
    let Vide2 = BolP[1].innerHTML = 'Bol de soupe vide.';
    let Vide3 = BolP[2].innerHTML = 'Bol de soupe vide.';
}

function fReposer() {
    let ancien1 = FauteuilP[0].innerHTML = 'Fauteuil ancien.';
    let ancien2 = FauteuilP[1].innerHTML = 'Fauteuil ancien.';
    let ancien3 = FauteuilP[2].innerHTML = 'Fauteuil ancien.';
}

function fDormir() {
    let litdef1 = LitP[0].innerHTML = 'Lit défait.';
    let litdef2 = LitP[1].innerHTML = 'Lit défait.';
    let litdef3 = LitP[2].innerHTML = 'Lit défait.';
}