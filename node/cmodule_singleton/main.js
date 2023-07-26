'uses strict'
const sharedStateModule = require('./module.js')
const service = require('./service.js')

console.info(`from main answer=${sharedStateModule.value}`)
service()

console.info('changing to 10')
sharedStateModule.value = 10
service()


