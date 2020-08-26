//afficher le contenu du div correspondant au titre sur lequel on clique.

function recuperation(id) {
    return (document.getElementById(id));
}

function eliminer(para) {
    para.textContent = " Je suis un poisson mort";
}
eliminer(recuperation("poisson3"));