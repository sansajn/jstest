// Promise sample.
'use strict'

function produceAfterDelay(result, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(result)
		},	delay)
	})
}

produceAfterDelay({answer: 42}, 1000)
	.then(result => {
		console.info(`result: ${result.answer}`)
	})

console.info('waiting for result ...')
