// ClamAV directory scan sample.
import clamd from 'clamdjs'
import * as R from 'ramda'

const scanner = clamd.createScanner('0.0.0.0', 3310)

const scandir = '/home/hlavatovic/temp'  // TODO: make it configurable

console.info(`scanning '${scandir}'  ...`)

const result = await scanner.scanDirectory(scandir, {})

console.info(`scanned-files: ${result.ScannedFiles}`)

// detailed report

// we can have OK, Infected and error (reply: null, erroMsg != '') files
const [infectedList, restList] = R.partition(
	item => item.reply && R.endsWith('FOUND\0', item.reply), 
	result.Result)

console.info(`infected: ${R.length(infectedList)}`)
if (!R.isEmpty(infectedList))
	console.info(`${R.map(item => `  ${item.file}`, infectedList).join('\n')}`)

const [errorList, okList] = R.partition(
	item => item.reply === null,
	restList)

console.info(`error (not scanned) : ${R.length(errorList)}`)
if (!R.isEmpty(errorList)) {
	const errorFiles = R.pipe(
		R.map(item => `  ${item.file}`),
		R.take(10)
	)(errorList)

	if (errorFiles.length < errorList.length)
		errorFiles.push('  ...')

	console.info(`${errorFiles.join('\n')}`)
}

console.info(`ok: ${R.length(okList)}`)
if (!R.isEmpty(okList)) {
	const okFiles = R.pipe(
		R.map(item => `  ${item.file}`),
		R.take(10)
	)(okList)

	if (okFiles.length < okList.length)
		okFiles.push('  ...')

	console.info(`${okFiles.join('\n')}`)
}
