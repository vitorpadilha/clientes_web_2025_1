var idade: number | null;
idade = null;
//usando nulling coalish (??). idade2 vai receber idade se idade não for nula, senão receberá 3.
var idade2: number = idade??3;
//var idade2: number = idade==null?idade:3;
//var idade2: number = idade?idade:3;
console.log(idade2);