// pipe algorithm sample
'use strict'
import * as R from 'ramda'

const mapFilter = R.pipe(
	R.map(x => x+1),
	R.filter(x => x > 2)
)

const res = mapFilter([1,2,3])  //= [3,4]
console.info(res)

const res2 = R.pipe(
	R.map(x => x+1),
	R.filter(x => x > 2),
)([1,2,3])

console.info(res2)