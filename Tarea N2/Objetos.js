//Crear un objeto de una persona
const persona = {
    nombre: "Benjamin",
    edad: 21,
    genero: "Masculino"
};

console.log("Datos de persona:", persona);

//Crear un objeto caja
const caja = {
    cuadernos: 3,
    lapices: 5,
    papel : 10,
    fotografias: 2,
    estado: "nueva"
};

console.log("Datos de Cajas", caja);
console.log("Cuadernos",caja.cuadernos, "Tipo de datos de cuadernos:", typeof caja.cuadernos);
console.log("Lapices",caja.lapices, "Tipo de datos de lapices:", typeof caja.lapices);
console.log("Papel",caja.papel, "Tipo de datos de papel:", typeof caja.papel);
console.log("Fotografias",caja.fotografias), "Tipo de datos de fotografias:", typeof caja.fotografias;
console.log("Estados",caja.estado, "Tipo de datos de estado:", typeof caja.estado);
