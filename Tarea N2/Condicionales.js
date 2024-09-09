const numero1 = 10;
const numero2 = 20;
const numero3 = 30;


//Numero Mayor
const mayor = Math.max(numero1, numero2, numero3);
console.log("El número mayor es: ", mayor);

//Numero Menor
const menor = Math.min(numero1, numero2, numero3);
console.log("El número menor es: ", menor);

//Numeros Pares e Impares
if (numero1 % 2 == 0) {
  console.log("El número 1 es par");
}	else {
  console.log("El número 1 es impar");
}

if (numero2 % 2 == 0) {
  console.log("El número 2 es par");
}	else {
  console.log("El número 2 es impar");
}

if (numero3 % 2 == 0) {
  console.log("El número 3 es par");
}	else {
  console.log("El número 3 es impar");
}

//Numeros multiplos de 5
if (numero1 % 5 == 0) {
  console.log("El número 1 es multiplo de 5");
} else {
  console.log("El número 1 no es multiplo de 5");
}

if (numero2 % 5 == 0) {
  console.log("El número 2 es multiplo de 5");
} else {
  console.log("El número 2 no es multiplo de 5");
}

if (numero3 % 5 == 0) {
  console.log("El número 3 es multiplo de 5");
} else {
  console.log("El número 3 no es multiplo de 5");
}