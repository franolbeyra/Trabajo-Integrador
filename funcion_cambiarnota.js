import promptSync from 'prompt-sync';
const prompt = promptSync();


function CambiarNota() {
   let nombre = prompt("Ingrese su nombre: ");
   let materia = prompt("Ingrese la materia: ");
   
   console.log("Su nombre es: " + nombre);
   console.log("La materia es: " + materia);
}

CambiarNota();