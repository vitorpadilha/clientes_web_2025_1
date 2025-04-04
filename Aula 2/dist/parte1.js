"use strict";
console.log((function (x, y) {
    return x + y;
})(10, 20));
//Callback functions
//É a passagem de uma função como parâmetro de outra função.
function fazAlgo(funcao) {
    console.log("Antes");
    funcao();
    console.log("Depois");
}
fazAlgo(function () { console.log("Oi"); });
function fazAlgo2(funcao) {
    console.log("Antes");
    console.log(funcao(10, 20));
    console.log("Depois");
}
fazAlgo2(function (x, y) { return x + y; });
