"use strict";
const promessa3 = Promise.resolve(10);
promessa3.then(valor => {
    console.log('Recebi ', valor);
    return 20;
}).then(valor => {
    console.log('Recebi ', valor);
    return 30;
});
