"use strict";
const estados = [
    {
        nome: 'São Paulo',
        pais: 'BR',
        cidades: ['São Paulo', 'Campinas', 'Santos', 'São Bernardo do Campo', 'Ribeirão Preto'],
    },
    {
        nome: 'Minas Gerais',
        pais: 'BR',
        cidades: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim'],
    },
    {
        nome: 'Rio de Janeiro',
        pais: 'BR',
        cidades: ['Rio de Janeiro', 'Niterói', 'Duque de Caxias', 'Nova Iguaçu', 'Campos dos Goytacazes'],
    },
    {
        nome: 'Buenos Aires',
        pais: 'AR',
        cidades: ['Buenos Aires', 'La Plata', 'Mar del Plata', 'Bahía Blanca', 'San Nicolás'],
    },
    {
        nome: 'Córdoba',
        pais: 'AR',
        cidades: ['Córdoba', 'Villa Carlos Paz', 'Río Cuarto', 'Villa María', 'San Francisco'],
    },
    {
        nome: 'Santa Fe',
        pais: 'AR',
        cidades: ['Rosario', 'Santa Fe', 'Rafaela', 'Reconquista', 'Venado Tuerto'],
    }
];
document.addEventListener("DOMContentLoaded", (ev) => {
    var campoPais = document.getElementById("pais");
    var campoEstado = document.getElementById("estado");
    campoPais === null || campoPais === void 0 ? void 0 : campoPais.addEventListener("click", (ev2) => {
        limpaCampo(campoEstado);
        let valorPaisEscolhido = campoPais.value;
        adicionaEstadosPais(campoEstado, valorPaisEscolhido);
    });
});
let limpaCampo = (campo) => {
    while (campo.firstChild) {
        if (campo.value != "")
            campo.removeChild(campo.firstChild);
    }
};
let adicionaEstadosPais = (campo, pais) => {
    for (let estado of estados) {
        if (estado.pais == pais) {
            let opt = document.createElement("option");
            opt.value = estado.nome;
            opt.textContent = estado.nome;
            campo.appendChild(opt);
        }
    }
};
