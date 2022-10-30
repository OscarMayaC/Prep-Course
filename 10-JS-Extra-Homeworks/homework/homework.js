// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = Object.entries(objeto);
  return array;






}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 
  var cadena = string.split(""); //se declara una string vacia para calcular varias letras//
  var objeto = {};
  cadena.forEach(function(valor) {
      if (objeto[valor] === undefined) {objeto[valor] = 1} else {objeto[valor] += 1}
  });

  return objeto;






}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let arr = [];
  for (let i in s) {
    if (s[i] === s[i].toUpperCase()) {
      arr.push(s[i]);
    }
  }
  for (let i in s) {
    if (s[i] !== s[i].toUpperCase()) {
      arr.push(s[i]);
    }
  }
  return arr.toString().replace(/,/g, '');






}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  //este codigo lo que hizo fue invertir el orden de las letras por ejemplo que "the" fuera "eht"
  var arreglito = str.split("");
  var invertirArray = arreglito.reverse("");
  var unirArray = invertirArray.join("");

 //este codigo invirtio el orden de las palabras, con el primer metodo "eht" quedaba al final de la frase
 //con este metodo mantiene su misma posicion

  var arreglitoDos = unirArray.split(" ");
  var invertirArrayDos = arreglitoDos.reverse(" ");
  var unirArrayDos = invertirArrayDos.join(" ")
  return unirArrayDos;






} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  //este codigo bien puede funcionar para strings tambien, .stoString lo convierte en string
  //.split en un array, .reverse reversea ese array y .join lo vuelve a unir.
  
  if (numero.toString().split("").reverse().join("") === numero.toString()) {
    return "Es capicua";
  }
  else return "No es capicua";




}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  //.split elimina el parametro dado de la cadena, .join une la cadena restante


  var eliminarABC = cadena.split("a").join("").split("b").join("").split("c").join("");
  return eliminarABC;

  //otra manera pero declarando mas variables y por lo tanto escribiendo mas codigo hubiera sido:

  //var eliminandoA = cadena.split("a").join("");
  //var eliminandoB = eliminandoA.split("b").join("");
  //var eliminandoC = eliminandoB.split("c").join("");
  //return eliminandoC;


}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //.sort nos sirve para ordernar por orden alfabetico en caso de que no le pasemos parametros
  //si le pasamos parametros como en este caso a y b podemos hacer que ordene por longitud de las strings.
  var ordenamiento = arr.sort(function (a, b) {
    return a.length - b.length;
  });
  return ordenamiento;



}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
  var arrayVacio = [];
  var nuevoArray = [];

  if (nuevoArray = arreglo1.filter(x => arreglo2.indexOf(x) !== -1)) {
    return nuevoArray;
  }
  else return arrayVacio;

  //otra forma en la que paso el test fue con este codigo, dedici no usuarlo porque nunca se declara
  //el array vacio que pide henry ni la sentencia if else.

  //codigo:
  // var nuevoArray = arreglo1.filter(x => arreglo2.indexOf(x) !== -1);
  // return nuevoArray;
 
  

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

