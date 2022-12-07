/* fs.stat() sample 
see [fs.stat()](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fsstatpath-options-callback) */
'use strict'

const fs = require('fs')

const fname = __filename

fs.stat(fname, (err, stats) => {
	if (err) {
		console.error(err)
		return
	}

	console.info(`'${fname}' size is ${stats.size} bytes`)
})
