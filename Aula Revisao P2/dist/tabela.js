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
document.addEventListener("DOMContentLoaded", (ev) => {
    //Carregar Filtro Estado
    let filtroEstado = document.getElementById("filtroEstado");
    carregarDadosEstados2(filtroEstado);
    //Adicionar evento ao clicar no botao de filtro
    let btnFiltrar = document.getElementById("btnFiltrar");
    let filtroNome = document.getElementById("filtroNome");
    let tBodytabela = document.getElementById("corpoTabela");
    btnFiltrar.addEventListener("click", (ev2) => __awaiter(void 0, void 0, void 0, function* () {
        if (tBodytabela)
            tBodytabela.innerHTML = "";
        carregaDadosEmpregado(tBodytabela, filtroNome.value, filtroEstado.value);
    }));
});
let carregaDadosEmpregado = (campo, nome, estado) => __awaiter(void 0, void 0, void 0, function* () {
    let url = "http://localhost:3000/empregados?";
    if (nome) {
        url += "nome_like=" + nome;
    }
    if (estado) {
        url += "&estado=" + estado;
    }
    let retorno = yield fetch(url, { method: "GET", headers: {
            'Content-Type': 'application/json'
        } });
    let empregados = yield retorno.json();
    empregados.forEach((empregado) => {
        let linhaTab = document.createElement("tr");
        let colNome = document.createElement("td");
        colNome.textContent = empregado.nome;
        linhaTab.appendChild(colNome);
        let colEstado = document.createElement("td");
        colEstado.textContent = empregado.estado;
        linhaTab.appendChild(colEstado);
        let colCategorias = document.createElement("td");
        empregado.categorias.forEach((categoriaId) => __awaiter(void 0, void 0, void 0, function* () {
            let categoria = yield buscaPOrId(categoriaId);
            colCategorias.textContent = categoria.nome + ",";
        }));
        linhaTab.appendChild(colCategorias);
        let colApagar = document.createElement("td");
        colApagar.textContent = "Apagar";
        colApagar.addEventListener("click", (ev2) => {
            ev2.preventDefault();
            apagarEmpregado(empregado);
            if (campo)
                campo.innerHTML = "";
            carregaDadosEmpregado(campo, nome, estado);
        });
        linhaTab.appendChild(colApagar);
        let colEditar = document.createElement("td");
        colEditar.textContent = "Editar";
        colEditar.addEventListener("click", (ev2) => {
            editarEmpregado(empregado);
        });
        linhaTab.appendChild(colEditar);
        campo === null || campo === void 0 ? void 0 : campo.appendChild(linhaTab);
    });
});
let apagarEmpregado = (empregado) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let retorno = yield fetch(`http://localhost:3000/empregados/${empregado.id}`, { method: "DELETE", headers: {
                'Content-Type': 'application/json'
            } });
        console.log("Apagado com sucesso");
    }
    catch (err) {
        console.log("Erro ao apagar");
    }
});
let editarEmpregado = (empregado) => __awaiter(void 0, void 0, void 0, function* () {
    window.location.href = "cadastro.html?id=" + empregado.id;
});
let buscaPOrId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let retorno = yield fetch(`http://localhost:3000/categorias?id=${id}`, { method: "GET", headers: {
            'Content-Type': 'application/json'
        } });
    let categorias = yield retorno.json();
    return categorias[0];
});
let carregarDadosEstados2 = (campo) => __awaiter(void 0, void 0, void 0, function* () {
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
