// @ts-check
'use strict'
import * as R from 'ramda'

console.info(
	R.isEmpty('')  //= true
)

console.info(
	R.isEmpty([])  //= true
)

console.info(
	R.isEmpty({})  //= true
)

console.info(
	R.isEmpty(undefined)  //= false
)

