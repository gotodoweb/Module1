'use strict';

const converter = (eu = 1) => {
	let result = eu;
	return result * 87.6;
}

console.log(converter());
console.log(converter(25));
console.log(converter(100));

