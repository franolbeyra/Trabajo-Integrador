import estudiantes from './arreglodeasistencia.js';
import estudiantesNotas from './arraynotasyasistencia.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();


function agregarEstudiante() {
    const nombre = prompt("Ingrese el nombre del estudiante:");
    const apellido = prompt("Ingrese el apellido del estudiante:");

    // Obtener datos de asistencia anual
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

    // Obtener notas y asistencias por materia
    let examenes = [];
    let continuar = true;

    while (continuar) {
        let materia = prompt("Ingrese el nombre de la materia:");
        let notas = [];
        let asistencia = [];
        let num = parseInt(prompt("ingrese la cantidad de notas que quiere agregar: "))
        num = num-1
        for (let i = 0; i <= num; i++) {
        

            let nota = parseFloat(prompt(`Ingrese la nota ${i + 1} para ${materia}:`));
            notas.push(nota);

            let asistio = prompt(`¿El estudiante asistió a la clase ${i + 1} de ${materia}? (si/no)`).toLowerCase();
            asistencia.push(asistio === 'si');
        }

        examenes.push({
            materia: materia,
            asistencia: asistencia,
            notas: notas
        });

        continuar = prompt("¿Desea agregar otra materia? (si/no)").toLowerCase() === 'si';
    }

    // Agregar el nuevo estudiante a ambos arreglos base
    estudiantes.push({ nombre, apellido, asistenciaAnual });
    estudiantesNotas.push({ nombre, apellido, examenes });

    console.log(`Estudiante ${nombre} ${apellido} ha sido agregado a ambos registros.`);
}


export default agregarEstudiante