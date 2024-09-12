/* Declaración de una función 
   Function Declaration
*/

function sumar(num1,num2)
{
    let resulta = num1 + num2;
    return resulta;
}

/**
 * 
 * @param {*} operacion Es una función que recibe 2 números
 * @param {*} num1 Número uno
 * @param {*} num2 Número dos
 * @returns 
 */
function calcular(operacion,num1,num2)
{
    return operacion(num1,num2)
}

/* Función como una Expresión
    Expression Function 
 */
const miSuma = function (num1,num2)
{
    let resulta = num1 + num2;
    return resulta;
}

const miResta = function (num1,num2)
{
    let resulta = num1 - num2;
    return resulta;
}
    
/* Arrow Function */
const flechaSuma =  (num1,num2) => num1 + num2;


// Ejecución
let respuestaSuma = sumar(2,5);
console.log("respuestaSuma = " , respuestaSuma);

let respuestaMiSuma = miSuma(2,5);
console.log("respuestaMiSuma = " , respuestaMiSuma);

let respuestaFlechaSuma = flechaSuma(2,5);
console.log("respuestaFlechaSuma = " , respuestaFlechaSuma);

let respuestaCalculo = calcular(flechaSuma,6,5);
console.log("respuestaCalculo = " , respuestaCalculo);
respuestaCalculo = calcular(miResta,6,5);
console.log("respuestaCalculo = " , respuestaCalculo);




/*
function sumar(num1,num2){
    let resultado = num1 + num2;
    return resultado;
}

function restar(num1,num2){
    let resultado = num1 - num2;
    return resultado;
}

function calular(operacion,num1,num2)
{
    let respuesta = operacion(num1,num2);
    return respuesta;
}
const miSuma = function (num1,num2){
let resultado = num1 + num2;
return resultado;
}

const arrowSuma =   (num1,num2) => num1 + num2;
const arrowResta =   (num1,num2) => num1 - num2;


let resultadoSuma = sumar(1,3);
let resultadoResta = restar(2,5);

let resultadoMISuma = miSuma(1,3);
let resultadoArrowSuma = arrowSuma(1,3);

let respuesta = calular(miSuma,2,5);
let respuestaResta = calular(arrowResta,8,5);

console.log("resultadoSuma = ",resultadoSuma);
console.log("resultadoResta = ",resultadoResta);
console.log("resultadoMISuma = ",resultadoMISuma);
console.log("resultadoArrowSuma = ",resultadoArrowSuma);

console.log("respuesta = ",respuesta);
console.log("respuestaResta = ",respuestaResta);
*/