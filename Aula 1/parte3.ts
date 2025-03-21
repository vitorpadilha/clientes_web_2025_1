//Funções
function digaOi() {
    console.log("Oi")
}
var digaOi2 = function(){
    console.log("Oi")
}
digaOi();
digaOi2();
//funcões com parâmetros
function digaOiComNome(nome: string): void {
    console.log(`Oi ${nome}`);
}
function soma(a:number, b: number): number {
    return a+b;
}
console.log(soma(3,4));
//função anônima e chamada direta
(function() {
    console.log("Oi");
})();