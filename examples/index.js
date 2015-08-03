'use strict';

var table = require( './../lib' );

function getState( capital ) {
	var state,
		parts,
		len,
		i;

	// Ensure the first letter of each word comprising a capital's name is capitalized...
	parts = capital.split( ' ' );
	len = parts.length;
	capital = '';
	for ( i = 0; i < len; i++ ) {
		capital += parts[ i ][ 0 ].toUpperCase() + parts[ i ].substring( 1 );
		if ( i < len-1 ) {
			capital += ' ';
		}
	}
	// Get the state name:
	state = table[ capital ];

	// Ensure a valid capital was provided...
	if ( state === void 0 ) {
		throw new Error( 'unrecognized capital. Value: `' + capital + '`.' );
	}
	return state;
}

console.log( getState( 'Jefferson City' ) );
console.log( getState( 'Trenton' ) );
console.log( getState( 'Sacramento' ) );
