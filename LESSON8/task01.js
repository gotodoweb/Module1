'use strict';

const arr = [];


const genArr = (num) => {
	while(num > arr.length) {
		let el = Math.floor(Math.random() * 100 + 1);
		arr.push(el);		
	}
	return arr;
};


console.log(genArr(10));
console.log(arr.length);

