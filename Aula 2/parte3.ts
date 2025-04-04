var soma = function (x: number, y: number): number {
    console.log(arguments.length+ "argumentos");
    console.log(arguments[0]);//X
    console.log(arguments[1]);//Y
    return x+y;
}
console.log(soma(10,20));