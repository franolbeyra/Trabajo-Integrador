import estudiantesNotas from './arraynotasyasistencia.js';
import Agregar from './funcionAgregar_notas.js';
import calcularPromediosPorMateria from './funcionPromedioMateria.js';
import calcularPromedioGeneral from './funcionPromedioGeneral.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();

function menu() {
    let opcion;
    do {
        console.log("Selecciona una opción:");
        console.log("1. Agregar una nota");
        console.log("2. Calcular promedios por materia");
        console.log("3. Calcular promedios general");
        console.log("0. Salir");
        opcion = prompt("Ingrese el número de opción (o escriba 'salir' para terminar): ").toLowerCase();

        if (opcion === '1') {
            Agregar();
        } else if (opcion === '2') {
            const promediosPorMateria = calcularPromediosPorMateria(estudiantesNotas);
            console.log(promediosPorMateria);
        } else if (opcion === '3') {
            const promediosGeneral = calcularPromedioGeneral(estudiantesNotas);
            console.log(promediosGeneral);
        } else if (opcion !== '0' && opcion !== 'salir') {
            console.log("Opción no válida, por favor selecciona una opción del menú.");
        }
    } while (opcion !== '0' && opcion !== 'salir');

    console.log("Saliendo del programa...")}

    menu();