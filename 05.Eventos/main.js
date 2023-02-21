
// Método tradicional
// documnet.getElementById("btnSumar")
// Método moderno
document.querySelector("#btnSumar").onclick = ()=>{
    let num1 = parseFloat(document.querySelector("#numero1").value)
    let num2 = parseFloat(document.querySelector("#numero2").value)

    // Si no utilizamos más una variable, podemos omitirla y mostrarla de forma
    // inmediata. Ahorrando así espacio en memoria
    // let resultado = num1 + num2

    // innerHTML nos ayuda a agregar elementos o reemplazar los elementos dentro de una etiqueta
    document.querySelector("#resultado").innerHTML = num1 + num2;
}

document.querySelector("#btnComparar").addEventListener("mouseover", function(){
    let numeroAComparar = parseFloat(document.querySelector("#numero3").value)
    let numeroComparador = parseFloat(document.querySelector("#numero4").value)

    if(numeroAComparar > numeroComparador){
        document.querySelector("#resultado2").innerHTML = numeroAComparar + " es mayor a " + numeroComparador
    }else if(numeroAComparar == numeroComparador){
        document.querySelector("#resultado2").innerHTML = numeroAComparar + " es igual a " + numeroComparador
    }else{
        // ` es un simbolo que nos permite crear plantillas de String. Con las cuales
        // podemos incrustar variables con los símbolos ${<nombre de variable>}
        document.querySelector("#resultado2").innerHTML = `${numeroAComparar} es menor a ${numeroComparador}`
    }
});