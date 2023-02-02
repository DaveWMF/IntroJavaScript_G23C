
// Multiplicamos por 3 para definir piedra, papel o tijera
// Math.random() siempre devuelve un numero entre 0 y 1
// let respuestaCompu = Math.round(Math.random() * 3);

// Al codificar pensando en los posibles errores se le llama programacion preventiva
let respuestaCompu = Math.round(Math.random() * 2);
// En otros lenguajes
// Si cae en 1.0 y se multiplica por 3 entonces existe un error
// let respuestaCompu = Math.floor(Math.random() * 3); // 2.99999 lo convierte a 2. 


let respuestaUsuario = prompt("¿Qué eliges: piedra, papel o tijeras?")

if(respuestaUsuario == "piedra"){
    // Cambiar la variable por un numero
    respuestaUsuario = 0;
} else if(respuestaUsuario == "papel"){
    respuestaUsuario = 1; 
} else if(respuestaUsuario == "tijeras"){
    respuestaUsuario = 2;
} else{
    alert("Solo puedes elegir piedra papel o tijeras")
    throw Error("El usuario no quiso poner algo correcto") // Acaba el programa
}

// 0 es piedra
// 1 es papel
// 2 es tijeras
if(respuestaCompu == respuestaUsuario){
    alert("Empate!!!");
}else if(respuestaCompu == 0 && respuestaUsuario == 1){
    alert("Ganaste con papel!!!");
}else if(respuestaCompu == 0 && respuestaUsuario == 2){
    alert("Perdiste contra piedra. Elegiste tijeras");


}else if(respuestaCompu == 1 && respuestaUsuario == 0){
    alert("Perdiste contra papel. Elegiste piedra");
}else if(respuestaCompu == 1 && respuestaUsuario == 2){
    alert("Ganaste con tijeras!!!");


}else if(respuestaCompu == 2 && respuestaUsuario == 1){
    alert("Perdiste contra tijeras. Elegiste papel");
}else if(respuestaCompu == 2 && respuestaUsuario == 0){
    alert("Ganaste con piedra!!!");
}
// Manejo de errores
else{
    alert("La compu hizo trampa");
}
