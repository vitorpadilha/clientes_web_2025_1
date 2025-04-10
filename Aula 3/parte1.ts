class Pessoa {
    public nome: string;
    public sobrenome: string;
    //Também existe o private e protected
    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto(): string {
        return this.nome+" "+this.sobrenome;
    }
}
//Declarando e iniciando objeto e fazendo CAST para tipo Pessoa com a palavra reservada "as"
var pessoa1: Pessoa = {
    nome: "Fulano",
    sobrenome: "Da Silva Knupp",
    dataNascimento: "15/03/2001",
    nomeCompleto(): string {
        return this.nome+" "+this.sobrenome;
    }
} as Pessoa;

//Declarando e iniciando objeto e fazendo CAST para tipo Pessoa com sinal de maior e menor
var pessoa2: Pessoa = <Pessoa>{
    nome: "Ciclano",
    sobrenome: "Da Silva Knupp",
    dataNascimento: "14/03/2001",
    nomeCompleto(): string {
        return this.nome+" "+this.sobrenome;
    }
};
//Declarando e iniciando objeto (método tradicional, Java)
var pessoa3: Pessoa = new Pessoa("Daniel", "Souza");

for(var prop in pessoa2) {
    var key = prop as keyof Pessoa;
    if(typeof pessoa2[key] =="function") {
        console.log("Nome Função:", prop);
        console.log("Valor:", pessoa2[key]);
    }
    else {
        console.log("Nome Propriedade:", prop);
        console.log("Valor:", pessoa2[key]);
    }   
}