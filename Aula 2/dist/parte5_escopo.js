"use strict";
//escopo de funcao
var i = 0;
function funcaoEscopoFuncao(x) {
    var i = 10; //escopo funcaoEscopoFuncao
    function incrementa() {
        return ++i;
    }
    return x + incrementa();
}
console.log(funcaoEscopoFuncao(10)); //21
console.log(i); //0
