// reading file in Node.js sample
const fs = require('fs')

try {
	const content = fs.readFileSync('test.txt')
	console.log(content)
} catch (err) {
	console.error(err)
}
