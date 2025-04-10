class Pessoa {
    nome: string;
    sobrenome: string;
    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
//Declarando e iniciando objeto e fazendo CAST para tipo Pessoa com a palavra reservada "as"
var pessoa1: Pessoa = {
    nome: "Fulano",
    sobrenome: "Da Silva Knupp",
    dataNascimento: "15/03/2001"
} as Pessoa;

//Declarando e iniciando objeto e fazendo CAST para tipo Pessoa com sinal de maior e menor
var pessoa2: Pessoa = <Pessoa>{
    nome: "Ciclano",
    sobrenome: "Da Silva Knupp",
    dataNascimento: "14/03/2001"
};
//Declarando e iniciando objeto (método tradicional, Java)
var pessoa3: Pessoa = new Pessoa("Daniel", "Souza");