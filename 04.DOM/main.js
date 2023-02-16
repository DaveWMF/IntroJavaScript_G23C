
// Podemos seleccionar el elemento body de 2 formas:
//  - Por referencia directa: document.body
//  - Por selector: document.querySelector("body")
document.querySelector("body").style.backgroundColor = "lightblue"

// Recordemos que para manipular nuestras páginas
// tenemos que:
//  - Seleccionar elemento:
//     - let elemento = document.querySelector("etiqueta")
//     - let elemento = document.querySelector(".clase")
//     - let elemento = document.querySelector("#identificador")
//  - Manipular elemento:
//     - elemento.style.background = "red"
//     - elemento.innerHTML = "Holo!"
//     - elemento.innerHTML = `<div>Soy un componente loco</div>`
function turnGreen(){
    document.body.classList.remove("blue")
    document.body.classList.remove("purple")
    document.body.style.backgroundColor = "#56CB4A"
}

function addMorado(){
    document.body.classList.remove("blue")
    document.body.classList.add("purple")
}

function addBlue(){
    document.body.classList.remove("purple")
    document.body.classList.add("blue")
}

function addStudent(){
    // let nodoAlumno = document.getElementById("name")
    let nodoAlumno = document.querySelector("#name")

    // document.querySelector("#students").innerHTML += `<p>Alumno: ${nodoAlumno.value}</p>`
    document.querySelector("#students").innerHTML += "<p>Alumno:" + nodoAlumno.value + "</p>"
}

// function addDarkBlue(){
//     document.body.classList.remove("blue")
//     document.body.classList.remove("purple")
//     document.body.style.backgroundColor = "blue"
// }

let addDarkBlue = ()=>{
    document.body.classList.remove("blue")
    document.body.classList.remove("purple")
    document.body.style.backgroundColor = "blue"
}

function runParty(){
    setTimeout(addDarkBlue, 500)

    setTimeout(function (){
        document.body.classList.remove("blue")
        document.body.classList.remove("purple")
        document.body.style.backgroundColor = "aqua"
    },1000)

    setTimeout(turnGreen, 1500)

    setTimeout((/**parametros */)=>{
        document.body.classList.remove("blue")
        document.body.classList.remove("purple")
        document.body.style.backgroundColor = "magenta" // gradient(...)
    }, 2000)

    //setTimeout(addMorado, 2500)

    setInterval(()=>{
        let MAX_COLOR = 16777215; // # FF FF FF - Hecadecimal
        let colorAleatorio = Math.floor(Math.random() * MAX_COLOR);

        // 
        document.body.style.backgroundColor = "#"+colorAleatorio.toString(16);
    }, 1000)
}

function changeTitle(){
    setInterval(()=>document.querySelector("h1").style.transform = "rotate(0.1turn)", 500)
}