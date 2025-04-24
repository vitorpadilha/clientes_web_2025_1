document.addEventListener("DOMContentLoaded",() =>{
    let formCad: HTMLFormElement | null = document.getElementById("formCadastro") as HTMLFormElement;
    let i =0;
    document.getElementById("btnAddCampo")?.addEventListener("click", (ev)=>{
        let inputNome: HTMLInputElement = document.createElement("input");
        inputNome.type="text";
        inputNome.name="campo"+i;
        formCad.appendChild(inputNome);
        i++;
    });
});
