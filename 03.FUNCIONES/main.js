//* COCINANDO FUNCIONES

//* HACER UNA FUNCION QUE RECIBA COMO PARAMETRO DOS NUMEROS Y
//* TE DE EL RESULTADO DE LA SUMA DE AMBOS

    //*1) DECLARAR MI FUNCIÓN
    //*2) LLAMAR A LA FUNCIÓN QUE ACABAMOS DE CREAR


    function sumaNumeros(x,y) {
        let suma = x + y  
        console.log(`La suma es: ${suma}`) // console.log("la suma es: " + suma)
    }
    sumaNumeros(2,2)


    //* HACER UNA FUNCION QUE RECIBA COMO PARAMETRO UN NUMERO 
    //* Y TE DE COMO RESULTADO LA TABLA DE MULTIPLICAR DEL 2

    function Multiplicar (x) {
        //contador 
        for(let i=2; i<10; i++){
            console.log("2 x " + i + " : " + i*x)
        }              // 2 x 2, 2 * 3 , 2 * 4
    }
    Multiplicar(2)

//* HACER UNA FUNCION QUE PIDA A UN USUARIO SU EDAD
//* SABER SI ES MAYOR O MENOR DE EDAD

    function mayorEdad (edad) {
        var edad = window.prompt("¿CUANTOS AÑOS TIENES?")
        //* validamos la edad 
        if(edad < 18){
            console.log("ERES MENOR DE EDAD")
        }else if (edad >= 18){
            console.log("ERES MAYOR DE EDAD")
        }else{
            console.log("EDAD NO VALIDA 🤯")
        }
    }
    mayorEdad()

    //* HACER UNA FUNCION QUE PIDA A UN USUARIO SU NOMBRE, APELLIDO Y EDAD
    //* IMPRIMIR SUS DATOS EN UNA TABLA

    function persona(nombre,apellido,edad){
        var nombre = window.prompt("¿COMO TE LLAMAS?")
        var apellido = window.prompt("¿COMO TE APELLIDAS?")
        var edad = window.prompt("¿CUANTOS AÑOS TIENES?")
            console.table([
                nombre,apellido,edad
            ])
    }
    persona() 

    //* ENTENDIENDO QUE ES EL HOISTING 

    
    
    var nombre = "juanito"
    var edad = 19
    var apellido = "maya"
    var isAlive = true


    function saludar () {  
        console.log("HOLA: " + nombre + edad + apellido + isAlive)
    }
     saludar ()