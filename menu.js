import estudiantesNotas from './arraynotasyasistencia.js';
import agregar from './funcionAgregar_notas.js';
import calcularPromediosPorMateria from './funcionPromedioMateria.js';
import calcularPromedioGeneral from './funcionPromedioGeneral.js';
import calcularAsistencia from './funcion_asistencia.js';
import cambiarNotaPorNombre from './funcion_cambiarnota.js';
import obtenerPromociones from './funcionPromocion2.js';
import agregarEstudiante from './funcionAgregarAlumnos.js';
import promptSync from 'prompt-sync';
import estudiantes from './arreglodeasistencia.js';


const prompt = promptSync();

function menu() {
    let opcion;
    do {
        console.log("Selecciona una opción:");
        console.log("1. Agregar una nota");
        console.log("2. Calcular promedios por materia");
        console.log("3. Calcular promedios general");
        console.log("4. Cambiar nota");       
        console.log("5. Asistencia estudiantes");    
        console.log("6. Estudiantes habilitados a promocion"); 
        console.log("7. Agregar nuevo alumno");
        console.log("0. Salir");
        opcion = prompt("Ingrese el número de opción (o escriba 'salir' para terminar): ").toLowerCase();

        if (opcion === '1') {
            const agregarNota = agregar(estudiantesNotas);
            console.log(agregarNota);
        } else if (opcion === '2') {
            const promediosPorMateria = calcularPromediosPorMateria(estudiantesNotas);
            console.log(promediosPorMateria);
        } else if (opcion === '3') {
            const promediosGeneral = calcularPromedioGeneral(estudiantesNotas);
            console.log(promediosGeneral);
        } else if (opcion === '4') {
            const cambioDeNotas = cambiarNotaPorNombre(estudiantesNotas);
            console.log(cambioDeNotas);
        } else if (opcion === '5') {
            const promedioAsistencia = calcularAsistencia(estudiantesNotas);
            console.log(promedioAsistencia);
        } else if (opcion === '6') {
            const promocion = obtenerPromociones(estudiantesNotas);
            console.log(promocion);
        } else if (opcion === '7') {
            const nuevoEstudiante = agregarEstudiante(estudiantes,estudiantesNotas);
            console.log(nuevoEstudiante);
        } else if (opcion !== '0' && opcion !== 'salir') {
            console.log("Opción no válida, por favor selecciona una opción del menú.");
        
        }
    } while (opcion !== '0' && opcion !== 'salir');

    console.log("Saliendo del programa...")}

    menu();
    