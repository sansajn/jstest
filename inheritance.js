// Inheritance sample.
'use strict'

class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

	getSalary() {return this.salary;}
	raiseSalary(percent) {this.salary *= 1 + percent/100;}
};

class Manager extends Employee {
	constructor(name, salary, bonus) {
		super(name, salary);
		this.bonus = bonus;
	}

	getSalary() {return super.getSalary() + this.bonus;}
};

let boss = new Manager('Mary Lee', 180000, 20000);

console.log(boss instanceof Employee);  // true
console.log(boss.getSalary());  // 200'000

boss.raiseSalary(10);
console.log(boss.getSalary());  // 218'000
