async function consultarFrutas() {
 if ( Math.random() > 0.5 ) {
 return [ 'Maçã', 'Laranja', 'Uva' ];
 }
 throw new Error( 'Sem frutas boas hoje.' );
}
(async ()=>{
    consultarFrutas();  
})();
