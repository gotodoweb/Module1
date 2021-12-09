'use strict';

const TwoNumber = [];

const getTwoNumber = () => {
	do {
		let numUser;
		while (Number.isFinite(numUser) === false) {
			alert('Введи число! Загадывает число от 1 до 100');
			numUser = +prompt('Введите число от 1 до 100');

			if (numUser === 0) {
				return console.log('Game over!');
			}

		}
		TwoNumber.push(numUser);
	} while (TwoNumber.length !== 2);

	// console.log(TwoNumber);

	TwoNumber.sort(function (a, b) {
		return a - b;
	});
	// console.log(TwoNumber);

	// console.log(TwoNumber.length);
	// console.log(Array.isArray(TwoNumber));

	return TwoNumber;
};


getTwoNumber();


console.log(TwoNumber[0]);
console.log(TwoNumber[1]);


const wishNumber = () => Math.floor(Math.random() * (TwoNumber[1] - TwoNumber[0] + 1)) + TwoNumber[0];

const wish = wishNumber();
console.log('Загаданное число', wish);






let tries = [];

const game = () => {
	let numer;
	let range = Math.abs(TwoNumber[0] - TwoNumber[1]);
	let qualitytries = Math.round(range * 0.3);

	// console.log('range',range);
	// console.log('qualitytries', qualitytries);
	if ((TwoNumber[0] === 50) && (TwoNumber[1] === 100)) {
		qualitytries = 15;
	}
	while ((Number.isFinite(numer) === false) || (qualitytries > tries.length)) {
		console.log('qualitytries', qualitytries);
		alert(`Введи число из диапазона от ${TwoNumber[0]} до ${TwoNumber[1]}. Нажмите Cancel| 0 -завершить игру`);
		numer = +prompt(`Введите число от ${TwoNumber[0]} до ${TwoNumber[1]} `);
		if (tries.includes(numer)) {
			alert('Это число вы уже вводили" попытка не засчитывается');
			console.log('Это число вы уже вводили попытка не засчитывается');
		}

		console.log('tries', tries);
		tries.push(numer);
		console.log('tries', tries);
		console.log('-------------Top--------------');


		if (!(TwoNumber[0] <= numer) || !(numer <= TwoNumber[1])) {
			
			// tries.push(numer);
			console.log('tries', tries);
			let xyz = tries.findIndex((item) => item === numer);
			console.log('xyz', xyz);

			tries.splice(xyz, 1);
			console.log('tries', tries);
			console.log('tries.length', tries.length);	
		}

		tries = Array.from(new Set(tries));
		console.log('tries', tries);


		if (numer === 0) {
			return console.log('Game over!');
		}

		if (numer === wish) {
			return alert('ВЫ УГАДАЛИ! игра прекращается');
		}


	};

	alert('попытки закончились игра прекращается');
	return console.log('попытки закончились игра прекращается');

}

game();
