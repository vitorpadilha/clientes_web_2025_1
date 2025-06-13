"use strict";
const pessoa = { nome: "Fulano", sobrenome: "da Silva", dataNascimento: "06/06/2000" };
const pessoa2 = Object.assign(Object.assign({}, pessoa), { idade: 6 });
console.log(pessoa);
console.log(pessoa2);
function lerArquivoMuitoGrande() {
    setTimeout(() => { console.log("Oi"); }, 3000);
}
