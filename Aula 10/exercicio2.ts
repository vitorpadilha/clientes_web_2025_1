const dois = new Promise( resolve => {
 setTimeout( () => resolve( '2s' ), 2000 );
 } );
const um = new Promise( resolve => {
 setTimeout( () => resolve( '1s' ), 1000 );
} );
const tres = new Promise( ( resolve, reject ) => {
 setTimeout( () => reject( 'Ops!' ), 500 );
} );
const r = Promise.all( [ dois, um, tres ] );
r.then( valor => console.log( valor ), razao => {} );
r.catch( razao => console.log( 'Erro: ', razao ) );
