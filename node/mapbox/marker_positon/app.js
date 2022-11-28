// server side code
'use strict'

const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res) => {
	console.info(`${req.path} << index.html`)
	res.sendFile(path.join(__dirname, '/index.html'))
})

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
