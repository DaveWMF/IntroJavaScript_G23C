
/** 
 * ------------------------------------------------------
 * Ejemplo de ciclo while
 * ------------------------------------------------------
 *  */
let index = 0;
while(index < 11){
    console.log("Voy en el número "+index)
    index++; // index = index + 1
}


/** 
 * ------------------------------------------------------
 * Ejemplo de tablas de multiplicar con ciclo while
 * ------------------------------------------------------
 *  */

index = 0;
while(index < 11){
    console.log(index + " * " + 2 + " = " + (index*2))
    index++;
}

/** 
 * ------------------------------------------------------
 * Ejemplo de condicion con palabras/cadenas/strings
 * ------------------------------------------------------
 *  */

let palabra;
let lista = []
while(palabra != ""){
    palabra = prompt("¿Qué añado?")
    lista.push(palabra)
}

console.log("Mi lista: " + lista)


/** 
 * ------------------------------------------------------
 * Ejemplo de emprendimiento
 * ------------------------------------------------------
 *  */

let dinero = 100;

do{
    console.log("Probar una idea. Gasto 100. ")
    dinero -= 100
    console.log("Intento vender la idea")

    // parseInt es para enteros: 1,50,500
    // parseFloat es para reales: 1, 2.5, 500.6678
    let resultadoVenta = parseInt(prompt("¿Cuánto gané o perdí?"))
    dinero = dinero + resultadoVenta
    console.log("Dinero Final: "+ dinero)

}while(dinero >= 100);

console.log("Ya no puedo emprender. Estoy casi endeudado!")


/** 
 * ------------------------------------------------------
 * Ejemplo de contraseña
 * ------------------------------------------------------
 *  */
let contraseña = "patito"
let input
do{
    // Pregunto por la contraseña
    input = prompt("Contraseña:")
}while(input != contraseña) // Repite si la contraseña no es igual

alert("Bienvenido!")


/** 
 * ------------------------------------------------------
 * Ejemplo de contraseña con 5 intentos
 * ------------------------------------------------------
 *  */
contraseña = "patito";
input = "";
intentos = 0;
do{
    // Mientras tenga intentos pregunta, si no le manda error
    if(intentos >= 5){
        throw Error("Acceso denegado");
    }
    input = prompt("Contraseña:");
    intentos ++;
}while(input != contraseña); // Repite si la contraseña no es igual

alert("Bienvenido!");

/** 
 * ------------------------------------------------------
 * Ejemplo de contador con proceso al mismo tiempo (concurrente)
 * ------------------------------------------------------
 *  */
var contador = 0;

for(let i = 1, x = 0; i <= 10; i++, x++){
    // Si es divisible entre 2 agrego 1 al contador
    if(i%2 == 0){ 
        contador++;
    }
    // Imprime la tabla de multiplicar
    console.log( x + " * "+ 2 +" = " +(x*2)) 
}

console.log("Numeros pares entre 1 y 10: "+ contador)