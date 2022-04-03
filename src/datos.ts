// Declaración de variables
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let Base: number;
let Altura: number;

// Resto del código
btnEnviar.addEventListener("click", () => {
  // Acá va nuestro código. Se ejecuta al hacer click en el botón Enviar
  rotulo1.innerHTML = "Base"; // Cambiamos el texto del rótulo
  rotulo2.innerHTML = "Altura";
  Base = Number(dato1.value);
  Altura = Number(dato2.value);
  console.log("La superficie es", Base * Altura);
});
