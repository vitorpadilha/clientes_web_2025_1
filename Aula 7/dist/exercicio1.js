"use strict";
let maxMin = (array, min, max) => {
    return array.filter((el) => el >= min && el <= max);
};
let maxMin2 = (array, min, max) => {
    return array.filter((el) => { return el >= min && el <= max; });
};
let maxMin3 = (array, min, max) => {
    return array.filter(el => el >= min && el <= max);
};
