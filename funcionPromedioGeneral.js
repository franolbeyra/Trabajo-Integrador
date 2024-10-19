import estudiantesNotas from './arraynotasyasistencia.js';

function calcularPromedioGeneral(estudiantesNotas) {
    const promediosGenerales = {}; // Objeto para almacenar el promedio de cada estudiante

    // Recorrer cada estudiante
    estudiantesNotas.forEach(estudiante => {
        let sumaTotal = 0;
        let cantidadTotal = 0;

        // Recorrer cada examen y sumar las notas
        estudiante.examenes.forEach(examen => {
            examen.notas.forEach(nota => {
                sumaTotal += nota;
                cantidadTotal++;
            });
        });

        // Calcular el promedio general del estudiante
        const promedioGeneral = (sumaTotal / cantidadTotal).toFixed(2);

        // Guardar el promedio con el nombre completo del estudiante
        promediosGenerales[`${estudiante.nombre} ${estudiante.apellido}`] = promedioGeneral;
    });

    return promediosGenerales; // Retornar el objeto con los promedios por estudiante
}

// Importar o definir estudiantesNotas

// Uso de la función
const promedioGeneral = calcularPromedioGeneral(estudiantesNotas);
//console.log(promedioGeneral);

export default calcularPromedioGeneral;


