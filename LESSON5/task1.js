'use strict';

const converter = (eu = 1) => {
	let result = eu;
	let usd = 73;
	
	return result * 1.2 * usd;
}

console.log(converter());
console.log(converter(25));
console.log(converter(100));

