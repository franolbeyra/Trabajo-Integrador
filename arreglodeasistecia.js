const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Pérez',
        asistenciaAnual: {
            marzo: 15,
            abril: 18,
            mayo: 20,
            junio: 19,
            julio: 17,
            agosto: 20,
            septiembre: 18,
            octubre: 14,
            noviembre: 16,
            diciembre: 10 // Suma total = 157
        }
    },
    {
        nombre: 'María',
        apellido: 'López',
        asistenciaAnual: {
            marzo: 22,
            abril: 20,
            mayo: 18,
            junio: 16,
            julio: 15,
            agosto: 19,
            septiembre: 14,
            octubre: 20,
            noviembre: 15,
            diciembre: 12 // Suma total = 170
        }
    },
    {
        nombre: 'Pedro',
        apellido: 'González',
        asistenciaAnual: {
            marzo: 20,
            abril: 18,
            mayo: 19,
            junio: 21,
            julio: 14,
            agosto: 17,
            septiembre: 18,
            octubre: 16,
            noviembre: 15,
            diciembre: 10 // Suma total = 168
        }
    },
    {
        nombre: 'Laura',
        apellido: 'Martínez',
        asistenciaAnual: {
            marzo: 17,
            abril: 19,
            mayo: 20,
            junio: 18,
            julio: 16,
            agosto: 20,
            septiembre: 15,
            octubre: 18,
            noviembre: 14,
            diciembre: 11 // Suma total = 168
        }
    },
    {
        nombre: 'Carlos',
        apellido: 'Fernández',
        asistenciaAnual: {
            marzo: 20,
            abril: 19,
            mayo: 20,
            junio: 20,
            julio: 10,
            agosto: 15,
            septiembre: 14,
            octubre: 16,
            noviembre: 12,
            diciembre: 8 // Suma total = 154
        }
    }
];

console.log(estudiantes);

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
