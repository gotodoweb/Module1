'use strict';

const mintwo = () => {	

	let a = +prompt('Введите 1-ое число');
	while(Number.isFinite(a) === false)  {
		alert('Введите 1-ое число');
		a = +prompt('Введите 1-ое число');
	};
    
	let b = +prompt('Введите 2-ое число');
	while(Number.isFinite(b) === false) {
		alert('Введите 2-ое число');
		b = +prompt('Введите 2-ое число');
	}

	return sqrt((a + a * ((a - b) / (a + b)) / 2) + (a + a * ((a - b) / (a + b)) / 2));
}

console.log(mintwo());










