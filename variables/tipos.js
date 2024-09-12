//Tipos de datos

/*
Este es la clase sobre tipos de datos en JS
*/ 

//String - Cadena de texto

let apellido = "Herrera";

//Number - Números

let edad1 = 15;
let precio = 15.25;

//Boolean (true or false)

let esPrioritario = true;
let esImportante = false;

//Undefined
let marca;

//Array

let listaDeMarcas = ["Ferrari","Mercedes","Red Bull","Renault"];
let listaDeEdades = [10,15,18,22,25];

//Objet

let persona = {nombre:"Pablo",apellido:"Herrera",pais:"Ecuador"};

/**
 * Función que permite obtener el promedio de dos números
 * @param {*} numero1 
 * @param {*} numero2 
 * @returns Promedio
 */
function obtenerPromemedio(numero1,numero2)
{
    const divisor = 2;
    let promedio = (numero1 + numero2) / divisor;

    return promedio;
}

let respuesta = obtenerPromemedio(2,8);

console.log(respuesta);


let edad = 18;
let cantidad = "18";

if(edad==cantidad) {
    console.log("Son iguales pero son de distinto tipo");
}

if(edad===cantidad) {
    console.log("Son iguales y son de distinto tipo");
}
else
{
    console.log("NO son iguales");
}

/**
 * Lenguaje: JavaScript
 * ¿El resultado será "Verdad" o "Falso"?¿Porqué?
 */
let miEdad = 18;
let tuEdad = "18";

if(miEdad == tuEdad)
    console.log("Verdad");
else
    console.log("Falso");

     edad = 18;
     cantidad = 18;
    
    if(edad>cantidad)
    {
        console.log("Es mayor o igual");
        
    }
    else if (edad===cantidad)
    {
        console.log("Son iguales");
    }
    else
    {
        console.log("NO Son iguales");
    }

    /*
const activo = 1;
const bloqueado = 2;
const eliminado = 3;

let estado = activo;

switch  (estado)
{
    case  activo:
        console.log("ACTIVO");
        break;
    case  bloqueado:
        console.log("BLOQUEADO");
        break;
    case  eliminado:
        console.log("ELIMINADO");
        break;
    default:
        console.log("DESCONOCIDO");
        break;
}

*/


for(let i=0;i<10;i++)
{
    console.log("i=" + i);
}

/**
 * Lenguaje JavaScript.
 * 
 * ¿Se imprimirá un mensaje o dará error porque la variable "miVariable" 
 * ya fue declarada anteriormente?
 * 
 */
var miVariable = "Soy String";
let otraVariable = "Soy otra variable";
var miVariable = "Soy una nueva variable";

console.log(miVariable);

/**
 * Lenguaje JavaScript.
 * 
 * ¿Qué mensaje se imprimirá en pantalla? 
 * Selecciona una opción
 * 
 * a) Activo
 * b) Bloqueado
 * c) Activo y Bloqueado
 * d) No identificado
 * 
 */

const activo = 1,bloqueado = 2;

let estado = activo;

switch (estado) {
    case activo:
        console.log("Activo");
    case bloqueado:
        console.log("Bloqueado");
        break;
    default:
        console.log("No identificado");
        break;
}

/**
 * Lenguaje JavaScript
 * 
 * ¿Qué resultado se obtendrá al ejecutar este código?
 * 
 * a)   Temperatura = undefined
 *      Altura = undefined
 * 
 * b)   Temperatura = undefined
 *      Altura = 25
 * 
 * c)   No se ejecutará el código y mostrará un error de sintaxis
 * 
 */
const temperatura;
let altura;

console.log("Temperatura = " + temperatura);
console.log("Altura = " + altura);
altura = 165;





