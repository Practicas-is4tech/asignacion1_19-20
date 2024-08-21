let texto: string = "URIEL SANCHEZ";
let numero: number = 10;
let verdadero: boolean = true;
let cualquiera: any = "Hola";

verdadero = false;

const nombre: string = "Uriel";

console.log(texto, numero, verdadero);

let personas: string[] = ["Uriel", "Juan", "Pedro"];

let div__personas: HTMLElement | null = document.querySelector("#personas");

div__personas.innerHTML = "<ul>" +
    personas.map((persona) => {
        return `<li>${persona}</li>`;
    }).join("") +
    "</ul>";