const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Pérez',
        asistenciaAnual: {
            marzo: 22,
            abril: 20,
            mayo: 21,
            junio: 19,
            julio: 23,
            agosto: 25,
            septiembre: 20,
            octubre: 22,
            noviembre: 19,
            diciembre: 21
        }
    },
    {
        nombre: 'María',
        apellido: 'López',
        asistenciaAnual: {
            marzo: 23,
            abril: 21,
            mayo: 22,
            junio: 18,
            julio: 24,
            agosto: 23,
            septiembre: 21,
            octubre: 22,
            noviembre: 20,
            diciembre: 22
        }
    },
    {
        nombre: 'Pedro',
        apellido: 'González',
        asistenciaAnual: {
            marzo: 20,
            abril: 19,
            mayo: 22,
            junio: 20,
            julio: 23,
            agosto: 24,
            septiembre: 22,
            octubre: 21,
            noviembre: 19,
            diciembre: 20
        }
    },
    {
        nombre: 'Laura',
        apellido: 'Martínez',
        asistenciaAnual: {
            marzo: 22,
            abril: 20,
            mayo: 23,
            junio: 19,
            julio: 22,
            agosto: 21,
            septiembre: 23,
            octubre: 22,
            noviembre: 21,
            diciembre: 23
        }
    },
    {
        nombre: 'Carlos',
        apellido: 'Fernández',
        asistenciaAnual: {
            marzo: 21,
            abril: 22,
            mayo: 21,
            junio: 18,
            julio: 20,
            agosto: 22,
            septiembre: 23,
            octubre: 21,
            noviembre: 20,
            diciembre: 22
        }
    }
];

console.log(estudiantes);


function Asistenciaanual() {
    
}
const totalDiasHabiles = 190;

for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    
    let asistenciaTotal = 0; 

    const meses = Object.keys(estudiante.asistenciaAnual); 
    for (let j = 0; j < meses.length; j++) {
        const mes = meses[j];
        asistenciaTotal += estudiante.asistenciaAnual[mes]; // Sumar los días de asistencia
    }

    // Calcular faltas
    const faltas = totalDiasHabiles - asistenciaTotal;
}

    console.log(`${estudiante.nombre} ${estudiante.apellido}:`);
    console.log(`Asistencia Total: ${asistenciaTotal}`);
    