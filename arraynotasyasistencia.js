const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Pérez',
        examenes: [
            {
                materia: 'algebra',
                asistencia: [true, false, true], 
                notas: [8, 0, 7]                 
            },
            {
                materia: 'matematica',
                asistencia: [true, true, true],
                notas: [9, 8, 7]
            },
            {
                materia: 'sistemas de computacion',
                asistencia: [false, true, true],
                notas: [0, 7, 9]
            },
            {
                materia: 'ingles',
                asistencia: [true, true, false],
                notas: [8, 9, 0]
            },
            {
                materia: 'programacion',
                asistencia: [true, true, true],
                notas: [7, 8, 9]
            }
        ]
    },
    {
        nombre: 'María',
        apellido: 'López',
        examenes: [
            {
                materia: 'algebra',
                asistencia: [true, true, false],
                notas: [7, 9, 0]
            },
            {
                materia: 'matematica',
                asistencia: [true, false, true],
                notas: [8, 0, 9]
            },
            {
                materia: 'sistemas de computacion',
                asistencia: [true, true, true],
                notas: [6, 8, 7]
            },
            {
                materia: 'ingles',
                asistencia: [false, true, true],
                notas: [0, 8, 9]
            },
            {
                materia: 'programacion',
                asistencia: [true, true, false],
                notas: [9, 7, 0]
            }
        ]
    },
    {
        nombre: 'Pedro',
        apellido: 'González',
        examenes: [
            {
                materia: 'algebra',
                asistencia: [true, true, true],
                notas: [9, 8, 7]
            },
            {
                materia: 'matematica',
                asistencia: [true, false, true],
                notas: [9, 0, 8]
            },
            {
                materia: 'sistemas de computacion',
                asistencia: [true, true, false],
                notas: [7, 8, 0]
            },
            {
                materia: 'ingles',
                asistencia: [true, true, true],
                notas: [9, 7, 8]
            },
            {
                materia: 'programacion',
                asistencia: [false, true, true],
                notas: [0, 8, 7]
            }
        ]
    },
    {
        nombre: 'Laura',
        apellido: 'Martínez',
        examenes: [
            {
                materia: 'algebra',
                asistencia: [true, true, true],
                notas: [8, 9, 7]
            },
            {
                materia: 'matematica',
                asistencia: [false, true, true],
                notas: [0, 8, 9]
            },
            {
                materia: 'sistemas de computacion',
                asistencia: [true, true, false],
                notas: [7, 8, 0]
            },
            {
                materia: 'ingles',
                asistencia: [true, false, true],
                notas: [9, 0, 8]
            },
            {
                materia: 'programacion',
                asistencia: [true, true, true],
                notas: [8, 9, 7]
            }
        ]
    },
    {
        nombre: 'Carlos',
        apellido: 'Fernández',
        examenes: [
            {
                materia: 'algebra',
                asistencia: [false, true, true],
                notas: [0, 8, 9]
            },
            {
                materia: 'matematica',
                asistencia: [true, false, true],
                notas: [7, 0, 8]
            },
            {
                materia: 'sistemas de computacion',
                asistencia: [true, true, true],
                notas: [8, 9, 7]
            },
            {
                materia: 'ingles',
                asistencia: [true, true, false],
                notas: [9, 7, 0]
            },
            {
                materia: 'programacion',
                asistencia: [true, true, true],
                notas: [8, 7, 9]
            }
        ]
    }
];

console.log(estudiantes);

function calcularPromediosPorMateria(estudiantes) {
    const promedios = {};

    // Recorrer cada alumno
    for (let i = 0; i < estudiantes.length; i++) {
        const alumno = estudiantes[i];
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
const promediosPorMateria = calcularPromediosPorMateria(estudiantes);
console.log(promediosPorMateria);
