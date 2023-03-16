'use strict'
import * as R from 'ramda'

const res = R.filter(x => x<3, [1,5,3,4,2,6])  //= [1,2]
console.info(res)
