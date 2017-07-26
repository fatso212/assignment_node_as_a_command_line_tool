let fs = require ( 'fs' );

process.stdin.resume();
process.stdin.setEncoding( 'utf8' );
process.stdin.on( 'data', function( str ) {
	str = str.trim();

	if ( str === '\\q' ) {
		console.log( 'goodbye' );
		process.exit();
	} else {
		fs.appendFile( './data/input.txt', str, 'utf8', function( err ) {
			if ( err ) {
				throw ( err );
			}	
		});
	}
});

