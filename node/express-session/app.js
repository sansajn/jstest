// basic express-session sample with view conuter (taken from readme)
import express from 'express'
import session from 'express-session'

const app = express()
const port = 3000

app.use(session({
	secret: 'keyboard cat',
	name: 'session-test',
	resave: false,
	saveUninitialized: true,
	//cookie: { secure: true }  // this needs to be disabled for localhost
}))

// Access the session as req.session
app.get('/', function (req, res, next) {
	if (req.session.views) {
		req.session.views += 1

		// create HTML response based on session data
		res.setHeader('Content-Type', 'text/html')
		res.write(`<p>views: ${req.session.views}</p>`)
		res.write(`<p>expires in: ${req.session.cookie.maxAge/1000}s</p>`)
		res.end()
	}
	else {
		req.session.views = 1
		res.end('welcome to the session demo. refresh!')
	}
	
	console.log(req.session)
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
