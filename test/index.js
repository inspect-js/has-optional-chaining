'use strict';

var test = require('tape');

var hasOptionalChaining = require('../');

test('export', function (t) {
	t.equal(typeof hasOptionalChaining, 'function', 'export is a function');
	t.end();
});

test('optional chaining support', function (t) {
	var yes = hasOptionalChaining();
	t.equal(typeof yes, 'boolean', 'export returns a boolean');

	var doOptionalChain = function () { Function('return null?.x'); }; // eslint-disable-line no-new-func

	t.test('no optional chaining support', { skip: yes }, function (st) {
		st.equal(yes, false, 'returns false');
		st['throws'](doOptionalChain, 'throws on optional chaining syntax');
		st.end();
	});

	t.test('has optional chaining support', { skip: !yes }, function (st) {
		st.equal(yes, true, 'returns true');
		st.doesNotThrow(doOptionalChain, 'does not throw on optional chaining syntax');
		st.end();
	});
});
