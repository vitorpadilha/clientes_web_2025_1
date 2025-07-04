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
/*
const params = new URLSearchParams(window.location.search);

// Acessando parâmetros individualmente
const nome = params.get("nome");   // "Joao"
const idade = params.get("idade"); // "25"
*/
let contador = 1;
document.addEventListener("DOMContentLoaded", (ev) => {
    var _a;
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
    btnCadastrarEmpregado.addEventListener("click", (ev2) => __awaiter(void 0, void 0, void 0, function* () {
        ev2.preventDefault();
        let camposCategorias = document.getElementsByClassName("campoCategorias");
        let categorias = [];
        Array.from(camposCategorias).forEach((select) => {
            categorias.push(parseInt(select.value));
        });
        let empregadoACadastrar = {
            "nome": campoNome.value,
            "idade": parseInt(campoIdade.value),
            "cidade": campoSelectCidade.value,
            "estado": campoSelectEstado.value,
            "categorias": categorias
        };
        yield cadastrarEmpregado(empregadoACadastrar);
    }));
    //previnir submissão ao clicar em cadastrar
    (_a = document.getElementById("formSub")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (ev3) => {
        ev3.preventDefault();
        return false;
    });
});
let cadastrarEmpregado = (empregado) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let cadastro = yield fetch("http://localhost:3000/empregados", { method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empregado) });
        console.log("Empregado Cadastrado com sucesso");
    }
    catch (err) {
        console.log("Erro ao cadastrar");
    }
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
    let option = document.createElement("option");
    option.textContent = "Selecione o Estado";
    option.value = "";
    campo.appendChild(option);
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
