"use strict";
let pessoasTabela = [{ nome: 'Ana', sobrenome: 'Souza', tel: { ddd: '22', numero: '999887766' } },
    { nome: 'Beto', sobrenome: 'Costa', tel: { ddd: '21', numero: '999776655' } },
    { nome: 'Bia', sobrenome: 'Andrade', tel: { ddd: '21', numero: '988554433' } },
    { nome: 'Carla', sobrenome: 'Silva', tel: { ddd: '24', numero: '998606060' } },
    { nome: 'Carlos', sobrenome: 'Rocha', tel: { ddd: '22', numero: '988223344' } },
];
document.addEventListener("DOMContentLoaded", (ev) => {
    var _a;
    let campoFiltro = document.getElementById("filtro");
    let tabelaDados = document.getElementById("dadosFiltrados");
    (_a = document.getElementById("btnFiltrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (ev2) => {
        limpaTabela(tabelaDados);
        carregarDadosDoFiltro(tabelaDados, campoFiltro.value);
    });
});
const carregarDadosDoFiltro = (tabela, filtro) => {
    pessoasTabela.filter(e => e.nome.toLowerCase().includes(filtro.toLowerCase())).forEach(e => {
        console.log("OUI");
        let tr = document.createElement("tr");
        let tdNome = document.createElement("td");
        tr.appendChild(tdNome);
        tdNome.textContent = e.nome;
        let tdSobreNome = document.createElement("td");
        tr.appendChild(tdSobreNome);
        tdSobreNome.textContent = e.sobrenome;
        let tdTelefone = document.createElement("td");
        tr.appendChild(tdTelefone);
        tdTelefone.textContent = "(" + e.tel.ddd + ") " + e.tel.numero;
        tabela.getElementsByTagName("tbody")[0].appendChild(tr);
    });
};
const limpaTabela = (tabela) => {
    let tbody = tabela.getElementsByTagName("tbody")[0];
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
};
