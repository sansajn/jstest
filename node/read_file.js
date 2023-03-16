// reading file in Node.js sample
// @ts-check
'use strict'
import fs from 'fs/promises'
import * as fss from 'fs'

// sync way
try {
	const content = fss.readFileSync('test.txt')
	console.log(content.toString())
} catch (err) {
	console.error(err)
}

// async way
async function readAsync() {
	try {
		const content = await fs.readFile('test.txt')
		console.log(content.toString())
	} catch (err) {
		console.error(err)
	}
}

readAsync()

// read json file
const studentContent = fss.readFileSync('student.json')
const studentObj = JSON.parse(studentContent)
console.log(studentObj)


