
 /*
1.Tarea, Crear un objeto que tenga minimo dos metodos, 
ademas debe tener una propiedad que sea un objeto
2.crear una clase que herede a otra debe poseer minimo 3 propiedades el constructor
3Crear una funcion tipo flecha que haga uso de la clase construida y el objeto declarado
 */
//Punto1
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
//punto2
    class Computador {
        constructor({ tipo, Marca,  IdProducto='Sin placa', TiempoDeEncendido}) {
            this.tipo = tipo
            this.Marca = Marca
            this.IdProducto = IdProducto
            this.TiempoDeEncendido=TiempoDeEncendido
            
        }
        
        Encendido(){
            return `Velocidad de ensendido: ${this.TiempoDeEncendido}S`
        }
        
        CaracteristicasSistema(){
            return `Las caracteristicas del sistema es: ${this.tipo},${this.Marca} ,${this.IdProducto}`
        } 
    }

    class Laptop extends Computador{
        constructor(tipo, Marca , IdProducto, CPU){
            super(tipo, Marca, IdProducto)
            this.CPU=CPU
        }
    }
    
    const CompAsus = new Computador({ tipo:'Laptop', Marca:'Asus',IdProducto:'1222345423', TiempoDeEncendido:12 })
    console.log(CompAsus);
    console.log(CompAsus.Encendido())
 

 //punto 3   
    const ObtenerInformacion = ({ Objeto, claseComputador }) => {
        console.log(Objeto)
        console.log(claseComputador)
    }
    
    ObtenerInformacion({ Objeto:PC, claseComputador:CompAsus })