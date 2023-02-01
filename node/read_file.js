// reading file in Node.js sample
const fs = require('fs/promises')
const fss = require('fs')


// sync way
try {
	const content = fss.readFileSync('test.txt')
	console.log(content)
} catch (err) {
	console.error(err)
}

// async way
async function readAsync() {
	try {
		const content = await fs.readFile('test.txt')
		console.log(content)
	} catch (err) {
		console.error(err)
	}
}

readAsync()
