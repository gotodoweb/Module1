'use strict';

const addPrefix = (arr, pr) => {
	const newarr = [];
	for (const el of arr) {
		const newel = pr + " " + el;
		newarr.push(newel);
	}
	return newarr;
};
const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr'));
console.log(names);