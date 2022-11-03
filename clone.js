// Object clone function implementation.

const clone = (obj, cloneRegistry = new Map()) => {
	if (typeof obj !== 'object' || Object.isFrozen(obj))
		return obj

	if (cloneRegistry.has(obj))
		return cloneRegistry.get(obj)

	const props = Object.getOwnPropertyDescriptors(obj)
	let result = Array.isArray(obj) ? Array.from(obj)
		: Object.create(Object.getPrototypeOf(obj), props)
	cloneRegistry.set(obj, result)
	for (const prop in props)
		result[prop] = clone(obj[prop], cloneRegistry)
	return result
}

let james = {name: 'James Bond'}
let bond = clone(james)
james.name = 'James Mond'
console.log(bond)
