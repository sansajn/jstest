// ClamAV file scan sample.
import clamd from 'clamdjs'
import * as R from 'ramda'

const listOfFilesToScan = [
	'/home/hlavatovic/temp/ktest.kt',
	'/home/hlavatovic/temp/ExploitKit.Sava.zip',
	'/home/hlavatovic/temp/music/Joris Voorn live at Afterparty Bassick Ecuador B2B Rodriguez Jr. [Gszwrns5RPc].webm'
]

const scanner = clamd.createScanner('0.0.0.0', 3310)

R.forEach(async (item) => {
	try {
		const result = await scanner.scanFile(item)
		if (R.endsWith('FOUND\0', result))
			console.info(`${item}: infected`)
		else if (R.endsWith('OK\0', result))
			console.info(`${item}: OK`)
	} catch (e) {
		console.info(`${item}: not scanned, ${e}`)
	}

}, listOfFilesToScan)
