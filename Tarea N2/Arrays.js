const numeros = [1, 2, 3, 4, 5];


//Funcion que recibe un array de numeros y devuelve la suma de los elementos

function sumaArray(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}
console.log("Funcion sumaArray:", sumaArray(numeros));

//Funcion que recibe un array de numeros y devuelve el promedio de los elementos
function promedioArray(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma / array.length;
}
console.log("Funcion promedioArray:", promedioArray(numeros));

//Funcion que recibe un arreglo de strings y devuelve un string con los mismos strings en mayusculas
const strings = ["hola", "como", "estas"];
function mayusculasArray(array){
    let resultado = [];
    for(let i = 0; i < array.length; i++){
        resultado.push(array[i].toUpperCase());
    }
    return resultado;
}
console.log("Funcion mayusculasArray:", mayusculasArray(strings));

//Funcion que recibe un arreglo de numeros y devuelve un arreglo con solo los numeros pares
function numerosPares(array){
    let resultado = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            resultado.push(array[i]);
        }
    }
    return resultado;
}
console.log("Funcion numerosPares:", numerosPares(numeros));
