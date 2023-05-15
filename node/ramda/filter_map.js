// fileter|map sample with pipe
'use strict'
import * as R from 'ramda'

const res = R.pipe(
	R.filter(x => x<3),
	R.map(x => x*x)
)([1,5,3,4,2,6])  //= [1,2] -> [1,4]

console.info(res)
