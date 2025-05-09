"use strict";
const categorias = ["Limpeza", "Bomboniere", "Cereais"];
document.addEventListener("DOMContentLoaded", (ev) => {
});
let contador = 1;
let adicionaCategoria = (valor) => {
    contador++;
    let divCategorias = document.getElementById("categorias");
    let divWrapperCategoria = document.createElement("div");
    divWrapperCategoria.id = "categoria" + contador;
    let selectCategoria = document.createElement("select");
    divWrapperCategoria.appendChild(selectCategoria);
    divCategorias.appendChild(divWrapperCategoria);
    adicionaOptions(selectCategoria, categorias, "-- Selecione a Categoria --");
    let divWrapperBotaoRemoverCategoria = document.createElement("div");
    divWrapperBotaoRemoverCategoria.setAttribute("name", "btnSubCategoria");
    divWrapperBotaoRemoverCategoria.id = "btnSubCategoria" + contador;
    let btnRemoveCategoria = document.createElement("button");
    btnRemoveCategoria.textContent = "-";
    btnRemoveCategoria.type = "button";
    btnRemoveCategoria.addEventListener("click", (ev) => {
        removerCategoria(contador);
    });
    divWrapperBotaoRemoverCategoria.appendChild(btnRemoveCategoria);
    let divWrapperBotaoAdicionarCategoria = document.createElement("div");
    divWrapperBotaoAdicionarCategoria.setAttribute("name", "btnSomaCategoria");
    divWrapperBotaoAdicionarCategoria.id = "btnSubCategoria" + contador;
    let btnAdicionaCategoria = document.createElement("button");
    btnAdicionaCategoria.textContent = "+";
    btnAdicionaCategoria.type = "button";
    btnAdicionaCategoria.addEventListener("click", (ev) => {
        adicionaCategoria(contador);
    });
    divWrapperBotaoAdicionarCategoria.appendChild(btnAdicionaCategoria);
    divCategorias.appendChild(divWrapperBotaoRemoverCategoria);
    divCategorias.appendChild(divWrapperBotaoAdicionarCategoria);
    let divWrapperBtnClicado = document.getElementById("categoria" + valor);
    for (let childDiv of divWrapperBtnClicado === null || divWrapperBtnClicado === void 0 ? void 0 : divWrapperBtnClicado.getElementsByTagName("div")) {
        let childDivElement = childDiv;
        if (childDiv.getAttribute("name") == "btnSomaCategoria") {
            divWrapperBtnClicado.removeChild(childDiv);
        }
        else if (valor == 1 && childDiv.getAttribute("name") == "btnSubCategoria") {
            let btnRemoveCategoriaInterno = document.createElement("button");
            btnRemoveCategoriaInterno.textContent = "-";
            btnRemoveCategoriaInterno.type = "button";
            btnRemoveCategoriaInterno.addEventListener("click", (ev) => {
                removerCategoria(valor);
            });
            childDiv.appendChild(btnRemoveCategoria);
        }
    }
};
let removerCategoria = (valor) => {
};
let adicionaOptions = (campo, valores, textoOptionVazio) => {
    let opt = document.createElement("option");
    opt.value = "";
    opt.textContent = textoOptionVazio;
    campo.appendChild(opt);
    for (let valor of valores) {
        let opt = document.createElement("option");
        opt.value = valor;
        opt.textContent = valor;
        campo.appendChild(opt);
    }
};
