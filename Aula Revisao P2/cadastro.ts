let contador = 1;
document.addEventListener("DOMContentLoaded", (ev)=>{
    //Carregar dados do select
    let campoSelectEstado = document.getElementById("selectEstado") as HTMLSelectElement;
    carregarDadosEstados(campoSelectEstado);
    let campoNome = document.getElementById("campoNome") as HTMLInputElement;
    let campoIdade = document.getElementById("campoIdade") as HTMLInputElement;
    let divCategorias = document.getElementById("categorias") as HTMLDivElement;
    
    let campoSelectCidade = document.getElementById("selectCidade") as HTMLSelectElement;
    let btnAddCategoria = document.getElementById("btnAddCategoria");
    let btnCadastrarEmpregado = document.getElementById("btnCadastrarEmpregado") as HTMLButtonElement;
    //Adicionar evento no select de estado para carregar as cidades
    campoSelectEstado?.addEventListener("change", (ev2) =>{
        let estadoSelecionado = campoSelectEstado.value;
        limparSelect(campoSelectCidade);
        carregaCidades(campoSelectCidade, estadoSelecionado);
    })
    //Adicionar evento no botao para adicionar nova categoria
    
    btnAddCategoria?.addEventListener("click", (ev2)=>{
        let divWrapper = document.createElement("div");
        divCategorias.appendChild(divWrapper);

        let selectCategoria = document.createElement("select");
        selectCategoria.className = "campoCategorias";
        selectCategoria.setAttribute("id", "categoria"+contador);
        contador++;
        carregarDadosCategorias(selectCategoria);
        divWrapper.appendChild(selectCategoria);

        let btnApagar = document.createElement("button");
        btnApagar.textContent = "Apagar";
        btnApagar.type = "button";
        btnApagar.addEventListener("click", (ev2) => {
            divCategorias.removeChild(divWrapper);
        });
        divWrapper.appendChild(btnApagar);
        let novaLinha = document.createElement("br");
        divWrapper.appendChild(novaLinha);
        divWrapper.appendChild(novaLinha);
    });
    // Adicionar evento para cadastrar quando clicar no butão cadastrar.
    
    btnCadastrarEmpregado.addEventListener("click", (ev2)=>{
        let camposCategorias = document.getElementsByClassName("campoCategorias") as HTMLCollectionOf<HTMLSelectElement>;
        let categorias: string[] = [];
        Array.from(camposCategorias).forEach((select: HTMLSelectElement)=>{
            categorias.push(select.value);
        });
        console.log(categorias);
        let empregadoACadastrar: Empregado = {
            "nome": campoNome.value,
            "idade": parseInt(campoIdade.value),
            "cidade": campoSelectCidade.value,
            "estado": campoSelectEstado.value,
            "categorias": categorias
        }
        cadastrarEmpregado(empregadoACadastrar);
        ev2.preventDefault();
    });
});

let cadastrarEmpregado = async (empregado: Empregado) => {
 await fetch("http://localhost:3000/empregados", { method: "POST", headers:     {
    'Content-Type': 'application/json'
   }, body: JSON.stringify(empregado)}).then((pessoa)=>
    {
        console.log("Empregado Cadastrado com sucesso", pessoa);
    });
}




interface Estado {
    nome: string;
    abreviacao: string;
}

interface Categoria {
    id: number;
    nome: string;
}

interface Empregado {
    nome: string;
    idade: number;
    estado: string;
    cidade: string;
    categorias: string[];
}
let limparSelect = (campo: HTMLSelectElement) => {
    while(campo.firstChild) {
        campo.removeChild(campo.firstChild)
    }
}

let carregarDadosCategorias = async (campo: HTMLSelectElement) => {
   let retorno = await fetch(`http://localhost:3000/categorias`, { method: "GET", headers: {
    'Content-Type': 'application/json'
   }});
   let categorias: Categoria[] = await retorno.json();
   
   categorias.forEach((categoria: Categoria) => {
    let option = document.createElement("option");
    option.textContent = categoria.nome;
    option.value = categoria.id.toString();
    campo.appendChild(option);
   });

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
let carregaCidades = async (campo: HTMLSelectElement, estado: string) => {
 let retorno = await fetch(`http://localhost:3000/cidades?estado=${estado}`, { method: "GET", headers: {
    'Content-Type': 'application/json'
   }});
   let cidades: Cidade[] = await retorno.json();
   
   cidades.forEach((cidade: Cidade) => {
    let option = document.createElement("option");
    option.textContent = cidade.nome;
    option.value = cidade.nome;
    campo.appendChild(option);
   });
}