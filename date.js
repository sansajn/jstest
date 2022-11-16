// working with dates

let d1 = new Date()
console.log(`d1: ${d1}`)  // now
console.log(`year: ${d1.getFullYear()} month: ${d1.getMonth()} day: ${d1.getDay()}`)
console.log(d1.toDateString())


// change time part to 13:05
d1.setHours(13, 5, 0)
console.log(`d1: ${d1}`)

// NOTE: pasre() function can't handle time only strings, but we can use regex match() for that
const timeOnlyPart = '15:08:15'
const timeRegex = /(\d\d):(\d\d):(\d\d)/  // [1]:hours, [2]:minutes, [3]:soconds
const found = timeOnlyPart.match(timeRegex)
console.assert(found.length === 4)

d1.setHours(parseInt(found[1]), parseInt(found[2]), parseInt(found[3]))
console.log(`d1: ${d1}`)
