let numero = -500

console.log(0 <= numero)
console.log(numero >= 0)

let edadMinima = 18
let edadMaxima = 65

let edad = 60

console.log("Es un buen candidato?")
console.log(edadMinima <= edad && edad <= edadMaxima)


// let usuario = "Adriana"

// "prompt" nos sirve para pedirle datos al usuario en forma de palabras/strings/cadenas
let usuario = prompt("¿Dime tu nombre?")
const usuarioEnBaseDeDatos = "Adriana"

// Funciones

// Ejecución

// "console.log" nos sirve para imprimir datos en la consola de desarrollo
// Nos ayuda mucho a ver los datos que se tienen en un instante de tu código
console.log("El usuario es el mismo?")
console.log(usuario == usuarioEnBaseDeDatos)

console.log("Si son diferentes, debo hecharlo?")
console.log(usuario != usuarioEnBaseDeDatos)

console.log("Es bienvenido el usuario o no?")
// Si es el usuario correcto dile bienvenido
if (usuario != usuarioEnBaseDeDatos){
    console.log("Adios! No eres bienvenido")
    alert("Adios! No eres bienvenido")
}else{
    console.log("Bienvenido! Pasele a lo barrido")
    alert("Bienvenido! Pasele a lo barrido")
}

/**
 * Estructura recomendada:
 * 
 * Variables
 * 
 * Funciones
 * 
 * Ejecucion de código
 * 
 */
