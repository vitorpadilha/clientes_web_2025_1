"use strict";
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
}
//Declarando e iniciando objeto e fazendo CAST para tipo Pessoa com a palavra reservada "as"
var pessoa1 = {
    nome: "Fulano",
    sobrenome: "Da Silva Knupp",
    dataNascimento: "15/03/2001",
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
};
//Declarando e iniciando objeto e fazendo CAST para tipo Pessoa com sinal de maior e menor
var pessoa2 = {
    nome: "Ciclano",
    sobrenome: "Da Silva Knupp",
    dataNascimento: "14/03/2001",
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
};
//Declarando e iniciando objeto (método tradicional, Java)
var pessoa3 = new Pessoa("Daniel", "Souza");
for (var prop in pessoa2) {
    var key = prop;
    console.log(typeof pessoa2[key]);
    console.log("Nome Propriedade:", prop);
    console.log("Valor:", pessoa2[key]);
}
