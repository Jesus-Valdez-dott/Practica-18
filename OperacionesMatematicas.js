function operacionesMatematicas (valor1, valor2, callback) {
    const resultado = callback(valor1, valor2);
    console.log(`El resultado de la operación es: ${resultado}`);
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

operacionesMatematicas(20, 5, suma);
operacionesMatematicas(38, 5, resta);
operacionesMatematicas(99, 5, multiplicacion);
operacionesMatematicas(10, 5, division);