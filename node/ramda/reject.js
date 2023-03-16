'use strict'
import * as R from 'ramda'

const res = R.reject(x => x<3, [1,5,3,4,2,6])  //= [5,3,4,6]
console.info(res)
