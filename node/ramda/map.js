'use strict'
import * as R from 'ramda'

const res = R.map(x => x+1, [1,2,3])  //= [2,3,4]
console.info(res)
