"use strict";
let carro1 = new Promise(resolve => {
    setTimeout(() => resolve('Carro1: 2s'), 2000);
});
let carro2 = new Promise(resolve => {
    setTimeout(() => resolve('Carro2: 3s'), 3000);
});
let carro3 = new Promise(resolve => {
    setTimeout(() => resolve('Carro3: 4s'), 4000);
});
let carro4 = new Promise(resolve => {
    setTimeout(() => resolve('Carro4: 1s'), 1000);
});
let carro5 = new Promise(resolve => {
    setTimeout(() => resolve('Carro5: 5s'), 5000);
});
let ganhador = Promise.race([carro1, carro2, carro3, carro4, carro5]);
ganhador.then((carro) => {
    console.log(carro);
});
