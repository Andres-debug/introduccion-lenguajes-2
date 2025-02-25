const prompt = require('prompt-sync')();

// let num1 = parseFloat(prompt("Ingrese el primer numero: "))
// let num2 = parseFloat(prompt("Ingrese el segundo numero: "))
// let operacion = prompt("Ingrese la operacion (+, -, *, /)")

// let resultado;

// switch(operacion){

//     case "+":
//         resultado = num1+num2
//         break;
//     case "-":
//         resultado = num1-num2
//         break;
//     case "*":
//         resultado=num1*num2
//         break
//     case "/":
//         resultado= num2 !==0 ? num1/num2 : "no se puede dividir por 0"
//         break;
//     default:
//         resultado= "Operacion no valida"
// }

// console.log(`Resultado ${resultado}`)

// let contador = 0

// while(true){
//     let numero = parseInt(prompt("Ingrese un numero: "))
//     if(numero<0) break;
//     contador ++;
// }

// console.log("Cantidad de numeros positivos ingresador: ",contador)

// let numero = parseInt(prompt("Ingrese un numero: "))
// let factorial =1;

// for(let i=1; i<=numero;i++){
//     factorial*=i;
// }

// console.log(factorial)


// let inicio = parseInt(prompt("Ingrese el numero Inicial: "))
// let fin = parseInt(prompt("Ingrese el numero final: "))

// console.log("Numero Pares: ")
// for(let i =inicio; i<=fin; i++){
//     if(i%2 ===0){
//         console.log(i)
//     }
// }

let numeroSecreto = Math.floor(Math.random()*50)+1
let intento;

console.log("Adivina el numero entre 1 y 50")

while(true){
    intento = parseInt(prompt("Ingresa el numero: "))

    if(intento===numeroSecreto){
        console.log("Adivinaste")
        break;
    }else if (intento< numeroSecreto){
        console.log("Muy Bajo")
    }else{
        console.log("Muy alto")
    }
}