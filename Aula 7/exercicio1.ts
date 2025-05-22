let maxMin = (array: number[], min: number, max: number) => {
    return array.filter((el)=> el>=min && el<=max);
}

let maxMin2 = (array: number[], min: number, max: number) => {
    return array.filter((el)=> {return el>=min && el<=max});
}

let maxMin3 = (array: number[], min: number, max: number) => {
    return array.filter(el=> el>=min && el<=max);
}