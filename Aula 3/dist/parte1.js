"use strict";
class Pessoa {
    //Também existe o private e protected
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
    if (typeof pessoa2[key] == "function") {
        console.log("Nome Função:", prop);
        console.log("Valor:", pessoa2[key]);
    }
    else {
        console.log("Nome Propriedade:", prop);
        console.log("Valor:", pessoa2[key]);
    }
}
