// addIndex function sample
'use strict'
import * as R from 'ramda'

const d = [10, 20, 30]
console.log(
	R.addIndex(R.map)((val, idx) => {
		return `${idx} -> ${val}`
	}, d)
)  //= ['0 -> 10', '1 -> 20', '2 -> 30']
