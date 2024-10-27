funcionPromedioMateria.js

import estudiantesNotas from './arraynotasyasistencia.js';

function calcularPromediosPorMateria() {
    const promedios = {};

    // Recorrer cada estudiante
    for (let i = 0; i < estudiantesNotas.length; i++) {
        const alumno = estudiantesNotas[i];
        const nombre = alumno.nombre;

        // Recorrer cada examen del estudiante
        for (let k = 0; k < alumno.examenes.length; k++) {
            const examen = alumno.examenes[k];
            const materia = examen.materia;
            const notas = examen.notas;
            let suma = 0;
            let cantidad = notas.length;

            // Sumar las notas
            for (let j = 0; j < notas.length; j++) {
                suma += notas[j];
            }

            // Calcular el promedio y dejar dos digitos
            const promedio = (suma / cantidad).toFixed(2);

            // Guardar el promedio en el objeto promedios
            if (!promedios[materia]) {
                promedios[materia] = {};
            }
            promedios[materia][nombre] = promedio;
        }
    }

    return promedios; // Retornar el objeto con promedios
}

// Uso de la función
const promediosPorMateria = calcularPromediosPorMateria(estudiantesNotas);


export default calcularPromediosPorMateria;