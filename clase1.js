// let nombre = "Juan Perez";
// let salarioBase= 2500;
// let bonificacion= 300.50;

// let salarioTotal= salarioBase+bonificacion;


// console.log(`Empleado ${nombre} su salario base es: ${salarioBase} y usted tiene una bonificacion
//      de ${bonificacion} y su salario total es de : ${salarioTotal}
//     `)

// let dolares=100;
// const tasaCambio = 0.92;

// let euros = dolares*tasaCambio;
// console.log(dolares, "USD equivale a ", euros.toFixed(2),"EUR")

// let edad = 17;
// let esMayor = edad >=18;

// console.log("¿Es mayor de edad?",esMayor ? "Si":"No")
/*
let peso = 120;
let altura = 1.75;

let imc = peso / (altura**2);
let estado = imc < 18.5 ? "Bajo Peso":
             imc<25?"Peso Normal":
             imc <30? "SobrePeso": "Obesidad";
             
console.log("IMC:",imc.toFixed(2))
console.log("Estado: ",estado)*/
const prompt = require("prompt-sync")();

// let numero = parseInt(prompt("Ingrese un numero positivo: "));

// let esPrimo= true;

// if(numero <2){
//     esPrimo=false;
// }else{
//     for(let i=2; i<numero;i++){
//         if( numero% i ===0){
//             esPrimo = false
//             break;
//         }
//     }
// }

// if(esPrimo){
//     console.log(`${numero} es primo`)
// }else{
//     console.log(`${numero} no es primo`)

// }

// let numero = parseInt(prompt("Ingrese un numero positivo entero: "))
// let numeroString= prompt("Ingrese un numero")

// console.log(numeroString.length)
// let digitos=0;

// if (numero=== 0){
//     digitos= 1;
// }else{
//     while(numero>0){
//         numero = Math.floor(numero/10)
//         digitos++;
//     }
// }

// console.log(`El numero de digitos son ${digitos}`)

let n = parseInt(prompt("Ingrese cuantos terminos de Fibonacci desea ver:"))

let fibonacci = [0,1];

for (let i =2; i<n; i++){
    fibonacci.push(fibonacci[i-1]+fibonacci[i-2]);
}
for(let i=0;i<fibonacci.length;i++){
    console.log(fibonacci[i])
}
console.log(`Serie de Fibonacci de ${n} terminos es:`,fibonacci.slice(0,n).join(", "))