// server side
const express = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')

const port = 3000

const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
	const index = 'index.html'
	res.sendFile(path.join(__dirname, index))
	console.info(`<< /${index}`)
})


const io = new Server(server)  // socket.io instance

io.on('connection', (socket) => {
	console.info('a user connected')
	socket.on('disconnect', () => {
		console.info('user disconnected')
	})
})

server.listen(port, () => {
	console.log(`listening on *:${port}`)
})


// generate some data for client
let n = 1
setInterval(() => {
	const msg = `hello from server ${n}`
	io.emit('test', msg)  // broadcast to all connected clients
	n += 1
	console.info(`info << ${msg}`)
}, 1000)
