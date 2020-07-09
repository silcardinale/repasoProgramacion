function signos(dia, mes) {
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4))
        console.log("Aries");
    if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10))
        console.log("Libra");
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5))
        console.log("Tauro");
    if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
        console.log("Escorpio");
    if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6))
        console.log("Geminis");
    if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
        console.log("Sagitario");
    if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7))
        console.log("Cancer");
    if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
        console.log("Capricornio");
    if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8))
        console.log("Leo");
    if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2))
        console.log("Acuario");
    if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9))
        console.log("Virgo");
    if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3))
        console.log("Piscis");
}
signos(18, 12);
signos(20, 10);
signos(1, 4);
signos(1, 8);
var pais = "Iran";
var continente = " ";
if ((pais == "Argentina") || (pais == "Uruguay") || (pais == "Peru") || (pais == "Brasil") || (pais == "Chile")) {
    continente = "Ud esta en America";
}
else if ((pais == "Francia") || (pais == "Portugal") || (pais == "Alemania") || (pais == "Belgica") || (pais == "Holanda")) {
    continente = "Ud esta en Europa";
}
else if ((pais == "Australia") || (pais == "Fiji") || (pais == "Samoa") || (pais == "Nueva Zelanda") || (pais == "Tonga")) {
    continente = "Ud esta en Oceania";
}
else if ((pais == "Egipto") || (pais == "Zambia") || (pais == "Zimbaue") || (pais == "Ghana") || (pais == "Lesoto")) {
    continente = "Ud esta en Africa";
}
else if ((pais == "China") || (pais == "Chipre") || (pais == "Iran") || (pais == "Emiratos Arabes Unidos") || (pais == "India")) {
    continente = "Ud esta en Asia";
}
else {
    console.log("Ingrese Pais");
}
console.log(continente);
/*Realizar una función que reciba como parámetro un array de strings que
contenga colores y te imprima en cada caso si el color está en el arcoíris o no.
*/
function rainbow(colors) {
    for (var i = 0; i < colors.length; i++) {
        if (colors[i] == "violet")
            console.log("The color " + colors[i] + " is in the rainbow");
        if (colors[i] == "green")
            console.log("The color " + colors[i] + " is in the rainbow");
        if (colors[i] == "yellow")
            console.log("The color " + colors[i] + " is in the rainbow");
        if (colors[i] == "red")
            console.log("The color " + colors[i] + " is in the rainbow");
    }
}
rainbow(["yellow", "black", "violet", "brown", "red"]);
