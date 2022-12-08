// Closure (or factory class) pattern with local variables sample for creating complex objects.
'use strict'

function create() {
	let data = []

	function init(arr) {
		data = arr
	}

	function length() {
		return data.length
	}

	const api = {
		init,
		length
	}

	return api
}

const foo = create()
console.info(foo.length())  //=0

foo.init([1,2,3])
console.info(foo.length())  //=3
