// compare two arrays by _.isEqual() sample
const _ = require('lodash')

const a = [1, 2]
console.info(`${a === [1, 2]}`)  //= false
console.info(`${a == [1,2]}`)  //= false
console.info(`${_.isEqual(a, [1, 2])}`)  //= true
