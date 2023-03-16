'use strict'
import * as R from 'ramda'

const res = R.uniq([1,2,2,3,4,4])  //= [1,2,3,4]
console.info(res)
