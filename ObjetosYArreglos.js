let numeros = [1, 2, 3, 4, 5];

let dobles = numeros.map(num => `<p>Numero: ${num}</p>`);

console.log(numeros);

console.log(dobles);

const html = dobles.join("");

console.log(html);

const edad = 18;
function puerta(edad = 0){
    if(edad >=18 && edad <= 45){
    console.log("Puedes pasar al antro morro");
    return;
    }

    if(edad>=18 && edad > 45){
        console.log("Vayase a dormir alv ruco");
        return;
    }

    console.log("zumbale pero en fa morro")
}

const dia=3;

switch(dia){
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Memiercoles")
        break;
    default:
        console.log("Es otro dia");
}

const alumno = {
    nombre: "Jesus",
    edad: 21,
    hobbies: ["videojuegos", "programar", "musica"],
    direccion: {
        calle: "Mi casa",
        num: 1234, 
        lat: "",
        lng: ""
    },
    saludar: function() {
        return `Hola soy ${this.nombre} y tengo ${this.edad} años`
    }
}

console.log(alumno);
alumno.nombre = "Jesus Alfonso";
console.log(alumno);


// for in -- recorre las llaves de un objeto
for(const llave in alumno){
    console.log(`${llave} = ${alumno[llave]}`)
}

// for of -- recorre los valores de un arreglo o algo iterable
for(const hobbie of alumno.hobbies){
    console.log(hobbie)
}

// for tradicional
for(let i=0; i<alumno.hobbies.length; i++){
    
}

console.log(alumno.saludar());