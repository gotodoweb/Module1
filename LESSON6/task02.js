'use strict';

const isPrime = (n) => {
	if (n < 2) {
		return 'Число должно быть больше 1';
	} else if (n === 2) {
		return true;
	}
	const limit = Math.sqrt(n);
	for (let i = 2; i <= limit; i++) {
		if (n % i === 0) {
			return false;
		}

	}
	return true;
}

console.log(151, isPrime(151));
console.log(911, isPrime(911));
console.log(1987, isPrime(1987));
console.log(0, isPrime(0));
console.log(23, isPrime(23));
console.log(24, isPrime(24));
console.log(15000, isPrime(15000));
