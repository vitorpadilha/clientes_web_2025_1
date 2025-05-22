"use strict";
let pessoas = [{ nome: 'Ana', sobrenome: 'Souza', tel: { ddd: '22', numero: '999887766' } },
    { nome: 'Beto', sobrenome: 'Costa', tel: { ddd: '21', numero: '999776655' } },
    { nome: 'Bia', sobrenome: 'Andrade', tel: { ddd: '21', numero: '988554433' } },
    { nome: 'Carla', sobrenome: 'Silva', tel: { ddd: '24', numero: '998606060' } },
    { nome: 'Carlos', sobrenome: 'Rocha', tel: { ddd: '22', numero: '988223344' } },
];
//a
let pessoasDDD22 = pessoas.filter(e => e.tel.ddd == '22');
console.log(pessoasDDD22);
//b
let pessoasConcatenadas = pessoas.map(e => e.nome + " " + e.sobrenome + " (" + e.tel.ddd + ") " + e.tel.numero);
console.log(pessoasConcatenadas);
