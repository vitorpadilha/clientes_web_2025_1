//Selecionando todos os inputs do documento HTML
document.addEventListener("DOMContentLoaded",(evento)=>{
    var input1: HTMLCollection = document.getElementsByTagName("input") as HTMLCollection;
    var input2: NodeList = document.querySelectorAll("input") as NodeList;
    var input3: NodeList = document.querySelectorAll("form > input") as NodeList; //Todos Inputs Filhos diretos de um form, ou seja, só os dois primeiros
    var input4: NodeList = document.querySelectorAll("form  input") as NodeList; //Todos Inputs Filhos diretos de um form, traz todos os 3 inputs
    console.log(input1);
    console.log(input2);
    console.log(input3);
    console.log(input4);
});