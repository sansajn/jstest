'uses strict'
const sharedStateModule = require('./module.js')

module.exports = () => {
	console.info(`from service answer=${sharedStateModule.value}`)
}
