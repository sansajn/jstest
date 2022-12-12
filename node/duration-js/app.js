// basic Duration sample
import {Duration} from '@icholy/duration'

// creation
const d = new Duration('6w5d4h3m2s1ms')

console.assert(d.weeks() === 6)
console.assert(d.days() === 47)
console.assert(d.hours() === 1132)
console.assert(d.minutes() === 67923)
console.assert(d.seconds() === 4075382)
console.assert(d.milliseconds() === 4075382001)

// basic operations 
const d1 = new Duration('6d')
const d2 = new Duration(d1 + Duration.day)
console.assert(d2.days() === 7)

/*
const d3 = d1 + Duration.day  // this is not working, + operator do not produce Duration
console.assert(d3.days() === 7)  // d3.days is not a function
*/

// working with Dates
const d4 = Duration.parse('5h')
const now = new Date()
const later = new Date(now + d4)
console.info(`now: ${now}`)
console.info(`later: ${later}`)
console.assert(now.getTime() < later.getTime(), 'later should be greater than now')

