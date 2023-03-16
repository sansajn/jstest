'use strict'
import * as R from 'ramda'

const res = R.prop('email', {email:'x'})  //= x
console.info(res)
