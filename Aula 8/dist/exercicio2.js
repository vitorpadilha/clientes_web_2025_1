"use strict";
document.addEventListener("DOMContentLoaded", (ev) => {
    var _a, _b;
    (_a = document.getElementById("btnEnviar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (ev1) => {
        adicionarNomeNoLocalStorage();
    });
    (_b = document.getElementById("btnFiltrar")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (ev1) => {
        var _a;
        montarTabela((_a = document.getElementById("filtro")) === null || _a === void 0 ? void 0 : _a.value);
    });
});
let montarTabela = (filtro) => {
    var _a;
    let nomes = localStorage.getItem("nomes") ? JSON.parse((_a = localStorage.getItem("nomes")) !== null && _a !== void 0 ? _a : "") : [];
    nomes = nomes.filter((valor) => {
        return valor.toLowerCase().includes(filtro.toLowerCase());
    });
    const caixaTexto = document.getElementById("caixaTexto");
    caixaTexto ? (caixaTexto.innerHTML = "") : null;
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    tabela.appendChild(thead);
    const trCabecalho = document.createElement("tr");
    thead.appendChild(trCabecalho);
    const thCabecalho = document.createElement("th");
    thCabecalho.textContent = "Nomes Cadastrados";
    trCabecalho.appendChild(thCabecalho);
    const thCabecalho2 = document.createElement("th");
    thCabecalho2.textContent = "Ação";
    trCabecalho.appendChild(thCabecalho2);
    const tBody = document.createElement("tbody");
    tabela.appendChild(tBody);
    nomes.forEach((valor) => {
        const trLinha = document.createElement("tr");
        const tdLinha = document.createElement("td");
        tdLinha.textContent = valor;
        trLinha.appendChild(tdLinha);
        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click", (ev1) => {
            removerItemNoLocalStorage(valor);
            montarTabela(filtro);
        });
        const tdLinhaBotao = document.createElement("td");
        tdLinhaBotao.appendChild(botaoExcluir);
        trLinha.appendChild(tdLinhaBotao);
        tBody.appendChild(trLinha);
    });
    caixaTexto === null || caixaTexto === void 0 ? void 0 : caixaTexto.appendChild(tabela);
};
let removerItemNoLocalStorage = (nomeEscolhido) => {
    var _a;
    let nomes = localStorage.getItem("nomes") ? JSON.parse((_a = localStorage.getItem("nomes")) !== null && _a !== void 0 ? _a : "") : [];
    nomes = nomes.filter((valor) => {
        return !(valor === nomeEscolhido);
    });
    localStorage.setItem("nomes", JSON.stringify(nomes));
};
let adicionarNomeNoLocalStorage = () => {
    var _a, _b;
    let nomes = localStorage.getItem("nomes") ? JSON.parse((_a = localStorage.getItem("nomes")) !== null && _a !== void 0 ? _a : "") : [];
    let nomeDigitado = (_b = document.getElementById("txtnome")) === null || _b === void 0 ? void 0 : _b.value;
    nomes.push(nomeDigitado);
    localStorage.setItem("nomes", JSON.stringify(nomes));
};
