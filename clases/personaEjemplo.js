class Persona {
    // El constructor define las propiedades del objeto
    constructor(nombre, paisNacimiento) {
      this.nombre = nombre;
      this.paisNacimiento = paisNacimiento;
    }
  
    // Método que pertenece a la clase Persona
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y soy de ${this.paisNacimiento}.`);
    }
  }

  class Empleado extends Persona {
    constructor(nombre, paisNacimiento, trabajo) {
      super(nombre, paisNacimiento); // Llama al constructor de la clase Persona
      this.trabajo = trabajo;
    }
  
    mostrarTrabajo() {
      console.log(`Trabajo como ${this.trabajo}.`);
    }
  }
  
  // Creando una instancia de Empleado
  const empleado1 = new Empleado('Carlos', "Ecuador", 'Ingeniero de Pruebas de Software');
  empleado1.saludar(); 
  empleado1.mostrarTrabajo(); 
  