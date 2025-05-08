document.addEventListener("DOMContentLoaded",(evento)=>{
    var input1: HTMLInputElement | null = document.getElementById("formName") as HTMLInputElement;
    var input2: HTMLInputElement | null = document.querySelector("form:nth-child(1)");
    var input3: HTMLInputElement | null = document.querySelector("input");
    var input4: HTMLInputElement | null = document.getElementsByTagName("input")[0];

    console.log(input1?.type);
    console.log(input1?.getAttribute("type"));

    console.log(input2?.type);
    console.log(input2?.getAttribute("type"));

    console.log(input3?.type);
    console.log(input3?.getAttribute("type"));
    
    console.log(input4?.type);
    console.log(input4?.getAttribute("type"));
});