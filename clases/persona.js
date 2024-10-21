class Persona {
    
    constructor(nombre,paisNacimiento)
    {
        this.nombre = nombre;
        this.paisNacimiento = paisNacimiento;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y soy del país ${this.paisNacimiento}.`);
    }

}   

class Empleado extends Persona {
    constructor(nombre,paisNacimiento,empresa,profesion,aniosTrabajo)
    {
        super(nombre,paisNacimiento);
        this.empresa = empresa;
        this.profesion = profesion;
        this.aniosTrabajo = aniosTrabajo;
    }

    mostrarTrabajo()
    {
        console.log(`Trabajo en ${this.empresa} soy ${this.profesion} y tengo experiencia de ${this.aniosTrabajo} años.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre,paisNacimiento,universidad,semestre)
    {
        super(nombre,paisNacimiento);
        this.universidad = universidad;
        this.semestre = semestre;
    }

    mostrarEstudiante()
    {
        console.log(`Estudio en ${this.universidad} estoy en ${this.semestre} semestre.`);
    }
}


let objPersona = new Persona("Pablo","Ecuador");
objPersona.saludar();

objPersona = new Persona("Leonel","Argentina");
objPersona.saludar();


let objEmpleado = new Empleado("Leonel","Ecuador","Banco Xyz","Ing. de Pruebas",8);
objEmpleado.saludar();
objEmpleado.mostrarTrabajo();

let objEstudiante = new Estudiante("Juan","Brazil","ABCD","Quinto");
objEstudiante.saludar();
objEstudiante.mostrarEstudiante();

