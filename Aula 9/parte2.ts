class NaoEncontradaError extends Error{
    constructor(message){
        super(message);
        this.name = "NaoEncontradaError";
    }
}
var array = [
    {"nome":"Nova Friburgo", "estado": "Rio de Janeiro"},
    {"nome":"Cachoeiro de Macacu ", "estado": "Rio de Janeiro"},
];
document.addEventListener("DOMContentLoaded",(ev)=>{
    try{
        let btnFiltrar = document.getElementById("btnFiltrar") as HTMLButtonElement;
        let filtro = document.getElementById("filtro") as HTMLInputElement;
        btnFiltrar?.addEventListener("click",(ev2)=>{
            let cidadesEncontradas = array.filter((cidade)=>{
                return cidade.estado.toLowerCase().includes(filtro.value)
            });
            if(cidadesEncontradas.length==0) {
                throw new NaoEncontradaError("Nenhuma cidade Encontrada");
            } 
            carregarCidadesNaDiv(cidadesEncontradas);
        });
    }
    catch(e){
        alert(e.message);
    }
});
function carregarCidadesNaDiv(cidadesEncontradas){
    let divCidades = document.getElementById("divCidades");
    divCidades?divCidades.innerHTML="":null;
    let ul = document.createElement("ul")
    cidadesEncontradas.forEach((cidade)=>{
        let li = document.createElement("li");
        li.textContent = cidade.nome;
        ul.appendChild(li);
    });
    divCidades?.appendChild(ul);
}