function calcularPromediosPorMateria(alumnos) {
    const promedios = {};

    // Recorrer cada alumno
    for (let i = 0; i < alumnos.length; i++) {
        const alumno = alumnos[i];
        const nombre = alumno.nombre;

        // Recorrer cada materia
        for (const materia in alumno.notas) {
            const notas = alumno.notas[materia];
            let suma = 0; // Inicializar la suma
            let cantidad = 0; // Contador de notas

            // Sumar las notas manualmente
            for (let j = 0; j < notas.length; j++) {
                suma += notas[j]; // Sumar nota
                cantidad++; // Contar notas
            }

            // Calcular el promedio
            const promedio = suma / cantidad;

            // Guardar el promedio en el objeto promedios
            if (!promedios[materia]) {
                promedios[materia] = {};
            }
            promedios[materia][nombre] = promedio; // Asignar el promedio al alumno
        }
    }

    return promedios; // Retornar el objeto con promedios
}

// Uso de la función
const promediosPorMateria = calcularPromediosPorMateria(alumnos);
console.log(promediosPorMateria);
