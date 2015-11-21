'use strict';

var _ = require('underscore');

/**
 *
 * @param {Array} terms
 * @param {number} degree
 * @returns {Array}
 */
module.exports = function (terms, degree) {
	if (!terms || !degree || !(terms instanceof Array) || typeof degree !== 'number') {
		throw new TypeError('You must provide a array of terms as the first argument and a number degree as the second one');
	}

	return _.map(terms, function (xi) {
		return _.map(_.range(degree), function (pow) {
			return Math.pow(xi, pow);
		});
	});

};
