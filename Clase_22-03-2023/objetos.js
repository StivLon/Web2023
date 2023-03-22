//objetos

const persona = {
    primerNombre:"Juan",
    apellido:"Perez",
    edad: 22,
    documentoID:12335343,
    caracteristicas :{
        colorCabello:"Rojo",
        etinicidad:"Indoeuropeo",
        idiomaMaterno:"Español"

    },

    saludar:function(){
        return `Hola ${this.primerNombre} ${this.apellido}`
    }
        
    };

console.log(persona.saludar());
console.log(persona)
console.log(persona.apellido);

console.log(persona["primerNombre"]);

//clases

class Persona {
    constructor(primerNombreUsuario, apellidoUsuario){
        this.primerNombreUsuario=primerNombreUsuario;
        this.apellidoUsuario=apellidoUsuario;
    }
    //metodo
    saludarPersona(){
        return `Hola ${this.primerNombreUsuario} ${this.apellidoUsuario}`
    }    

};
//uso de clase para construir a persona(objeto)
let personita= new Persona("Juan","Osorio");
personita.primerNombreUsuario="Carlos"
personita.apellidoUsuario="Perez"
console.log(personita);
console.log(personita.saludarPersona());

//herencia
class Animales{
    constructor(nombre, edad, sonido){
        this.nombre=nombre
        this.edad=edad
        this.sonido=sonido
    }
    //metodo
    sonido(){
        return `${this.nombre} tiene el sonido: ${this.sonido}`
    }

}
//HERENCIA PALABRA EXTENDS
class Gatos extends Animales{
    //Constructor Clase Gatos
    constructor(nombre, edad, sonido,cazador){
        super(nombre, edad, sonido)
        this.cazador=cazador
    }

    //metodo
    maullar(){
        return `Yo puedo hacer el sonido ${this.sonido}`
    }
 }
//Crear un animal, gato
let gato = new Gatos ("Michi",52,"MEOW",true);
 console.log(gato)
 console.log(gato.maullar());

 //Tarea, Crear un objeto que tenga minimo dos metodos, 
 /*ademas debe tener una propiedad que sea un objeto

crear una clase que herede a otra
debe poseer minimo 3 propiedades el constructor


Crear una funcion tipo flecha que haga uso de la clase construida y el objeto declarado
 */
const  PC= {
    Marca:"Asus",
    TiempoDeEncendido:12,
    IdProducto:1234434322332,
    caracteristicas :{
        Ram:"16GB",
        HDD:"1TB",
        CPU:"Ryzen 5 5600x",
        GPU:"RTX 3050",
    },

    Encendido:function(){
        return `Velocidad de ensendido: ${this.TiempoDeEncendido}S`
    },
    
    CaracteristicasSistema:function(){
        return `Las caracteristicas del sistema es: ${this.caracteristicas.CPU},${this.caracteristicas.Ram} ,${this.caracteristicas.HDD} ,${this.caracteristicas.GPU}`
    }    
    };
    
    console.log(PC.Encendido());