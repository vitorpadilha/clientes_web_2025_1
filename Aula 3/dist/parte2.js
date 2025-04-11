"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var btnMostrarNomeCompleto = document.getElementById("btnMostrarNomeCompleto");
    var nomeCompleto = document.getElementById("nomeCompleto");
    //com arrow function
    btnMostrarNomeCompleto.addEventListener("click", (event) => {
        nomeCompleto.value = nome.value + " " + sobrenome.value;
    });
    {
        var nome2 = "Fulano";
    }
    var digaOi = document.getElementById("btnDigaOi");
    digaOi.addEventListener("click", (ev) => {
        alert("Oi, " + nome2);
    });
});
//https://github.com/vitorpadilha/clientes_web_2025_1
