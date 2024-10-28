//import estudiantesNotas from './arraynotasyasistencia.js';
import calcularPromediosPorMateria from './funcionPromedioMateria.js';

function obtenerPromociones(estudiantesNotas) {
    const datosPromedios = calcularPromediosPorMateria(estudiantesNotas);
    let materias = Object.keys(datosPromedios); // Obtenemos las materias
    let resultados = [];

    // Primer for: Iteramos sobre las materias
    for (let i = 0; i < materias.length; i++) {
        let materia = materias[i];
        let promocionados = [];
        let estudiantes = Object.keys(datosPromedios[materia]); // Obtenemos los estudiantes para cada materia

        // Segundo for: Iteramos sobre los estudiantes de cada materia
        for (let j = 0; j < estudiantes.length; j++) {
            let estudiante = estudiantes[j];
            let promedio = parseFloat(datosPromedios[materia][estudiante]);

            // Si el promedio es mayor a 8, el estudiante promociona
            if (promedio >= 8) {
                promocionados.push(estudiante);
            }
        }

        // Guardamos los resultados para cada materia
        if (promocionados.length > 0) {
            resultados.push(materia + ": " + promocionados.join(', ') + " habilitado/s a promoción");
        } else {
            resultados.push(materia + ": Nadie promocionó");
        }
    }

    return resultados;
}
 

  export default obtenerPromociones;