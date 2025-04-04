"use strict";
//escopo global
for (var i = 0; i < 5; ++i) { //global 
}
function funcaoEscopoGlobal(x) {
    function incrementa() {
        return ++i;
    }
    return x + incrementa();
}
console.log(funcaoEscopoGlobal(10)); //16
console.log(i); //6
//funcao
