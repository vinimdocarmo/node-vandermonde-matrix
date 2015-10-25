'use strict';
var assert = require('assert');
var vandermondeMatrix = require('./');

it('should return a vandermonde matrix', function () {
	var terms = [1, 2, 3],
	    degree = 3;

	assert.deepEqual(vandermondeMatrix(terms, degree), [[1, 1, 1], [1, 2, 4], [1, 3, 9]]);
});
