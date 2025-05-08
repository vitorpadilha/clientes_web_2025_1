"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementsByTagName("form")[0];
    let conteudoAnterior = form.innerHTML;
    form.innerHTML = conteudoAnterior + "<button> OI</button>";
});
