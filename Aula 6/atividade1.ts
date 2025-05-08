type Pais = 'BR' | 'AR'; 
type Estado = {
  nome: string;
  pais: Pais;
  cidades: string[];
};

const estados: Estado[] = [
  {
    nome: 'São Paulo',
    pais: 'BR',
    cidades: ['São Paulo', 'Campinas', 'Santos', 'São Bernardo do Campo', 'Ribeirão Preto'],
  },
  {
    nome: 'Minas Gerais',
    pais: 'BR',
    cidades: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim'],
  },
  {
    nome: 'Rio de Janeiro',
    pais: 'BR',
    cidades: ['Rio de Janeiro', 'Niterói', 'Duque de Caxias', 'Nova Iguaçu', 'Campos dos Goytacazes'],
  },
  {
    nome: 'Buenos Aires',
    pais: 'AR',
    cidades: ['Buenos Aires', 'La Plata', 'Mar del Plata', 'Bahía Blanca', 'San Nicolás'],
  },
  {
    nome: 'Córdoba',
    pais: 'AR',
    cidades: ['Córdoba', 'Villa Carlos Paz', 'Río Cuarto', 'Villa María', 'San Francisco'],
  },
  {
    nome: 'Santa Fe',
    pais: 'AR',
    cidades: ['Rosario', 'Santa Fe', 'Rafaela', 'Reconquista', 'Venado Tuerto'],
  }
];

document.addEventListener("DOMContentLoaded",(ev)=>{
    var campoPais: HTMLSelectElement = document.getElementById("pais") as HTMLSelectElement;
    var campoEstado: HTMLSelectElement = document.getElementById("estado") as HTMLSelectElement;
    campoPais?.addEventListener("click", (ev2: MouseEvent)=>{
        limpaCampo(campoEstado);
        let valorPaisEscolhido: Pais = campoPais.value as Pais;
        adicionaEstadosPais(campoEstado, valorPaisEscolhido);
    })
});
let limpaCampo = (campo: HTMLSelectElement) => {
    while ( campo.firstChild ) {
        campo.removeChild( campo.firstChild );
    }
}
let adicionaEstadosPais = (campo: HTMLSelectElement, pais: Pais) => {
    for(let estado of estados) {
        if(estado.pais == pais) {
            let opt: HTMLOptionElement = document.createElement("option");
            opt.value = estado.nome;
            opt.textContent = estado.nome;
            campo.appendChild(opt);
        }
    }
}