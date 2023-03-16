'use strict'
import * as R from 'ramda'

const result = R.map(R.identity, [1,2,3])  //= [1,2,3]
console.info(result)
