/*Realizar un procedimiento que reciba un array de nombres y te devuelva
verdadero si y solo si todos los nombres empiezan por M.
*/
function initial(names) {
    var result = true;
    var i = 0;
    while (i <= names.length) {
        if ((names[i][0].includes("M")) == true) {
        }
        if ((names[i][0].includes("M")) == false)
            return false;
    }
    return result;
    i++;
}
console.log(initial(["javier", "Marta", "Mario"]));
