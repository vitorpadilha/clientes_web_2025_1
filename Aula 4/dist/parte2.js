"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    let formCad = document.getElementById("formCadastro");
    let i = 0;
    (_a = document.getElementById("btnAddCampo")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (ev) => {
        let inputNome = document.createElement("input");
        inputNome.type = "text";
        inputNome.name = "campo" + 1;
        formCad.appendChild(inputNome);
        i++;
    });
});
