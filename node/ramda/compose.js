'use strict'
import * as R from 'ramda'

const mapFilter = R.compose(
	R.filter(x => x > 2),
	R.map(x => x+1)
)

const res = mapFilter([1,2,3])  //= [3,4]
console.info(res)
