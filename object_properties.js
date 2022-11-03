// Object property sample.
'use strict'

let james = {name: 'James Bond'}

// define read only property
Object.defineProperty(james, 'id', {
	value: '007',
	enumerable: true,
	writable: false,
	configurable: true
})

// enumerate name property
const desc = Object.getOwnPropertyDescriptor(james, 'name')
console.log(desc)  // {value: 'James Bond', writable: true, enumerable: true, configurable: true}

// enumerate all properties
console.log(Object.getOwnPropertyDescriptors(james))
