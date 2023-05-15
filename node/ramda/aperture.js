// aperture sample
import * as R from 'ramda'


console.log(JSON.stringify(
	R.aperture(2, [1,2,3,4])  //= [[1,2], [2,3], [3,4]]
))

console.log(JSON.stringify(
	R.aperture(3, [1,2,3,4])  //= [[1,2,3], [2,3,4]]
))

// we can calculate length of path (like GPS poinst) this way
const path = [1,2, 2,5, 5,7]  // length=1+3+2=6

const length = R.pipe(
	R.aperture(2), 
	R.map(coord => coord[1] - coord[0]), 
	R.sum)

console.log(
	length(path)  //= 6
)
