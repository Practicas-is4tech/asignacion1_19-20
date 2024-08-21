var texto = "URIEL SANCHEZ";
var numero = 10;
var verdadero = true;
var cualquiera = "Hola";
verdadero = false;
var nombre = "Uriel";
console.log(texto, numero, verdadero);
var personas = ["Uriel", "Juan", "Pedro"];
var div__personas = document.querySelector("#personas");
div__personas.innerHTML = "<ul>" +
    personas.map(function (persona) {
        return "<li>".concat(persona, "</li>");
    }).join("") +
    "</ul>";
