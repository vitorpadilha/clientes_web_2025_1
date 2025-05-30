document.addEventListener("DOMContentLoaded", (ev)=>{
    document.getElementById("btnEnviar")?.addEventListener("click",(ev1)=>{
        localStorage.setItem("nome",(document.getElementById("txtnome") as HTMLInputElement)?.value);
    });
    document.getElementById("btnExibir")?.addEventListener("click",(ev1)=>{
        //document.getElementById("caixaTexto")?.textContent = localStorage.getItem("nome");
        const caixaTexto = document.getElementById("caixaTexto") as HTMLDivElement;
        caixaTexto ? (caixaTexto.textContent = localStorage.getItem("nome")) : null;
    });
    document.getElementById("btnRemover")?.addEventListener("click",(ev1)=>{
        localStorage.removeItem("nome");
    });
});