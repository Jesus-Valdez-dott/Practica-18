function Temporizador(callback) {
    console.log("Iniciando temporizador");
    
    setTimeout(() => {
        callback();
    }, 3000);
}

Temporizador(() => {
    console.log("Exito, se detuvo el temporizador")
})