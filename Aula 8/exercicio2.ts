document.addEventListener("DOMContentLoaded", (ev)=>{
    document.getElementById("btnEnviar")?.addEventListener("click",(ev1)=>{
        adicionarNomeNoLocalStorage();
    });
    document.getElementById("btnFiltrar")?.addEventListener("click",(ev1)=>{
        montarTabela((document.getElementById("filtro") as HTMLInputElement)?.value);
    });
});

let montarTabela = (filtro: string)=>{
    let nomes: string[] = localStorage.getItem("nomes")?JSON.parse(localStorage.getItem("nomes")??""):[];
    nomes = nomes.filter((valor)=>{
        return valor.toLowerCase().includes(filtro.toLowerCase());
    })
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

    const thCabecalho2 = document.createElement("th");
    
    thCabecalho2.textContent="Ação";
    
    trCabecalho.appendChild(thCabecalho2);
    const tBody = document.createElement("tbody");
    tabela.appendChild(tBody);
    nomes.forEach((valor)=>{
        const trLinha = document.createElement("tr");
        const tdLinha = document.createElement("td");
        tdLinha.textContent = valor;
        trLinha.appendChild(tdLinha);

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click",(ev1)=>{
            removerItemNoLocalStorage(valor);
            montarTabela(filtro);
        })
        const tdLinhaBotao = document.createElement("td");
        tdLinhaBotao.appendChild(botaoExcluir);
        trLinha.appendChild(tdLinhaBotao);
        tBody.appendChild(trLinha);
    });

    caixaTexto?.appendChild(tabela);
}
let removerItemNoLocalStorage = (nomeEscolhido: string) =>{
    let nomes: string[] = localStorage.getItem("nomes")?JSON.parse(localStorage.getItem("nomes")??""):[];
    nomes = nomes.filter((valor)=>{
        return !(valor === nomeEscolhido)
    });
    localStorage.setItem("nomes", JSON.stringify(nomes));
}
let adicionarNomeNoLocalStorage = ()=>{
    let nomes: string[] = localStorage.getItem("nomes")?JSON.parse(localStorage.getItem("nomes")??""):[];
    let nomeDigitado = (document.getElementById("txtnome") as HTMLInputElement)?.value;
    nomes.push(nomeDigitado);
    localStorage.setItem("nomes", JSON.stringify(nomes));
}