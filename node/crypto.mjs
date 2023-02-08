// calcutate file hash (sha512, md5) sample with Crypto (standard) library
'use strict'

import fs from 'fs'
import {createHash} from 'crypto'

const inputFile = 'crypto.mjs'
const fileContent = fs.readFileSync(inputFile)

const sha512sum = createHash('sha512')
sha512sum.update(fileContent)
console.info(`${inputFile} -> ${sha512sum.digest('hex')}`)

const md5sum = createHash('md5')
md5sum.update(fileContent)
console.info(`${inputFile} -> ${md5sum.digest('hex')}`)

console.info('done')
