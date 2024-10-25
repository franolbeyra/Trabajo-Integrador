const prompt = promptSync();

import promptSync from 'prompt-sync';


let estudiantes = []; // Arreglo global para almacenar todos los estudiantes

function agregarEstudiante() {
    const nombre = prompt("Ingrese el nombre del estudiante:");
    const apellido = prompt("Ingrese el apellido del estudiante:");

    // Arreglo para almacenar los exámenes y notas del estudiante
    let examenes = [];
    let continuar = true;

    // Ciclo para ingresar materias, notas y asistencias para cada materia
    while (continuar) {
        // Ingresar la materia
        let materia = prompt("Ingrese el nombre de la materia:");

        // Ingresar las notas para la materia
        let notas = [];
        for (let i = 0; i < 3; i++) {
            let nota = parseFloat(prompt(`Ingrese la nota ${i + 1} para la materia ${materia}:`));
            notas.push(nota);
        }

        // Ingresar la asistencia para la materia
        let asistencia = [];
        for (let i = 0; i < 3; i++) {
            let asistio = prompt(`¿El estudiante asistió a la clase ${i + 1} de ${materia}? (si/no)`).toLowerCase();
            asistencia.push(asistio === 'si');  // Convertir "si" en true y "no" en false
        }

        // Agregar el objeto examen al arreglo de exámenes
        examenes.push({
            materia: materia,
            asistencia: asistencia,
            notas: notas
        });

        // Preguntar si desea agregar más materias
        continuar = prompt("¿Desea agregar otra materia? (si/no)").toLowerCase() === 'si';
    }

    // Ingresar la asistencia anual para el estudiante
    let asistenciaAnual = {
        marzo: parseInt(prompt("Ingrese la asistencia de marzo:")),
        abril: parseInt(prompt("Ingrese la asistencia de abril:")),
        mayo: parseInt(prompt("Ingrese la asistencia de mayo:")),
        junio: parseInt(prompt("Ingrese la asistencia de junio:")),
        julio: parseInt(prompt("Ingrese la asistencia de julio:")),
        agosto: parseInt(prompt("Ingrese la asistencia de agosto:")),
        septiembre: parseInt(prompt("Ingrese la asistencia de septiembre:")),
        octubre: parseInt(prompt("Ingrese la asistencia de octubre:")),
        noviembre: parseInt(prompt("Ingrese la asistencia de noviembre:")),
        diciembre: parseInt(prompt("Ingrese la asistencia de diciembre:"))
    };


    // Agregar el estudiante al arreglo de estudiantes
    estudiantes.push({
        nombre: nombre,
        apellido: apellido,
        examenes: examenes,
        asistenciaAnual: asistenciaAnual
    });

    // Confirmar la adición del estudiante
    console.log(`${nombre} ${apellido} ha sido agregado al arreglo de estudiantes.`);
}

// Ejecutar la función para agregar un nuevo estudiante
//agregarEstudiante();


export default agregarEstudiante