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
            console.log(childDivElement.getAttribute("name"));
            console.log(childDivElement.firstChild );
            childDivElement.removeChild(childDivElement.firstChild as ChildNode);
        }
        if(contadorPresentesAtual==1 && childDivElement.getAttribute("name") == "btnSubCategoria") {
            let btnRemoveCategoriaInterno = document.createElement("button");
            btnRemoveCategoriaInterno.textContent="-";
            btnRemoveCategoriaInterno.type = "button";
            btnRemoveCategoriaInterno.addEventListener("click",(ev)=>{
                removerCategoria(valor);
            });
            childDivElement.appendChild(btnRemoveCategoriaInterno);
        }
    }
   contadorPresentesAtual++;
}
let removerCategoria = (valor: number)=>{
    let fieldSetCategorias = document.getElementById("categorias") as HTMLFieldSetElement;
    let divWrapperBtnClicado = document.getElementById("categoria"+valor) as HTMLDivElement;
    fieldSetCategorias.removeChild(divWrapperBtnClicado);
    if(contadorPresentesAtual==2) {
        let divs: HTMLCollection = fieldSetCategorias.getElementsByTagName("div");
        if(divs.length ==1) {
            for(let divUnitaria of divs) {
                for(let divWrapperBotao of divUnitaria.children ){
                    if(divWrapperBotao.getAttribute("name") == "btnSubCategoria") {
                        divWrapperBotao.removeChild(divWrapperBotao.firstChild as ChildNode);
                    }
                    else if(divWrapperBotao.getAttribute("name") == "btnSomaCategoria" && divWrapperBotao.children.length==0) {
                            let btnAdicionaCategoriaInterno = document.createElement("button");
                            btnAdicionaCategoriaInterno.textContent="+";
                            btnAdicionaCategoriaInterno.type = "button";
                            btnAdicionaCategoriaInterno.addEventListener("click",(ev)=>{
                                adicionaCategoria(valor);
                            });
                            divWrapperBotao.appendChild(btnAdicionaCategoriaInterno);
                    }
                }
            }
            
        }
        
    }
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