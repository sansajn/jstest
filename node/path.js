// path module test
'use strict'

const path = require('path')

const p = '/home/me/test'

console.log(p)
console.log(`basename: ${path.basename(p)}`)
console.log(`dirname: ${path.dirname(p)}`)
