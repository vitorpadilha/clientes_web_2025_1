"use strict";
//Selecionando todos os inputs do documento HTML
document.addEventListener("DOMContentLoaded", (evento) => {
    var input1 = document.getElementsByTagName("input");
    var input2 = document.querySelectorAll("input");
    var input3 = document.querySelectorAll("form > input"); //Todos Inputs Filhos diretos de um form, ou seja, só os dois primeiros
    var input4 = document.querySelectorAll("form  input"); //Todos Inputs Filhos diretos de um form, traz todos os 3 inputs
    console.log(input1);
    console.log(input2);
    console.log(input3);
    console.log(input4);
});
