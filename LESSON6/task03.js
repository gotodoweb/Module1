'use strict';

const reverseString = (str) => {
	let reverse = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverse += str[i];
	}
	return reverse;
}

console.log(reverseString('Цикл'));
console.log(reverseString('String'));
console.log(reverseString('шалаш'));
