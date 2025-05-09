const categorias = ["Limpeza", "Bomboniere", "Cereais"];

let contador = 1;
let contadorPresentesAtual = 1;
let adicionaCategoria = (valor: number)=>{
    contador++;
    
    let fieldSetCategorias = document.getElementById("categorias") as HTMLFieldSetElement;

    let divWrapperCategoria = document.createElement("div");
    divWrapperCategoria.id = "categoria"+contador;
    let selectCategoria = document.createElement("select");
    divWrapperCategoria.appendChild(selectCategoria);

    fieldSetCategorias.appendChild(divWrapperCategoria);
    adicionaOptions(selectCategoria, categorias, "-- Selecione a Categoria --");

    let divWrapperBotaoRemoverCategoria = document.createElement("div");
    divWrapperBotaoRemoverCategoria.setAttribute("name", "btnSubCategoria");
    divWrapperBotaoRemoverCategoria.id = "btnSubCategoria"+contador;

    let btnRemoveCategoria = document.createElement("button");
    btnRemoveCategoria.textContent="-";
    btnRemoveCategoria.type = "button";
    btnRemoveCategoria.addEventListener("click",(ev)=>{
        removerCategoria(contador);
    });
    divWrapperBotaoRemoverCategoria.appendChild(btnRemoveCategoria);

    let divWrapperBotaoAdicionarCategoria = document.createElement("div");
    divWrapperBotaoAdicionarCategoria.setAttribute("name", "btnSomaCategoria");
    divWrapperBotaoAdicionarCategoria.id = "btnSubCategoria"+contador;

    let btnAdicionaCategoria = document.createElement("button");
    btnAdicionaCategoria.textContent="+";
    btnAdicionaCategoria.type = "button";
    btnAdicionaCategoria.addEventListener("click",(ev)=>{
        adicionaCategoria(contador);
    });
    divWrapperBotaoAdicionarCategoria.appendChild(btnAdicionaCategoria);
    divWrapperCategoria.appendChild(divWrapperBotaoRemoverCategoria);
    divWrapperCategoria.appendChild(divWrapperBotaoAdicionarCategoria);

    let divWrapperBtnClicado = document.getElementById("categoria"+valor) as HTMLDivElement;
    for(let childDiv of divWrapperBtnClicado?.getElementsByTagName("div")){
        let childDivElement = childDiv as HTMLElement;
        if(childDivElement.getAttribute("name") == "btnSomaCategoria") {
            divWrapperBtnClicado.removeChild(childDiv);
        }
        else if(contadorPresentesAtual==1 && childDiv.getAttribute("name") == "btnSubCategoria") {
            let btnRemoveCategoriaInterno = document.createElement("button");
            btnRemoveCategoriaInterno.textContent="-";
            btnRemoveCategoriaInterno.type = "button";
            btnRemoveCategoriaInterno.addEventListener("click",(ev)=>{
                removerCategoria(valor);
            });
            childDiv.appendChild(btnRemoveCategoria);
        }
    }
   contadorPresentesAtual++;
}
let removerCategoria = (valor: number)=>{
    contadorPresentesAtual--;
}
let adicionaOptions = (campo: HTMLSelectElement, valores: string[], textoOptionVazio: string) => {
    let opt = document.createElement("option");
    opt.value = "";
    opt.textContent = textoOptionVazio;
    campo.appendChild(opt);
    for( let valor of valores) {
        let opt = document.createElement("option");
        opt.value = valor;
        opt.textContent = valor;
        campo.appendChild(opt); 
    }
}