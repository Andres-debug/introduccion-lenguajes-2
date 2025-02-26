const prompt = require("prompt-sync")();

// try{
//     let numero = parseInt(prompt("Ingrese un numero"));
//     console.log(isNaN(numero))

//     if(isNaN(numero)){
//         throw new Error("Entrada invalida. Debe Ingresar un numero")
//     }
//     console.log(`Numero ingresado ${numero}`)

// }catch(error){
//     console.error(error.message)
// }

// class NumeroNegativoError extends Error{
//     constructor(message){
//         super(message);
//         this.name="NumeroNegativoError"
//     }
// }


// try{
//     let entrada = prompt("Ingrese un numero enter positivo: ").trim()

//     if (entrada ===""){
//         throw new Error("Entrada vacia. Debe ingresar un numero")
//     }

//     let numero = parseInt(entrada);

//     if(isNaN(numero)){
//         throw new Error("Entrada invalida. Ingrese un numero valido")
//     }

//     if(numero<0){
//         throw new NumeroNegativoError("No se permiten numero negativos")
//     }

//     console.log(`Numero ingresado ${numero}`)

// }catch(error){
//     console.error(`${error.name}: ${error.message}`)
// }finally{
//     console.log("Fin del programa")
// }

// let numeros = [10,5,8,20,15]

// console.log("Array Original ",numeros)

// numeros.push(25)
// console.log("Despues de agregar el 25 ",numeros)

// let eliminado = numeros.pop();
// console.log("Numero eliminado", eliminado)
// console.log("Array despues de eliminar el ultimo elemento: ",numeros)

// numeros.sort((a,b)=>a-b)
// console.log("Lista ordenada ",numeros)

// let buscar = 5
// let encontrado = numeros.includes(buscar);
// console.log(`El numero ${buscar} esta en el array? ${encontrado ? "Si":"No"} `)

// console.log("Numeros del array: ")
// numeros.forEach(num=>console.log(num))

let estudiantes = [
    {nombre:"Juan",calificacion: 90},
    {nombre:"Pedro",calificacion: 50},
]

function agregarEstudiante(){
    let nombre =prompt("Ingrese el nombre del estudiante: ")
    let calificacion = parseFloat(prompt(`Ingrese la calificacion de ${nombre}: `))

    if(isNaN(calificacion)|| calificacion<0 || calificacion>100){
        console("Calificacion invalida")
        return;
    }

    estudiantes.push({nombre,calificacion})
    console.log("Estudiante agregado")
}

function eliminarEstudiante(){
    let nombre = prompt("Ingrese el nombre del estudiante: ");
    let index = estudiantes.findIndex(estudiante=>
        estudiante.nombre.toLowerCase()== nombre.toLowerCase())
    
        if(index !== -1){
            estudiantes.splice(index,1)
            console.log("Estudiante eliminado")
        
        }else{
            console.log("Estudiante no encontrado")
        }
}

function mostrarEstudiantes(){

    if(estudiantes.length===0){
        console.log("No hay estudinates registrados")
        return;
    }
    console.log("Lista de estudiantes");
    estudiantes.forEach(estudiante=>{
        console.log(`-${estudiante.nombre}: ${estudiante.calificacion}`)
    })
}

function calcularPromedio(){
    if(estudiantes.length===0){
        console.log("No hay calificaciones registradas")
        return
    }

    let sum = estudiantes.reduce((total,estudiante)=>total + estudiante.calificacion,0)
    console.log(`Promedio de calificaciones: ${(sum/estudiantes.length).toFixed(2)}`)
}

calcularPromedio()


console.log(estudiantes)