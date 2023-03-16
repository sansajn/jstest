'use strict'
import * as R from 'ramda'

const res = R.equals(1, 1)  //= true
console.info(res)

// with filter
const res2 = R.filter(x => R.equals(x, 1), [1,2,3,1,1])  //= [1,1,1]
console.info(res2)
