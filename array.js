let numeros = [10,20,30,50,85,3,23,11,5]

// console.log(numeros)
// numeros.push(78) // Se agrega al final del array
// console.log(numeros)
// numeros.unshift(9) // Se agrega al inicio del array
// console.log(numeros)
// numeros.pop() //Elimina el ultimo del array
// console.log(numeros)
// numeros.shift() // Elimina el primero del array
// console.log(numeros)
// numeros.splice(3,1) //Elimina por el indice
// console.log(numeros)

// numeros.sort((a,b)=>a-b) //Ordena ASC
// console.log(numeros)
// numeros.sort((a,b)=>a-b).reverse() //Ordena DESC

// let mayoresDe10 = numeros.filter(num=> num>10) // Metodo filtrar
// console.log(mayoresDe10)

let dobles = numeros.map(num => num*2) //Transforma los datos y los multiplica por 2
console.log(dobles)

let suma = numeros.reduce((total,num)=> total +num,0)// Acumula valores
//total es la variable que va acumular los valores y num la variable iteradora
console.log(suma)