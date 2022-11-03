// Iterable implementation for custom type.
class Range {
	constructor(start, end) {
		this.start = start
		this.end = end
	}

	[Symbol.iterator]() {return new RangeIterator(this.start, this.end)}
}

class RangeIterator {
	constructor(current, last) {
		this.current = current
		this.last = last
	}

	next() {
		if (this.current < this.last) {
			const result = {value: this.current}
			this.current++
			return result
		} else {
			return {done: true}
		}
	}
}

for (const element of new Range(10, 20))
	console.log(element)
