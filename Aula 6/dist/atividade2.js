"use strict";
document.addEventListener("DOMContentLoaded", (ev) => {
});
let adicionaCategoria = (valor) => {
    let divCategorias = document.getElementById("categorias");
    for (let child of divCategorias.children) {
        let childElement = child;
        console.log(childElement.getAttribute("type"));
    }
};
