/**
 * Función que obtiene el promedio de dos números
 * @param {number} numero1 El primer número
 * @param {number} numero2 El segundo número
 * @returns El promedio de dos números
 */
function obtenerPromedio(numero1,numero2)
{
    const divisor = 2;
    let promedio = (numero1+numero2)/divisor;

    return promedio;
}


let promedio1 = obtenerPromedio(10,12);
let promedio2 = obtenerPromedio(8,10);
let promedio3 = obtenerPromedio(5,12);

console.log("El promedio es: " + promedio1);
console.log("El promedio es: " + promedio2);
console.log("El promedio es: " + promedio3);