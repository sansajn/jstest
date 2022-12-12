// Working with moment.js sample.
'use strict'

const moment = require('moment')

const now = new moment()
console.log(`now: ${now}`)

const d = moment.duration(1, 'h')
const later = new moment(now + d)
console.log(`later: ${later}`)

let d2 = moment.duration(1, 'h')
d2.add(1, 'h')
console.assert(d2.asHours() === 2)

d2.subtract(1, 'h')
console.assert(d2.asHours() === 1)

const d3 = new moment.duration(d2 + moment.duration(1, 'h'))
console.assert(d3.asHours() === 2)
