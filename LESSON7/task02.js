'use strict';

const getAverageValue = (arr) => {
	let sum = 0;
	let num = 0;
	for (const el of arr) {			
		sum = sum + el;
		num++;
	}

	return Math.floor((sum) / num);
}

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const allСashbox2 = [650, 1250];
console.log(getAverageValue(allСashbox));
console.log(getAverageValue(allСashbox2));