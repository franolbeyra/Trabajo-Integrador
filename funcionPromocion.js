import estudiantesNotas from './arraynotasyasistencia.js';
import calcularAsistencia from './funcion_asistencia.js'
import calcularPromediosPorMateria from './calcularPromedioMateria.js'; // Suponiendo que aquí esté la función de promedios

function verificarPromocion(promedioMinimo = 7, asistenciaMinima = 70) {
    const promedios = calcularPromediosPorMateria(estudiantesNotas);
    const asistencias = calcularAsistencia();

    // Arreglo para almacenar los resultados de promoción
    let resultadosPromocion = [];

    // Verificar la promoción por cada estudiante
    for (let i = 0; i < asistencias.length; i++) {
        const estudiante = asistencias[i];
        const nombreCompleto = `${estudiante.nombre} ${estudiante.apellido}`;
        const promedioAsistencia = parseInt(estudiante.promedioAsistidor);

        // Verificar si cumple con la asistencia mínima
        if (promedioAsistencia >= asistenciaMinima) {
            // Verificar si cumple con el promedio mínimo en cada materia
            let materiasPromocionadas = [];
            for (let materia in promedios) {
                if (promedios[materia][nombreCompleto] >= promedioMinimo) {
                    materiasPromocionadas.push(materia);
                }
            }

            // Almacenar los resultados de promoción
            if (materiasPromocionadas.length > 0) {
                resultadosPromocion.push({
                    nombre: nombreCompleto,
                    materiasPromocionadas: materiasPromocionadas,
                    promedioAsistencia: promedioAsistencia
                });
            }
        }
    }

    // Mostrar los resultados de la promoción
    resultadosPromocion.forEach(estudiante => {
        console.log(`${estudiante.nombre} promocionó en las siguientes materias:`);
        estudiante.materiasPromocionadas.forEach(materia => {
            console.log(`- ${materia}`);
        });
        console.log(`Promedio de Asistencia: ${estudiante.promedioAsistencia}%\n`);
    });

    return resultadosPromocion; // Retornar los resultados de promoción si es necesario
}

// Llamar a la función para verificar la promoción
verificarPromocion(7, 70);

export default verificarPromocion;
