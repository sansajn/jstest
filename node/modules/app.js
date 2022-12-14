'use strict'

const express = require('express')
import * as foo from './public/foo.mjs'

const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

console.info(`${foo.greetings()}`)
