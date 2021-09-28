// let nombre = prompt("Ingresa tu nombre!");/*
let miDIV = document.getElementById("principal");
//*miDIV.innerHTML = "Hola " + nombre;/*

let btn = document.getElementById("btn");
btn.addEventListener('click', sumar); //*cada vez que hago click, llamo a la funcion sumar/*

function sumar() {
    let num = Number(prompt("Ingresa tu primer numero")); /* si pongo solo "prompt los pone una al lado del otro, pero si en cambio le agrego parseInt, los va a sumar"*/
    let num2 = Number(prompt("Ingresa tu primer numero")); /* si pongo "parseInt" el numero lo va a redondear, pero si pongo" parsefloat" no, pero le voy a poner "Number"*/
    let op = prompt("Escribí la operacion a  realizar \n + para sumar\n - para restar\n * para multiplicar \n / para dividir")
    let resultado = 0;
    switch (op) {
        case "+":
            resultado = num + num2;
            miDiv.innerHTML +="<p> El resultado de la suma de "+num +" y "+num2+ " es: " + resultado + "</p>";
            break;
        case "-":
            resultado = num - num2;
            miDiv.innerHTML +="<p> El resultado de la resta de "+num +" y "+num2+ " es: " + resultado + "</p>";
            break;
        case "/":
            resultado = num / num2;
            miDiv.innerHTML +="<p> El resultado de la División de "+num +" y "+num2+ " es: " + resultado + "</p>";
 
        default:
            break;
    }
};