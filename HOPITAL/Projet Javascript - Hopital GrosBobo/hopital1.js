//afficher le contenu du div correspondant au titre sur lequel on clique.
function showHxContent(pNumber) {
    hideAllDivs();
    vDiv = document.getElementById("title" + pNumber);
    vDiv.style.display = "block";

}

//masquer le contenu de tous les div du document.
function hideAllDivs() {
    vDivs = document.querySelectorAll('.DEFINITION div');
    for (var i = 0; i < vDivs.length; i++) {

        vDivs.item(i).style.display = "none";
    }

}