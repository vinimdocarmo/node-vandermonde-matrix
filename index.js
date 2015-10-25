'use strict';

/**
 *
 * @param {Array} terms
 * @param {number} degree
 * @returns {Array}
 */
module.exports = function (terms, degree) {
	if (!terms || !degree || !(terms instanceof Array) || typeof degree !== 'number') {
		throw new TypeError('You must provide a array of terms as the first argument and a number degree');
	}

	var vandermondeMatrix = [],
	    term,
	    row;

	for (var j = 0; j < terms.length; j++) {
		term = terms[j];
		row = [];

		for (var i = 0; i <  degree; i++) {
			row.push(Math.pow(term, i));
		}

		vandermondeMatrix.push(row);
	}

	return vandermondeMatrix;
};
