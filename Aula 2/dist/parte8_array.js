"use strict";
var a7 = new Array();
var b7 = new Array(1, 2, 3); //JS
var b7_ts = new Array(1, 2, 3); //TS
var c7 = new Array("java", "script"); //
//b7.push("A"); EM JS seria aceito, em TS não!
b7.push(7); //Coloca elemento 7 no final do array
console.log(a7); // []
console.log(b7); // [1,2,3]
