var jmlAngkot = 10;
var angkotBeroperasi = 6;

for( var noAngkot =1; noAngkot <= jmlAngkot; noAngkot++){
    if ( noAngkot <= 6) {
        console.log(' Angkot No. ' + noAngkot +'beroperasi dengan baik. ');
    } else if( noAngkot=== 8 ) {
        console.log( ' Angkot no. ' + noAngkot + ' sedang lembur. ')
    } else {
        console.log( ' Angkot no. ' + noAngkot + ' sedang tidak beroperasi. ')
    }
}