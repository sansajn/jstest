'use strict'
import * as R from 'ramda'

const res = R.partition(x => x>2, [1,2,3,4])  //= [[3,4], [1,2]]
console.info(res[0], res[1])
