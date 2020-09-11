 function myFunction() {
     var element = document.getElementById("bouton1");
     element.classList.toggle("bouton1");
     if (element.innerHTML == "Cliquez-moi") {
         element.innerHTML = "Vous m'avez cliqué";
     } else { element.innerHTML = "Cliquez-moi" }
 }