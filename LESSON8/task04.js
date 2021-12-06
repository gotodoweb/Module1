'use strict';



const newArr = [];

function isLeapYear(n, m) {
	let year;
	let max;
	if (n > m) {
		[year, max] = [m, n];
	} else {
		[year, max] = [n, m];
	}

	while (year <= max) {
		if (
			(year % 4 === 0 && year % 100 === 0 && year % 400 === 0) ||
			(year % 4 === 0 && !(year % 100 === 0))
		) {
			newArr.push(year);
			year++;
		} else {
			year++;
		}
	}
	return newArr;

}

console.log(isLeapYear(1950, 1960));

