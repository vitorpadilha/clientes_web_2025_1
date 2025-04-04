var frutas: string[] = ["uva", "maçã"];
frutas.unshift("pêra");//coloca no inicio do array
frutas.unshift("goiaba");
console.log(frutas);
console.log(frutas.length);

frutas.push("goiaba");//coloca no fim do array

frutas[3] = "goiaba";
frutas[50] = "mamao";
frutas.length; //51