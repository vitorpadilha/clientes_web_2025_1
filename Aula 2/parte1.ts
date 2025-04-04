console.log(
    (function (x: number, y: number): number{
        return x+y;
    })(10,20)
);

//Callback functions
//É a passagem de uma função como parâmetro de outra função.
function fazAlgo(funcao: any): void {
    console.log("Antes");
    funcao();
    console.log("Depois");
}
fazAlgo(function() {console.log("Oi")});
function fazAlgo2(funcao: any): void {
    console.log("Antes");
    console.log(funcao(10,20));
    console.log("Depois");
}
fazAlgo2(function(x: number, y: number) {return x+y});