let multiplica = (array: number[], fator: number) => {
    return array.map(e=> e * fator);
}

console.log(multiplica([3,6,2,5],3));
console.log([3,6,2,5].map(e=> e * 3));