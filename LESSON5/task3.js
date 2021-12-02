'use strict';

const reverse = (str) => {
	let res = str.split('').reverse().join('');	
	return res
}

console.log(reverse('Привет мир'));
