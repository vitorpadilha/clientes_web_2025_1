"use strict";
document.addEventListener("DOMContentLoaded", (ev) => {
    var _a, _b, _c;
    (_a = document.getElementById("btnEnviar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (ev1) => {
        var _a;
        localStorage.setItem("nome", (_a = document.getElementById("txtnome")) === null || _a === void 0 ? void 0 : _a.value);
    });
    (_b = document.getElementById("btnExibir")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (ev1) => {
        //document.getElementById("caixaTexto")?.textContent = localStorage.getItem("nome");
        const caixaTexto = document.getElementById("caixaTexto");
        caixaTexto ? (caixaTexto.textContent = localStorage.getItem("nome")) : null;
    });
    (_c = document.getElementById("btnRemover")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", (ev1) => {
        localStorage.removeItem("nome");
    });
});
