function funcaoEscopoTeste(){ //global
    if(0==arguments.length) {
        for(var i:number=0;i<5;i++){
            //nada
        }
    }
   // console.log(i);
}
funcaoEscopoTeste();//5
//funcaoEscopoTeste(100);//undefined