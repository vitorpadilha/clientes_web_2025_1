document.addEventListener("DOMContentLoaded", (ev)=>{
    document.getElementById("btnEnviar")?.addEventListener("click",(ev1)=>{
        adicionarNomeNoLocalStorage();
        montarTabela();
    })
});

let montarTabela = ()=>{
    let nomes: string[] = localStorage.getItem("nomes")?JSON.parse(localStorage.getItem("nomes")??""):[];
    const caixaTexto = document.getElementById("caixaTexto");
    caixaTexto?(caixaTexto.innerHTML=""):null;
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    tabela.appendChild(thead);
    const trCabecalho = document.createElement("tr");
    thead.appendChild(trCabecalho);
    const thCabecalho = document.createElement("th");
    
    thCabecalho.textContent="Nomes Cadastrados";
    
    trCabecalho.appendChild(thCabecalho);
    const tBody = document.createElement("tbody");
    tabela.appendChild(tBody);
    nomes.forEach((valor)=>{
        const trLinha = document.createElement("tr");
        const tdLinha = document.createElement("td");
        tdLinha.textContent = valor;
        trLinha.appendChild(tdLinha);
        tBody.appendChild(trLinha);
    });

    caixaTexto?.appendChild(tabela);
}
let adicionarNomeNoLocalStorage = ()=>{
    let nomes: string[] = localStorage.getItem("nomes")?JSON.parse(localStorage.getItem("nomes")??""):[];
    let nomeDigitado = (document.getElementById("txtnome") as HTMLInputElement)?.value;
    nomes.push(nomeDigitado);
    localStorage.setItem("nomes", JSON.stringify(nomes));
}