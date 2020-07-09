/*Realizar una función que imprima los números impares existentes hasta el
número indicado como parámetro de entrada.
*/
function impar(n) {
    for (var i = 0; i <= (n); i++) {
        if (i % 2 != 0)
            console.log(i);
    }
}
impar(20);
/*Realizar una función que como parámetro de entrada reciba un array y como
salida devuelva el array revertido.

*/
function arrReverse(arr) {
    var arr1revertida = " ";
    //Itero la cadena de manera inversa
    for (var i = arr.length - 1; i >= 0; i--) {
        //Voy concatenando el valor a la cadena resultado
        arr1revertida += arr[i];
    }
    return arr1revertida;
}
console.log(arrReverse([1, 2, 3, 4, 5, 6]));
/*Realizar una función que te devuelva si existe un numero par en el array de
números que introduces como parámetro de entrada.
*/
function parNum(numero) {
    for (var i = 0; i <= numero.length; i++) {
        if ((numero[i] % 2 == 0) == true) {
            return 'Hay numeros pares';
        }
        else {
            return "No hay numeros pares";
        }
    }
}
console.log(parNum([2, 5, 1, 9]));
/*Utilizando las dos funciones anteriores indicar si es par o impar la suma de los
caracteres de cada uno de los siguientes arrays:
o [“Casa”, “Coche”, “Ciudad”, “Cesta”]
o [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
o [“Venezuela”, “Veneno”, “Voltaje”]
*/
function sum(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i].length;
    }
    return result;
}
function parImpar(x) {
    if (x % 2 == 0) {
        console.log("El numero es par");
    }
    else if (x % 2 != 0) {
        console.log("El numero es impar");
    }
}
parImpar(3);
console.log(sum(["Casa", "Coche", "Ciudad", "Cesta"]));
console.log(sum(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]));
console.log(sum(["Venezuela", "Veneno", "voltaje"]));
parImpar(20);
parImpar(37);
parImpar(22);
