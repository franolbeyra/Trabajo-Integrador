import calcularPromediosPorMateria from './funcionPromedioMateria.js';
import estudiantesNotas from './arraynotasyasistencia.js';

function verificarPromocion() {
    const promedios = calcularPromediosPorMateria(); // Calcular promedios sin pasar argumentos
    const habilitadosPromocion = [];

    // Recorrer las materias
    for (let materia in promedios) {
        // Recorrer los estudiantes dentro de cada materia
        for (let estudiante in promedios[materia]) {
            if (promedios[materia][estudiante] > 8) {
                habilitadosPromocion.push(estudiante);
            }
        }
    }

    return habilitadosPromocion; // Devolver un arreglo con los estudiantes habilitados
}

export default verificarPromocion;
