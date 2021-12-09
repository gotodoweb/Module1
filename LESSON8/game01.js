'use strict';

const wishNumber = () => Math.floor(Math.random() * 100) + 1;
// console.log(wishNumber());
const wish = wishNumber();
console.log('Загаданное число', wish);



const  getUseNumber = () => {	
	alert('Введи число!');
	let numUser = +prompt('Введите число от 1 до 100');
	if (numUser === 0) {
		return console.log('Game over!');
	}
	while ((Number.isFinite(numUser) === false)) {
		alert('Введи число!');
		numUser = +prompt('Введите число от 1 до 100');
		if (numUser === 0) {
			return console.log('Game over!');
		}
	}	
	
	return numUser;
};

// getUseNumber();
// console.log(getUseNumber());



const guessNumber = () => {		
	const fixwish = wish;
	let Usernumber = getUseNumber();
	console.log('Вы ввели число', Usernumber);

	if (Usernumber === fixwish) {
		return console.log('Правильно! Вы выиграли! Game over!');
	}
	if (Usernumber > fixwish) {
		alert('Меньше! Введите новое значение');
		guessNumber();
	}
	if (Usernumber < fixwish) {
		alert('Больше! Введите новое значение');
		guessNumber();
	}	
};

guessNumber();
