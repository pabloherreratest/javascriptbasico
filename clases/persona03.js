/* Propiedades privadas */

class Persona {
    
    nombre = "Sin nombre"
    paisNacimiento = "Sin país"
    
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y soy del país ${this.paisNacimiento}.`);
    }

}

let objPersona = new Persona();
objPersona.nombre = "Pablo"
objPersona.paisNacimiento = "Ecuador"
objPersona.saludar();

objPersona = new Persona();
objPersona.nombre = "Leonel"
objPersona.paisNacimiento = "Argentina"
objPersona.saludar();