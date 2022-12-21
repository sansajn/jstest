// assign fnuction sample
'use strict'
const _ = require('lodash')

const a = {name: 'John'}
const b = {...a, 
	age: 42,
	gender: 'male'
}
console.info(b)  //= {name: 'John', age: 42, gender: 'male'}

const c = _.assign(a, {age: 42, gender: 'male'})  //= {name: 'John', age: 42, gender: 'male'}
console.info(c)
