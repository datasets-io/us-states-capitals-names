US State Capitals and Names
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Mapping between US state capitals and names.


## Installation

``` bash
$ npm install datasets-us-states-capitals-names
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var table = require( 'datasets-us-states-capitals-names' );
```

#### table

Mapping between US state capitals and names.

``` javascript
console.dir( table );
/*
	{
		"Montgomery": "Alabama",
		"Juneau": "Alaska",
		"Phoenix": "Arizona",
		"Little Rock": "Arkansas",
		"Sacramento": "California",
		...
	}
*/
```


## Examples

``` javascript
var table = require( 'datasets-us-states-capitals-names' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-us-states-capitals-names.svg
[npm-url]: https://npmjs.org/package/datasets-us-states-capitals-names

[travis-image]: http://img.shields.io/travis/datasets-io/us-states-capitals-names/master.svg
[travis-url]: https://travis-ci.org/datasets-io/us-states-capitals-names

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/us-states-capitals-names/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/us-states-capitals-names?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/us-states-capitals-names.svg
[dependencies-url]: https://david-dm.org/datasets-io/us-states-capitals-names

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/us-states-capitals-names.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/us-states-capitals-names

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/us-states-capitals-names.svg
[github-issues-url]: https://github.com/datasets-io/us-states-capitals-names/issues
