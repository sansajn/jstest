// Getter sample.
'use strict'

class Person {
	constructor(last, first) {
		this.last = last;
		this.first = first;
	}
	get fullName() {return `${this.last}, ${this.first}`;}
};

let harry = new Person('Smith', 'Harry');
const harrysName = harry.fullName;  // 'Smith, Harry'
console.log(harrysName);
