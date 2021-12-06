'use strict';

const newarr = [];


const ArrGen = (num, n, m, str) => {
	let max;
	let min;
	if (n > m) {
		[max, min] = [n, m];
	} else {
		[max, min] = [m, n];
	}

	while (num > newarr.length) {
		let el = Math.floor(Math.random() * (max - min + 1)) + min;
		if ((str === 'even') && (el % 2 === 0)) {
			newarr.push(el);
		}
		if ((str === 'odd') && !(el % 2 === 0)) {
			newarr.push(el);
		}
		
	}
	return newarr;	
};


console.log(ArrGen(10, 10, 20, 'even'));
console.log('/************/');


console.log(newarr.length);

