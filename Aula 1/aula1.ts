var prompt2: any = require('prompt-sync')();
var nome: string = prompt2('Qual o seu nome?');
var sobrenome: string = prompt2('Qual o seu sobrenome?');
var altura: number = prompt2('Qual a sua altura?');
//usando operador ternário.
altura > 1.8 ? console.log(`Oi ${sobrenome}`) : console.log(`Oi ${nome}`);