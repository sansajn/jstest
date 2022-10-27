// catchin an exception sample
'use strict'

try {
	JSON.parse('{age:42}');  // throw SyntaxError
} catch (e) {
	console.log(e);
}

console.log('done!');

