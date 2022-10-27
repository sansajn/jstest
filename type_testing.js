// type testing sample
'use strict'

function isString(s) {
	return typeof s === 'string' || s instanceof String;
}

function isNumber(x) {
	return typeof x === 'number' || x instanceof Number;
}

function isArray(a) {
	return Array.isArray(a);
}

function isFunction(f) {
	return typeof f === 'function';
}


console.log(isString('hello'));  // true
console.log(isNumber(42));  // true
console.log(isArray([42]));  // true
console.log(isFunction(() => 10));  // true
