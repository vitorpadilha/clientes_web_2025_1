"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let contador = 1;
document.addEventListener("DOMContentLoaded", (ev) => {
    //Carregar dados do select
    let campoSelectEstado = document.getElementById("selectEstado");
    carregarDadosEstados(campoSelectEstado);
    let campoNome = document.getElementById("campoNome");
    let campoIdade = document.getElementById("campoIdade");
    let divCategorias = document.getElementById("categorias");
    let campoSelectCidade = document.getElementById("selectCidade");
    let btnAddCategoria = document.getElementById("btnAddCategoria");
    let btnCadastrarEmpregado = document.getElementById("btnCadastrarEmpregado");
    //Adicionar evento no select de estado para carregar as cidades
    campoSelectEstado === null || campoSelectEstado === void 0 ? void 0 : campoSelectEstado.addEventListener("change", (ev2) => {
        let estadoSelecionado = campoSelectEstado.value;
        limparSelect(campoSelectCidade);
        carregaCidades(campoSelectCidade, estadoSelecionado);
    });
    //Adicionar evento no botao para adicionar nova categoria
    btnAddCategoria === null || btnAddCategoria === void 0 ? void 0 : btnAddCategoria.addEventListener("click", (ev2) => {
        let divWrapper = document.createElement("div");
        divCategorias.appendChild(divWrapper);
        let selectCategoria = document.createElement("select");
        selectCategoria.className = "campoCategorias";
        selectCategoria.setAttribute("id", "categoria" + contador);
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
    btnCadastrarEmpregado.addEventListener("click", (ev2) => {
        let camposCategorias = document.getElementsByClassName("campoCategorias");
        let categorias = [];
        Array.from(camposCategorias).forEach((select) => {
            categorias.push(select.value);
        });
        console.log(categorias);
        let empregadoACadastrar = {
            "nome": campoNome.value,
            "idade": parseInt(campoIdade.value),
            "cidade": campoSelectCidade.value,
            "estado": campoSelectEstado.value,
            "categorias": categorias
        };
        cadastrarEmpregado(empregadoACadastrar);
        ev2.preventDefault();
    });
});
let cadastrarEmpregado = (empregado) => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch("http://localhost:3000/empregados", { method: "POST", headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(empregado) }).then((pessoa) => {
        console.log("Empregado Cadastrado com sucesso", pessoa);
    });
});
let limparSelect = (campo) => {
    while (campo.firstChild) {
        campo.removeChild(campo.firstChild);
    }
};
let carregarDadosCategorias = (campo) => __awaiter(void 0, void 0, void 0, function* () {
    let retorno = yield fetch(`http://localhost:3000/categorias`, { method: "GET", headers: {
            'Content-Type': 'application/json'
        } });
    let categorias = yield retorno.json();
    categorias.forEach((categoria) => {
        let option = document.createElement("option");
        option.textContent = categoria.nome;
        option.value = categoria.id.toString();
        campo.appendChild(option);
    });
});
let carregarDadosEstados = (campo) => __awaiter(void 0, void 0, void 0, function* () {
    let retorno = yield fetch(`http://localhost:3000/estados`, { method: "GET", headers: {
            'Content-Type': 'application/json'
        } });
    let estados = yield retorno.json();
    estados.forEach((estado) => {
        let option = document.createElement("option");
        option.textContent = estado.nome;
        option.value = estado.abreviacao;
        campo.appendChild(option);
    });
});
let carregaCidades = (campo, estado) => __awaiter(void 0, void 0, void 0, function* () {
    let retorno = yield fetch(`http://localhost:3000/cidades?estado=${estado}`, { method: "GET", headers: {
            'Content-Type': 'application/json'
        } });
    let cidades = yield retorno.json();
    cidades.forEach((cidade) => {
        let option = document.createElement("option");
        option.textContent = cidade.nome;
        option.value = cidade.nome;
        campo.appendChild(option);
    });
});
