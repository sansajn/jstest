// regular expression parsing time with match() sample
'use strict'

// matching without groups
const time = '13:08:15'
const timeRegex = /^(\d\d):(\d\d):(\d\d)$/
const found = time.match(timeRegex)

console.assert(found.length === 4, '4 elements expected')
console.info(found)  //= ['13:08:15', '13', '08', '15', index: 0, input: '13:08:15', groups: undefined]
console.info(`hours: ${found[1]} minutes: ${found[2]} seconds: ${found[3]}`)

const wrongTime = '13:8:15'
const notFound = wrongTime.match(timeRegex)
console.assert(notFound === null, 'null expected')

// matching with groups
const timeRegexGroups = /^(?<hours>\d\d):(?<minutes>\d\d):(?<seconds>\d\d)$/
const foundGroups = time.match(timeRegexGroups)
console.assert(foundGroups.length === 4, '4 elements expected')
console.assert('hours' in foundGroups.groups, 'hours property expected')
console.assert('minutes' in foundGroups.groups, 'minutes property expected')
console.assert('seconds' in foundGroups.groups, 'seconds property expected')

const parsedTime = foundGroups.groups
console.info(`hours: ${parsedTime.hours} minutes: ${parsedTime.minutes} seconds: ${parsedTime.seconds}`)
