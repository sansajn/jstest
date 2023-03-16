// get list of unique email domains functional approach sample from [Functional programming with Lodash](https://alexlouden.com/posts/2019-lodash-fp/) article
'use strict'

import * as R from 'ramda'

const users = [
	{ name: 'Alex', email: 'alex@example.com', uid: '124234', userType: 'admin' },
	{ name: 'Beau', email: null, userType: 'user', uid: '152335' },
	{ name: 'Charlie', email: 'charlie@char.ly', userType: 'user', uid: '23221' },
	{ name: 'Daytona', email: 'dave@dave.io', userType: 'user', uid: '234216' },
	{ name: 'Elliott', email: 'elliott@example.com' }
	// ...
]


const getDomain = email => email.split('@')[1]

const mapped = R.map(x => x+1, [1,2,3])
console.info(mapped)

const picked = R.pick(['email'], {email:'a', x:'a', xemail:'b'})
console.info(picked)

const property = R.prop('email', {email:'a'})
console.info(property)

const getEmailDomains = R.compose(
	R.uniq,
	R.map(getDomain),
	R.filter(R.is(String)),
	R.map(R.prop('email'))
)

const uniqueDoamins = getEmailDomains(users)  //= ["example.com", "char.ly", "dave.io"]
console.info(uniqueDoamins)
