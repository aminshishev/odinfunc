function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (a) {
	let res = 0;
	for (i = 0; i < a.length; i++) {
		res += a[i];
	}
	return res;
}

function multiply (a) {
	let res = 1;
	if (a.length == 0) {
		res = 0;
	} else if (a.length == 1) {
		res = a[0];
	} else {
		for (i = 0; i < a.length; i++) {
			res *= a[i];
	}}
	return res;
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	let res = 1;
	if (a == 0) {
		res = 1;
	} else {
		for (i = 1; i <= a; i++) {
			res *= i;
		}
	}
	return res;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}