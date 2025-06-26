"use strict";
class Pessoa {
    constructor(id, nome, sobrenome) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
function cadastraPessoa(pessoa) {
    fetch("http://localhost:3000/pessoas", { method: "POST", headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            nome: pessoa.nome,
            sobrenome: pessoa.sobrenome
        }) }).then((pessoa) => {
        console.log("Cadastrado com sucesso", pessoa);
    });
}
document.addEventListener("DOMContentLoaded", (ev) => {
    let bntCadastrar = document.getElementById("btnCadastrar");
    bntCadastrar === null || bntCadastrar === void 0 ? void 0 : bntCadastrar.addEventListener("click", (ev2) => {
        ev2.preventDefault();
        let nome = document.getElementById("nome").value;
        let sobrenome = document.getElementById("sobrenome").value;
        let pessoa = new Pessoa(undefined, nome, sobrenome);
        cadastraPessoa(pessoa);
    });
});
function alterarPessoa(pessoa) {
}
