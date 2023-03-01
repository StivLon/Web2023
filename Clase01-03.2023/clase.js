console.log("Hola :3");
console.log(Math.random());

let edad;
let mensaje="Hola usuarios";
var mensaje2="bienvenidos";
console.log(mensaje+" "+mensaje2);
 /*

asdasd
asd
asdasda
 */

const moneda= "COP";

function sumar(numero1, numero2){
    return numero1+numero2
}

//funcion de flecha
const sum=(numero1, numero2) => {
    return numero1+numero2
}

let resultado=sum(2,3);
console.log(resultado);

//funcion de flecha
const Hi=()=> {
    let Saludo="Hola queridos usuarios"
    return Saludo
}

//funcion de flecha
const potencia= (numero1) => {
    return numero1**2
}

//funcion de flecha
const mult=(numero1, numero2) => {
    return numero1*numero2
}


//arreglo
let numeros=[1,2,3,4,5,6,7,8,9];
//ingresar un dato adicional al final del arreglo
numeros.push(10)

//saca el ultimo elemento
numeros.pop();

const elim= numeros => {
    numeros.pop()
    return numeros
}


 console.log(numeros)
 console.log(elim(numeros))

const crear= (numeros,Ndato) => {
numeros.push(Ndato)
return numero
}
