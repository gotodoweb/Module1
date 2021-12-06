'use strict';


const newarr = [];


const ArrGen = (num, n, m) => {	
	let max;
	let min;
	if (n > m) {
		[max, min] = [n, m];
	} else {
		[max, min] = [m, n];
	}

	while (num > newarr.length) {
		let el = Math.floor(Math.random() * (max - min + 1)) + min;
		newarr.push(el);
	}
	return newarr;
};


console.log(ArrGen(10, 1, 20));
console.log(newarr.length);


/*

const change = (a, b) => {
	let minimal;
	let maksimal;
	if (a > b) {
		[minimal, maksimal] = [b, a];
	} else {
		[minimal, maksimal] = [a, b];
	}

	console.log(minimal, maksimal);
}

console.log(change(20, 160));

*/