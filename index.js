'use strict';

var hasOptionalChains = (function () {
	try {
		// eslint-disable-next-line no-new-func
		return Function('c', 'return typeof (null?.foo) === "undefined" && c?.a === 1 && typeof c?.b === "undefined";')({ a: 1 }) === true;
	} catch (e) {
		return false;
	}
}());

module.exports = function hasOptionalChaining() {
	return hasOptionalChains;
};
