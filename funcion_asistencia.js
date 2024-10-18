import estudiantes from './arreglodeasistencia.js';
function calcularAsistencia() {
    const totalDiasHabiles = 190;

    // Crear un arreglo para almacenar los resultados
    let resultados = [];

    for (let i = 0; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
        let asistenciaTotal = 0;

        // Sumar los días de asistencia
        const meses = Object.keys(estudiante.asistenciaAnual);
        for (let j = 0; j < meses.length; j++) {
            const mes = meses[j];
            asistenciaTotal += estudiante.asistenciaAnual[mes];
        }
        const promedioAsistidor = (((asistenciaTotal * 100) / totalDiasHabiles).toFixed(0)) + " %"

        // Calcular faltas
        const faltas = totalDiasHabiles - asistenciaTotal;

        

        // Agregar el resultado al arreglo
        resultados.push({
            nombre: estudiante.nombre,
            apellido: estudiante.apellido,
            asistenciaTotal: asistenciaTotal,
            promedioAsistidor: promedioAsistidor,
            faltas: faltas
            
        });
    }

    // Ordenar los resultados por asistenciaTotal usando .sort()
    resultados.sort(function(a, b) {
        return a.asistenciaTotal - b.asistenciaTotal; // Ordenar de menor a mayor
    });

    // Mostrar los resultados ordenados
    for (let k = 0; k < resultados.length; k++) {
        console.log(`${resultados[k].nombre} ${resultados[k].apellido}:`);
        console.log(`Asistencia Total: ${resultados[k].asistenciaTotal}`);
        console.log(`Promedio Asistencia: ${resultados[k].promedioAsistidor}`);
        console.log(`Faltas: ${resultados[k].faltas}`);
    }
}

// Llamar a la función para calcular y mostrar la asistencia
calcularAsistencia();


export default calcularAsistencia

