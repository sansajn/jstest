// writing file sample taken from https://nodejs.dev/en/learn/writing-files-with-nodejs/

const fs = require('fs')

const content = 'Some content!'

// async way
fs.writeFile('test_async.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
})

// sync way
try {
	fs.writeFileSync('test_sync.txt', content)
} catch (err) {
	console.error(err)
}
