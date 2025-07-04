/*
const params = new URLSearchParams(window.location.search);

// Acessando parâmetros individualmente
const nome = params.get("nome");   // "Joao"
const idade = params.get("idade"); // "25"
*/
let contador = 1;
document.addEventListener("DOMContentLoaded", async (ev)=>{

    const params = new URLSearchParams(window.location.search);

// Acessando parâmetros individualmente

    const id = params.get("id");   

  
    //Carregar dados do select
    let campoSelectEstado = document.getElementById("selectEstado") as HTMLSelectElement;
    await carregarDadosEstados(campoSelectEstado);
    let campoNome = document.getElementById("campoNome") as HTMLInputElement;
    let campoIdade = document.getElementById("campoIdade") as HTMLInputElement;
    let divCategorias = document.getElementById("categorias") as HTMLDivElement;
    
    let campoSelectCidade = document.getElementById("selectCidade") as HTMLSelectElement;
    let btnAddCategoria = document.getElementById("btnAddCategoria");
    let btnCadastrarEmpregado = document.getElementById("btnCadastrarEmpregado") as HTMLButtonElement;

      if(id) {
        let empregado: Empregado = await buscaEmpregadoPorId(parseInt(id));
        campoNome.value = empregado.nome;
        campoIdade.value = empregado.idade.toString();
        campoSelectEstado.value = empregado.estado;
        await carregaCidades(campoSelectCidade, empregado.estado);
        campoSelectCidade.value = empregado.cidade;

        empregado.categorias.forEach((categoria: number) =>{
            adicionaCategoria(divCategorias, categoria);
        })
         btnCadastrarEmpregado.textContent="Atualizar Empregado";

    }
    //Adicionar evento no select de estado para carregar as cidades
    campoSelectEstado?.addEventListener("change", (ev2) =>{
        let estadoSelecionado = campoSelectEstado.value;
        limparSelect(campoSelectCidade);
        carregaCidades(campoSelectCidade, estadoSelecionado);
    })
    //Adicionar evento no botao para adicionar nova categoria
    
    btnAddCategoria?.addEventListener("click", (ev2)=>{
        adicionaCategoria(divCategorias, 0);
    });
    // Adicionar evento para cadastrar quando clicar no butão cadastrar.
    
    btnCadastrarEmpregado.addEventListener("click", async (ev2)=>{
        ev2.preventDefault();
        let camposCategorias = document.getElementsByClassName("campoCategorias") as HTMLCollectionOf<HTMLSelectElement>;
        let categorias: number[] = [];
        Array.from(camposCategorias).forEach((select: HTMLSelectElement)=>{
            categorias.push(parseInt(select.value));
        });
        let empregadoACadastrar: Empregado = {
            "id": undefined,
            "nome": campoNome.value,
            "idade": parseInt(campoIdade.value),
            "cidade": campoSelectCidade.value,
            "estado": campoSelectEstado.value,
            "categorias": categorias
        }
        if(id) {
            empregadoACadastrar.id = parseInt(id);
            await atualizarEmpregado(empregadoACadastrar);
            
        }
        else {
            await cadastrarEmpregado(empregadoACadastrar);
        }
    });
    //previnir submissão ao clicar em cadastrar
    document.getElementById("formSub")?.addEventListener("submit", (ev3)=>{
        ev3.preventDefault();
        return false;
    });
});
let buscaCategoriaPorId = async (id: number): Promise<Categoria> => {
    let retorno = await fetch(`http://localhost:3000/categorias?id=${id}`, { method: "GET", headers: {
    'Content-Type': 'application/json'
   }});
   let categorias: Categoria[] = await retorno.json();
   return categorias[0];
}
let adicionaCategoria = async (divCategorias: HTMLElement, id: number) => {
        let divWrapper = document.createElement("div");
        divCategorias.appendChild(divWrapper);

        let selectCategoria = document.createElement("select");
        selectCategoria.className = "campoCategorias";
        selectCategoria.setAttribute("id", "categoria"+contador);
        contador++;
        await carregarDadosCategorias(selectCategoria);
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
        if(id) {
            selectCategoria.value = id.toString();
        }
}

let atualizarEmpregado = async (empregado: Empregado) =>{
    try{
        let cadastro = await fetch("http://localhost:3000/empregados/"+empregado.id, { method: "PUT", 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(empregado)});
        console.log("Empregado atualizado com sucesso");
    }
    catch(err) {
        console.log("Erro ao cadastrar")
    }
}
let buscaEmpregadoPorId = async (idempregado: number) =>{
      let retorno = await fetch(`http://localhost:3000/empregados?id=${idempregado}`, { method: "GET", headers: {
    'Content-Type': 'application/json'
   }});
   let empregados: Empregado[] = await retorno.json();
   return empregados[0];
}
let cadastrarEmpregado = async (empregado: Empregado) => {
    try{
        let cadastro = await fetch("http://localhost:3000/empregados", { method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(empregado)});
        console.log("Empregado Cadastrado com sucesso");
    }
    catch(err) {
        console.log("Erro ao cadastrar")
    }

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
    id?: number;
    nome: string;
    idade: number;
    estado: string;
    cidade: string;
    categorias: number[];
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
   let option = document.createElement("option");
    option.textContent = "Selecione o Estado";
    option.value = "";
    campo.appendChild(option);

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