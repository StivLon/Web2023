import {sumar} from './modulo2.js'

const saludar =(nombre, apellido) =>{
    let suma= sumar(5,3);
    return`Hola ${nombre} ${apellido} tienes ${suma} vidas `
}

console.log(saludar("juna","perez"));