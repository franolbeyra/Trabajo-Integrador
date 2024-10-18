import promptSync from 'prompt-sync';
const prompt = promptSync();
import estudiantesNotas from './arraynotasyasistencia.js';


function cambiarNotaPorNombre() {
   let nombre = prompt("Ingrese el nombre del estudiante: ");
   let apellido=prompt("Ingrese el apellido del estudiante: ");
   let materia=prompt("Ingrese el nombre de la materia: ");
   

   
   // Buscar al estudiante por nombre y apellido
   const estudiante = estudiantesNotas.find(est => est.nombre === nombre && est.apellido === apellido);
   
   if (!estudiante) {
       console.log("Estudiante no encontrado.");
       return;
   }

   // Buscar el examen de la materia especificada
   const examen = estudiante.examenes.find(ex => ex.materia === materia);
   
   if (!examen) {
       console.log("Materia no encontrada.");
       return;
   }
   console.log(`Las notas actuales de ${nombre} en la materia ${materia} son: ${examen.notas}`);
      let indiceNota=  Number(prompt("Ingrese el indice de la nota que quiere agregar sabiendo que indice en 0 es la primer nota: "));
      let nuevaNota=  Number(prompt("Ingrese la nueva nota: "));
   // Validar si el índice de la nota es válido
   if (indiceNota < 0 || indiceNota >= examen.notas.length) {
       console.log("Índice de nota inválido.");
       return;
   }

   // Cambiar la nota
   examen.notas[indiceNota] = nuevaNota;
   console.log(`Nota cambiada a ${nuevaNota} en la materia ${materia} para ${nombre} ${apellido}`);
   console.log(`Las notas actualizadas para  ${nombre} ${apellido} en la materia ${materia} ${examen.notas}`);
}

// Ejemplo de uso:
//cambiarNotaPorNombre("Carlos", "Fernandez", "programacion", 1, 9); 
cambiarNotaPorNombre()