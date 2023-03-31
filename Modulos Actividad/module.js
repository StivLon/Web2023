import { Lavadora, Lavadoras } from "./module2.js";

let LGLavadora = new Lavadoras( {Marca:'LG',IdProducto:'1212335423',Categoria:'Mantenimiento del hogar',ConsumoMinimoEnergia:'12 Kwh/mes', CapacidadCargas:'20Kg'})
console.log(LGLavadora.Lavar())

const ObtenerInformacion  =(Objeto, clase ) =>{
    console.log(Objeto)
    console.log(clase)
}

ObtenerInformacion({Objeto:Lavadora, clase:LGLavadora})