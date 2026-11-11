function obtenerPost(callback){
    fetch("https://jsonplaceholder.typicode.com/posts").then(r=>{
        console.log("Termine el get")
         callback();
    })
    
}

const ejecutarAlTerminar = () => {console.log("Finalize la ejecucion")}

console.log("Inicia el programa");
obtenerPost(() => { console.log("Finaliza el programa") });
;