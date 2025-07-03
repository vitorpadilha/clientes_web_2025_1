async function consultarFrutas() {
 if ( Math.random() > 0.5 ) {
 return [ 'Maçã', 'Laranja', 'Uva' ];
 }
 throw new Error( 'Sem frutas boas hoje.' );
}
( async () => {
 try {
    console.log('  Frutas: ', await consultarFrutas() );
 } catch ( err ) {
 console.log( err.message );
 }
} )();
 

