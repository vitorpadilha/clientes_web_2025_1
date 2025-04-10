"use strict";
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
//Declarando e iniciando objeto e fazendo CAST para tipo Pessoa com a palavra reservada "as"
var pessoa1 = {
    nome: "Fulano",
    sobrenome: "Da Silva Knupp",
    dataNascimento: "15/03/2001"
};
//Declarando e iniciando objeto e fazendo CAST para tipo Pessoa com sinal de maior e menor
var pessoa2 = {
    nome: "Ciclano",
    sobrenome: "Da Silva Knupp",
    dataNascimento: "14/03/2001"
};
//Declarando e iniciando objeto (método tradicional, Java)
var pessoa3 = new Pessoa("Daniel", "Souza");
