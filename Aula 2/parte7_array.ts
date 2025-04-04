var a7: number[] = [];
var b7 = [1, 2, 3]; //JS
var b7_ts: number[] = [1, 2, 3]; //TS
var c7: string[] = ["java", "script"]; //
//b7.push("A"); EM JS seria aceito, em TS não!
b7.push(7); //Coloca elemento 7 no final do array
console.log(a7); // []
console.log(b7);// [1,2,3]