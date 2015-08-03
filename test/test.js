/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	table = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-us-states-capitals-names', function tests() {

	it( 'should export an object', function test() {
		expect( table ).to.be.an( 'object' );
		assert.strictEqual( Object.keys( table ).length, 50 );
	});

	it( 'should map state capitals to names', function test() {
		assert.strictEqual( table[ 'Jefferson City' ], 'Missouri' );
		assert.strictEqual( table[ 'Trenton' ], 'New Jersey' );
		assert.strictEqual( table[ 'Sacramento' ], 'California' );
	});

});
