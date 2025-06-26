
class Pessoa {
    id?: number;
    nome: string;
    sobrenome: string;
    constructor(id: number|undefined, nome: string, sobrenome: string) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
function cadastraPessoa(pessoa: Pessoa){
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
    let pessoaId = new URLSearchParams(window.location.search).get('id');
    if(pessoaId) {
        let pessoa: Promise<Pessoa[]> = carregarDadosPessoa(pessoaId);
        pessoa.then(
            (pessoas)=>{
                (document.getElementById("nome") as HTMLInputElement).value = pessoas[0].nome;
                (document.getElementById("sobrenome") as HTMLInputElement).value = pessoas[0].sobrenome;
                if(pessoas[0].id)
                (document.getElementById("idPessoa") as HTMLInputElement).value = pessoas[0].id?.toString();
            }
        );
    }
    let bntCadastrar = document.getElementById("btnCadastrar");
    bntCadastrar?.addEventListener("click",(ev2)=>{
        ev2.preventDefault();
        let nome = (document.getElementById("nome") as HTMLInputElement).value;
        let sobrenome = (document.getElementById("sobrenome") as HTMLInputElement).value;
        let pessoa = new Pessoa(undefined, nome, sobrenome);
        cadastraPessoa(pessoa);
        
    });
});


function carregarDadosPessoa(pessoaId: string){
return fetch(`http://localhost:3000/pessoas?id=${pessoaId}`, { method: "GET", headers: {
    'Content-Type': 'application/json'
   }}).then((pessoas)=>
    {
       return pessoas.json() as Promise<Pessoa[]>;
    });
}

function alterarPessoa(pessoa: Pessoa){

}