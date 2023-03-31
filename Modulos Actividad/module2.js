//export default significa que la puede llamar en otro modulo
/*
Crear minimo 2 modulos
el primer modulo debe tener
una clase que hereda a otra
un objeto que dentro de sus propiedades tenga otro objeto
el segundo modulo
importacion de la clase y el objeto
Funcion tipo flecha que realice el uso de la clase y el objeto
*/
export const  Lavadora= {
    Marca:"Samsung",
    Niveles_de_Agua:5,
    IdProducto:1234434322332,
    caracteristicas :{
        CapacidadCarga:"19kg/mes",
        ConsumoMinimoEnergia:"12KWh",
        TecnologiaLavado:"Wobble",
    }
};

export class Electrodomesticos {
        constructor({  Marca,  IdProducto=' ', Categoria}) {
            this.Marca=Marca
            this.IdProducto=IdProducto
            this.Categoria=Categoria
            
        }
        
};

export class Lavadoras extends Electrodomesticos{
    constructor({Marca , IdProducto, Categoria, ConsumoMinimoEnergia, CapacidadCargas}){
            super({ Marca, IdProducto, Categoria})
            this.ConsumoMinimoEnergia=ConsumoMinimoEnergia
            this.CapacidadCargas=CapacidadCargas
    };
    Lavar(){
        return `La lavadora se utiliza para lavar la ropa del hogar y tiene una capacidad de ${this.CapacidadCargas}`
    };
    Tipo(){
            return `La lavadora es un electrodomestico que se encarga del mantenimiento del hogar y tiene un eficiencia energetica de ${this.ConsumoMinimoEnergia}`
    }
};

