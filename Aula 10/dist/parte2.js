"use strict";
function carregarArquivoGrande() {
    return new Promise((resolve, reject) => {
        const conteudo = lerArquivoMuitoGrande2(); // Síncrono
        if (!conteudo) {
            return reject('Erro ao carregar o arquivo.');
        }
        return resolve(conteudo);
    });
}
const promessa = carregarArquivoGrande(); // Aguarda! 
promessa.then((conteudo) => { console.log("then", conteudo); });
promessa.catch((razao) => { console.log("catch", razao); });
function lerArquivoMuitoGrande2() {
    setTimeout(() => {
        console.log("oi");
    }, 3000);
    return 2;
}
