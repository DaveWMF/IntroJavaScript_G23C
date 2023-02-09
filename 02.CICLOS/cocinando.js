let ingredientes = [
    [1, "kg", "Espagueti"],
    [4, "L", "Agua"],
    "500,ml,Crema Acida".split(","),
    [300, "gr", "Queso"],
    [2, "Cucharada", "Mantequilla"],
    [2, "Cucharada", "Aceite"],
    ["Al gusto", "Sal"],
    ["Al gusto", "Pimienta"],
    [500, "gr", "Tocineta"]
];

// length es la cantidad de elementos: 5
let utenciliosDeCocina = [
    "Olla", // 0
    "Sarten", // 1
    "Rayador", // 2
    "Palita de madera", // 3
    "Colador" // 4
];

let receta;

// Como cambiar dinamicamente mi página
// document.querySelector("#ingredientes").innerHTML += ingredientes

for(let index = 0; index < ingredientes.length; index++){
    let ingredienteBonito = ""
    // Usamos un segundo ciclo para recorer los
    // elementos de nuestro ingrediente:
    //   cantidad, medida, nombre
    //   medida, nombre
    for(let index2 = 0; index2<ingredientes[index].length; index2++){
        ingredienteBonito += ingredientes[index][index2]
        ingredienteBonito += " "
    }
    document.querySelector("#ingredientes").innerHTML += "<li>" + ingredienteBonito + "</li>"
}

// utenciliosDeCocina

// let - sea
// let variable - sea una variable
// let variable = 5 - sea una variable con el valor 5

// for - por
// for (variable, condicion, manipulacion) - por la variable mientras se cumpla la condicion, ejecuta el codigo y manipula la variable

for(let index = 0; index < utenciliosDeCocina.length; index++){
    console.group("Iteracion " + index)

    console.log("index < utenciliosDeCocina.length = " + index + " < " 
    + utenciliosDeCocina.length + " = " + (index < utenciliosDeCocina.length))

    console.log("Imprimiento en pantalla... Datos: " + "<li>" + utenciliosDeCocina[index] + "</li>")
    document.querySelector("#utencilios").innerHTML += "<li>" + utenciliosDeCocina[index] + "</li>"

    console.log("Terminó iteración y mi nuevo index tiene el valor: " + (index+1))
    console.groupEnd()
}

// utenciliosDeCocina.length: 5

// Iteración 1
//      index: 0; 0 < 5: true;
//      
//      document.querySelector("#utencilios").innerHTML += "<li>" + utenciliosDeCocina[0] + "</li>"
//      
//      Termina el código:
//      index = index + 1: 1

// Iteración 2
//      index: 1; 1 < 5: true;
//      
//      document.querySelector("#utencilios").innerHTML += "<li>" + utenciliosDeCocina[1] + "</li>"
//      
//      Termina el código:
//      index = index + 1: 2



// ...



// Iteración 6
//      index: 5; 5 < 5: false;
//      
//      Salgo del ciclo


// Tarea
// Agregar un ciclo para colocar la receta con los <li>(list items)


// Tarea 2
// Imprimir en pantalla un cuadro
// let lado = 6
// ******
// ******
// ******
// ******
// ******
// ******


// Tarea 3
// Imprimir en pantalla un cuadro
// lado = 6
// ******
// ------
// ******
// ------
// ******
// ------