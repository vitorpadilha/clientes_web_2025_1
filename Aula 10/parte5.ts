document.addEventListener("DOMContentLoaded",(ev)=>{
    let tBodyTabela = document.getElementsByTagName("tbody")[0];
    let pessoas: Promise<Pessoa[]> = listasPessoas("");
    pessoas.then((pes)=>{
            pes.forEach(
                (pessoa)=>
                {
                    let trRetorno = document.createElement("tr");

                    let tdNome = document.createElement("td");
                    tdNome.textContent = pessoa.nome;
                    trRetorno.appendChild(tdNome);

                    let tdSobrenome = document.createElement("td");
                    tdSobrenome.textContent = pessoa.sobrenome;
                    trRetorno.appendChild(tdSobrenome);

                    let tdAcaoExcluir = document.createElement("td");
                    tdAcaoExcluir.textContent = "Remover";
                    tdAcaoExcluir.addEventListener("click", (ev)=> {
                        removerPessoa(pessoa);
                    });
                    trRetorno.appendChild(tdAcaoExcluir);


                     let tdAcaoAlterar = document.createElement("td");
                    tdAcaoAlterar.textContent = "Alterar";
                    tdAcaoAlterar.addEventListener("click", (ev)=> {
                        alterar(pessoa);
                    });
                    trRetorno.appendChild(tdAcaoAlterar);

                    tBodyTabela.appendChild(trRetorno);
                }
            )
        }
    )
});

async function listasPessoas(filtro: string): Promise<Pessoa[]>{
   let retorno = await fetch(`http://localhost:3000/pessoas`, { method: "GET", headers: {
    'Content-Type': 'application/json'
   }});
   return retorno.json()
}

async function removerPessoa(p: Pessoa) {
   let response = await fetch(`http://localhost:3000/pessoas/${p.id}`, { method: "DELETE", headers: {
    'Content-Type': 'application/json'
   }});
   return response.json();
}

function alterar(p: Pessoa) {
   // Redirect to a new URL
    window.location.href = 'http://127.0.0.1:5500/Aula%2010/parte4.html?id='+p.id;
}

function limparTabela(tBody: HTMLElement) {
    while(tBody.firstChild) {
        tBody.removeChild(tBody.firstChild());
    }
}