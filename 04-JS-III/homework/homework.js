// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var Primera = array; 
  Primera [1, 2, 3];
  return Primera[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var Ultimo = array;
  Ultimo [1, 2, 3];
  return Ultimo.pop();

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var Largo = array;
  return Largo.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];
  for(var i = 0; i < array.length; i++) {
    nuevoArray[i] = array[i] + 1;
  }

  return nuevoArray;



  

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var Agregar = array;
  Agregar [1, 2];
  Agregar.push(elemento);
  return Agregar;


}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  var AlComienzo = array;
  AlComienzo [1, 2];
  AlComienzo.unshift(elemento);
  return AlComienzo;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var Frases = palabras;
  Frases ["Hello", "world"];
  return Frases.join(" ");
  



  



}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var Contener = array;
  Contener [1, 2];
  if (Contener.indexOf(elemento) === -1) {return false;} 
  else if (Contener.indexOf(elemento) > -1) {return true;}


  


}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var Num = numeros;
  Num [1, 2, 3, 4, 5];
  let Total = Num.reduce((a, b) => a + b, 0);
  return Total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var Resultados = resultadosTest;
  Resultados [1, 2, 3];
  {var i = 0, summ = 0, Arraylen = Resultados.length;
  while (i < Arraylen) {summ = summ + Resultados[i++];
  } 
return summ / Arraylen;}
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var Grande = numeros;
  Grande [1, 2, 3];
  var M = Math.max(...Grande);
  return M;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1) return 0;
  var total = 1;
  for (var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }  
  return total;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0;
  for (let i = 0; i < arreglo.length ; i++) {
    if (arreglo[i] > 19) {
      contador++
    }
  }
  return contador;

  
 
  

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var Dias = numeroDeDia;
  Dias [1, 2, 3, 4, 5, 6, 7];
  if (Dias == 1 || Dias == 7) {return "Es fin de semana";}
  else (Dias == 2 || Dias == 3 || Dias == 4 || Dias == 5 || Dias == 6); {return "Es dia Laboral";}
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var Numero = n;
  if (Numero.toString().startsWith("9")) return true;
  else return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i = 0; i < arreglo.length - 1; i++) {
    if (arreglo[i] !== arreglo[i+1]) {
      return false
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var NuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      NuevoArray.push(array[i]);
    }
  }
  if (NuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
    return NuevoArray;
  }


 


}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  
  var Arreglo = array;
  Arreglo [1, 2, 3];
  let mayorQueCien = Arreglo.filter(element => element > 100);
  return mayorQueCien;


  
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma = suma + 2;
    if (suma === i) break;
    else {
      array.push(suma);
    }
  }
  if (i < 10) {
    return "Se interrumpió la ejecución";
  }
  else {
    return array;
  }

 
  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var NewArray = [];
  var suma = numero;
  for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    else {
      suma = suma +2;
      NewArray.push(suma);
    }
  }
 return NewArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
