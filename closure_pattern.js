// Closure (or factory class) pattern sample for creating complex objects.
'use strict'

const createAccount = (balance) => {
	balance += 10;  // bonus for opening the account
	return {
		deposit: ammount => {
			balance += ammount;
		},
		withdraw: amount => {
			if (balance >= amount)
				balance -= amount;
		},
		getBalance: () => balance
	};
};

let herryAccount = createAccount(1000);
console.log(herryAccount.getBalance());  // 1010
