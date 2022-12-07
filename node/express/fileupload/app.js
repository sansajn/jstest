// server side part
'use strict'

const path = require('path')
const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

const PORT = 8000

// default options
app.use(fileUpload())

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/ping', (req, res) => {
	res.send('pong')
})

app.post('/upload', (req, res) => {
	console.info(`${req.url}:`)

	if (!req.files || Object.keys(req.files).length === 0) {
		console.warn('No files in request.')
		return res.status(400).send('No files were uploaded.')
	}

	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
	const sampleFile = req.files.sampleFile
	const uploadPath = path.join(__dirname, sampleFile.name)
	
	sampleFile.mv(uploadPath, err => {  // place the file somewhere on your server
		if (err)
			return res.status(500).send(err)

		res.send('File uploaded!')
	})

	console.info(`  >> ${uploadPath}`)
})

app.listen(PORT, () => {
	console.info(`Express server listening on port ${PORT}`)  // eslint-disable-line
})
