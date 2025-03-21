//Callback functions
//É a passagem de uma função como parâmetro de outra função.
function fazAlgo(funcao: any): void {
    console.log("Antes");
    funcao();
    console.log("Depois");
}

var digaoi = function() {console.log("Oi")};
fazAlgo(digaoi);