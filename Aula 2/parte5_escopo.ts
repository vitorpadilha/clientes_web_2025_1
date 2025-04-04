//escopo de funcao
var i =0;
function funcaoEscopoFuncao(x: number){ //global
    var i =10; //escopo funcaoEscopoFuncao
    function incrementa(){ //escopo funcaoEscopoFuncao
        return ++i;
    }
    return x + incrementa();
}
console.log(funcaoEscopoFuncao(10));//21
console.log(i);//0