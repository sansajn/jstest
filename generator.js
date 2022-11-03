// Generator sample.
function* rangeGenerator(start, end) {
	for (let i = start; i < end; i++)
		yield i
}

for (const i of rangeGenerator(10,15))
	console.log(i)  // 10 11 12 13 14
