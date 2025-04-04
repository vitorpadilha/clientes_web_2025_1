//escopo global
for (var i =0; i<5; ++i){ //global 
}
function funcaoEscopoGlobal(x: number){ //global
    function incrementa(){ //escopo funcaoEscopoGlobal
        return ++i;
    }
    return x + incrementa();
}
console.log(funcaoEscopoGlobal(10));//16
console.log(i);//6
//funcao