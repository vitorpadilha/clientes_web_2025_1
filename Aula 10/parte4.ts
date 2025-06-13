
class Pessoa {
    nome: string;
    sobrenome: string;
    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
function cadastraPessoa(pessoa: Pessoa){
    console.log(pessoa);
   fetch("http://localhost:3000/pessoas", { method: "POST", headers: {
    'Content-Type': 'application/json'
   }, body: JSON.stringify({
        nome: pessoa.nome,
        sobrenome: pessoa.sobrenome
   })}).then((pessoa)=>
    {
        console.log("Cadastrado com sucesso", pessoa);
    });
}
document.addEventListener("DOMContentLoaded",(ev)=>{
    let bntCadastrar = document.getElementById("btnCadastrar");
    bntCadastrar?.addEventListener("click",(ev2)=>{
        ev2.preventDefault();
        let nome = (document.getElementById("nome") as HTMLInputElement).value;
        let sobrenome = (document.getElementById("sobrenome") as HTMLInputElement).value;
        let pessoa = new Pessoa(nome, sobrenome);
        cadastraPessoa(pessoa);
        
    });
});