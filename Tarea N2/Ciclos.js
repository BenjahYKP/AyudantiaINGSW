
//Ciclo del 1 al 10
console.log("Ciclo del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Ciclo del 10 al 1
console.log("Ciclo del 10 al 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Ciclo del 1 al 10 solo los pares
console.log("Ciclo del 1 al 10, solo pares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Ciclo del 1 al 10 solo los impares
console.log("Ciclo del 1 al 10, solo impares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//Ciclo del 1 al 10 solo los múltiplos de 3
console.log("Ciclo del 1 al 10, solo mult de 3:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

//Ciclo del 1 al 10 solo los múltiplos de 5
console.log("Ciclo del 1 al 10, solo mult de 5:");
for (let i = 1; i <= 10; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

//Ciclo del 1 al 10 solo los múltiplos de 3 y 5
console.log("Ciclo del 1 al 10, solo mult de 3 y 5:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

//Ciclo del 1 al 10 solo los múltiplos de 3 o 5
console.log("Ciclo del 1 al 10, solo mult de 3 o 5:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    console.log(i);
  }
}