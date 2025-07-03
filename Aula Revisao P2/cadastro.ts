document.addEventListener("DOMContentLoaded", (ev)=>{
    //Carregar dados do select
    let campoSelectEstado = document.getElementById("selectEstado") as HTMLSelectElement;
    carregarDadosEstados(campoSelectEstado);
    //Adicionar evento no select de estado para carregar as cidades

    //Adicionar evento no botao para adicionar nova categoria
});

interface Estado {
    nome: string;
    abreviacao: string;
}

let carregarDadosEstados = async (campo: HTMLSelectElement) => {
   let retorno = await fetch(`http://localhost:3000/estados`, { method: "GET", headers: {
    'Content-Type': 'application/json'
   }});
   let estados: Estado[] = await retorno.json();
   
   estados.forEach((estado: Estado) => {
    let option = document.createElement("option");
    option.textContent = estado.nome;
    option.value = estado.abreviacao;
    campo.appendChild(option);
   });

}
interface Cidade {
    nome: string;
    estado: string;
}
let carregaCidades = async (campo: HTMLSelectElement, estado: Estado) => {
 let retorno = await fetch(`http://localhost:3000/cidades?estado=${estado.abreviacao}`, { method: "GET", headers: {
    'Content-Type': 'application/json'
   }});
   let cidades: Cidade[] = await retorno.json();
   
   cidades.forEach((cidade: Cidade) => {
    let option = document.createElement("option");
    option.textContent = estado.nome;
    option.value = estado.abreviacao;
    campo.appendChild(option);
   });
}