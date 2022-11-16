// regular expression parsing time with match() sample

const time = '13:08:15'
const timeRegex = /(\d\d):(\d\d):(\d\d)/
const found = time.match(timeRegex)

console.assert(found.length === 4)
console.log(found)
console.log(`hours: ${found[1]} minutes: ${found[2]} seconds: ${found[3]}`)
