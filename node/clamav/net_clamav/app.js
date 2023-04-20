// TCP communication with ClamAV sample with net library

// @ts-check
'use strict'

import net from 'net'

/** Initiate sample direcotry scan. 
@param {function} reportProcessor line oriented report processor funciton e.g. (data) => {} */
function clamAvMultiscan(reportProcessor) {
	const clamAvClient = new net.Socket()

	clamAvClient.connect(3310, 'localhost', () => {
		console.info('clamav connected')
		
		const cmd = 'MULTISCAN /scandir'
		clamAvClient.write(cmd)  // send command
		
		console.info(`<< ${cmd}`)
	})
	
	clamAvClient.on('data', reportProcessor)
	
	clamAvClient.on('close', () => {
		console.info('clamav disconnected')
	})
}

clamAvMultiscan(line => {
	console.info(`>> ${line.toString().trimEnd()}`)
})
