document.addEventListener("DOMContentLoaded",function(event) {
    var nome: HTMLInputElement = document.getElementById("nome") as HTMLInputElement;
    var sobrenome: HTMLInputElement = <HTMLInputElement>document.getElementById("sobrenome");
    var btnMostrarNomeCompleto: HTMLButtonElement = document.getElementById("btnMostrarNomeCompleto") as HTMLButtonElement;
    var nomeCompleto: HTMLInputElement = document.getElementById("nomeCompleto") as HTMLInputElement;
    //com arrow function
    btnMostrarNomeCompleto.addEventListener("click", (event)=>{
        nomeCompleto.value = nome.value + " " + sobrenome.value;
    });
    
    let nome2 = "Fulano";
    
    var digaOi: HTMLButtonElement = document.getElementById("btnDigaOi") as HTMLButtonElement;
    digaOi.addEventListener("click", (ev)=>{
        alert("Oi, "+nome2);
    });
});
//https://github.com/vitorpadilha/clientes_web_2025_1