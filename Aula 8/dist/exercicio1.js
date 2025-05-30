"use strict";
document.addEventListener("DOMContentLoaded", (ev) => {
    var _a, _b;
    (_a = document.getElementById("btnEnviar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (ev1) => {
        var _a;
        localStorage.setItem("nome", (_a = document.getElementById("txtnome")) === null || _a === void 0 ? void 0 : _a.value);
    });
    (_b = document.getElementById("btnExibir")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (ev1) => {
        const caixaTexto = document.getElementById("caixaTexto");
        caixaTexto ? (caixaTexto.textContent = localStorage.getItem("nome")) : null;
    });
});
