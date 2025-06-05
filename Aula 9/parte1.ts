class Cidade {
    public nome: string;
    public estado: Estado | null;
    constructor(nome: string, estado: Estado | null) {
        this.nome = nome;
        this.estado = estado;
    }
}
class Estado {
    public nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }   
}
var array = [
    {"nome":"Nova Friburgo", "estado": "Rio de Janeiro"},
    {"nome":"Cachoeiro de Macacu ", "estado": "Rio de Janeiro"},
];
var arrayGerado: Cidade[];
let estados: Estado[];
array.forEach((cidade)=>{
    estados.filter((estado: Estado)=>{estado.nome==cidade.estado}).length==0?estados.push(new Estado(cidade.estado)):null;
});
array.map((cidade)=>{
    return new Cidade(cidade.nome, estados.find((estado: Estado)=>{return estado.nome==cidade.estado})??null); 
});
document.addEventListener("DOMContentLoaded", (ev)=>{
    let selectEstado = document.getElementById("selectEstado") as HTMLSelectElement;
    let selectCidade = document.getElementById("selectCidade") as HTMLSelectElement;
    carregaEstados(selectEstado);
    selectEstado.addEventListener("change", (ev1)=> {
        carregaCidades(selectCidade,selectEstado.value);
    });
});
let carregaEstados = (campo: HTMLSelectElement)=>{
    estados.forEach((estado: Estado)=>{
        let optionEstado = document.createElement("option");
        optionEstado.value = estado.nome;
        optionEstado.textContent = estado.nome;
        campo.appendChild(optionEstado);
    });
}
let carregaCidades = (campo: HTMLSelectElement, estado: string)=>{
    arrayGerado.filter((cidade: Cidade)=>{
        return cidade.estado?.nome==estado;
    }).forEach((cidade: Cidade)=>{
        let optionCidade = document.createElement("option");
        optionCidade.value = cidade.nome;
        optionCidade.textContent = cidade.nome;
        campo.appendChild(optionCidade);
    });
}