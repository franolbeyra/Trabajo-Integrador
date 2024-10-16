import estudiantesNotas from './arraynotasyasistencia.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();



function Agregar(estudiantesNotas) {

    let nombre = prompt("Ingrese el nombre del estudiante: ");
    let apellido=prompt("Ingrese el apellido del estudiante: ");
    let materia=prompt("Ingrese el nombre de la materia: ");
    let num=  Number(prompt("Ingrese la nota que quiere agregar: "));
    
    for (let i = 0; i < estudiantesNotas.length; i++) {
        const estudiante = estudiantesNotas[i];
    
       

        // Verificamos si el nombre del estudiante coincide
        if (estudiante.nombre === nombre && estudiante.apellido === apellido) {
            // Ahora buscamos en los exámenes del estudiante
            for (let j = 0; j < estudiante.examenes.length; j++) {
                const examen = estudiante.examenes[j];

                // Verificamos si la materia coincide
                if (examen.materia === materia) {
                    examen.notas.push(num); //Agrega la nota
                    break; // Sale del bucle de exámenes una vez que agrega la nota
                }
            }
            break; // Sale del bucle exterior una vez que agrega la nota al estudiante
        }
    }

    // Imprimir los detalles de todos los estudiantes
    estudiantesNotas.forEach(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Apellido: ${estudiante.apellido}`);
        estudiante.examenes.forEach(examen => {
            console.log(`  Materia: ${examen.materia}`);
            console.log(`  Asistencia: ${examen.asistencia}`);
            console.log(`  Notas: ${examen.notas}`);
        });
    });

    //return estudiantesNotas; // Retorna el arreglo actualizado//
}

// Llamar a la función y mostrar los resultados
Agregar(estudiantesNotas);

export default estudiantesNotas