// alert('Estamos en el archivo externo')
const nombres = ["Luis", "Tomas", "Federico", "Carlos"]
// nombres.push("Carlos")
// console.log(nombres)
// nombres.push("")
// console.log(nombres)
// const manejodeNombres = (a) => {
//  nombres.push(a)
// console.log(nombres)
// };

/** objetos*/
const agregarNombre = () => {
    let nombre = {
        nombre: "Federico",
        apellido: "Vincent Pascual",
    };
    nombres.push(nombre)
    console.log(nombre)
}
const nomb = () => {
    let nombre = {
        nombre: "Pedro",
        apellido: "Vincent Pascual",
    }
    console.log(nombre);
}
nomb()
agregarNombre()