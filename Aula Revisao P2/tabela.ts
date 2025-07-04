document.addEventListener("DOMContentLoaded", (ev)=>{
    //Carregar Filtro Estado
    let filtroEstado = document.getElementById("filtroEstado") as HTMLSelectElement;
    carregarDadosEstados2(filtroEstado);
    //Adicionar evento ao clicar no botao de filtro

    let btnFiltrar = document.getElementById("btnFiltrar") as HTMLButtonElement;
    let filtroNome = document.getElementById("filtroNome") as HTMLInputElement;
    

    let tBodytabela = document.getElementById("corpoTabela");

    btnFiltrar.addEventListener("click", async (ev2) => {
        if(tBodytabela)
            tBodytabela.innerHTML="";
        carregaDadosEmpregado(tBodytabela, filtroNome.value, filtroEstado.value);
    });
});



let carregaDadosEmpregado = async (campo: HTMLElement | null, nome: string, estado: string) => {
    let url = "http://localhost:3000/empregados?";
    if(nome) {
        url+="nome_like="+nome;
    }
    if(estado) {
        url+="&estado="+estado;
    }
 let retorno = await fetch(url, { method: "GET", headers: {
    'Content-Type': 'application/json'
   }});
   let empregados: Empregado[] = await retorno.json();
   
   empregados.forEach((empregado: Empregado) => {
    let linhaTab = document.createElement("tr");
    
    let colNome = document.createElement("td");
    colNome.textContent = empregado.nome;
    linhaTab.appendChild(colNome);

    let colEstado = document.createElement("td");
    colEstado.textContent = empregado.estado;
    linhaTab.appendChild(colEstado);

    let colCategorias = document.createElement("td");
    empregado.categorias.forEach(async (categoriaId)=>{
        let categoria: Categoria = await buscaPOrId(categoriaId);
        colCategorias.textContent = categoria.nome+",";
    });
    linhaTab.appendChild(colCategorias);

    let colApagar = document.createElement("td");
    colApagar.textContent="Apagar";
    colApagar.addEventListener("click", (ev2)=>{
        ev2.preventDefault();
        apagarEmpregado(empregado);
        if(campo)
            campo.innerHTML="";
        carregaDadosEmpregado(campo,nome,estado);
    });
    linhaTab.appendChild(colApagar);


    let colEditar = document.createElement("td");
    colEditar.textContent="Editar";
    colEditar.addEventListener("click", (ev2)=>{
        editarEmpregado(empregado);
    });
    linhaTab.appendChild(colEditar);

    campo?.appendChild(linhaTab);
   });
}

let apagarEmpregado = async(empregado: Empregado) => {
    try{
let retorno = await fetch(`http://localhost:3000/empregados/${empregado.id}`, { method: "DELETE", headers: {
    'Content-Type': 'application/json'
   }});
        console.log("Apagado com sucesso");
    }
    catch(err) {
        console.log("Erro ao apagar");
    }
    
}

let editarEmpregado = async(empregado: Empregado) => {
    window.location.href = "cadastro.html?id="+empregado.id;
}
let buscaPOrId = async (id: number): Promise<Categoria> => {
    let retorno = await fetch(`http://localhost:3000/categorias?id=${id}`, { method: "GET", headers: {
    'Content-Type': 'application/json'
   }});
   let categorias: Categoria[] = await retorno.json();
   return categorias[0];
}

let carregarDadosEstados2 = async (campo: HTMLSelectElement) => {
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
