const categorias = ["Limpeza", "Bomboniere", "Cereais"]
document.addEventListener("DOMContentLoaded", (ev)=>{

});
let contador = 1;
let adicionaCategoria = (valor: number)=>{
    contador++;
    let divCategorias = document.getElementById("categorias") as HTMLDivElement;

    let divWrapperCategoria = document.createElement("div");
    divWrapperCategoria.id = "categoria"+contador;
    let selectCategoria = document.createElement("select");
    divWrapperCategoria.appendChild(selectCategoria);

    divCategorias.appendChild(divWrapperCategoria);
    adicionaOptions(selectCategoria, categorias);

    let divWrapperBotaoRemoverCategoria = document.createElement("div");
    divWrapperBotaoRemoverCategoria.setAttribute("name", "btnSubCategoria");


    let divWrapperBtnClicado = document.getElementById("categoria"+valor);
    for(let childDiv of divCategorias.getElementsByTagName("div")){
        let childDivElement = childDiv as HTMLElement;
        
    }
}

let adicionaOptions = (campo: HTMLSelectElement, valores: string[]) => {
    for( let valor of valores) {
        let opt = document.createElement("option");
        opt.value = valor;
        opt.textContent = valor;
        campo.appendChild(opt); 
    }
}