// Class syntax to create complex object sample with getter.
'use strict'

class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

	raiseSalary(percent) {
		this.salary *= 1 + percent/100;
	}

	getSalary() {
		return this.salary;
	}

	// getter sample
	get describe() {
		return `${harry.name} with ${harry.getSalary()}€ salary`; 
	}
};

let harry = new Employee('Harry Smith', 1000);
harry.raiseSalary(30);
console.log(`${harry.name} earns ${harry.getSalary()}€`);  // Harry Smith earns 1300€
console.log(harry.describe);