'use strict';

const TwoNumber = [];

const getTwoNumber = () => {
	do {
		let numUser;
		while (Number.isFinite(numUser) === false) {
			alert('Введи число!');
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

	if ((TwoNumber[0] === 50) && (TwoNumber[1] === 100)) {
		qualitytries = 15;
	}

	alert(`Введи число из диапазона от ${TwoNumber[0]} до ${TwoNumber[1]}
и если хотите завершить игру нажмите Cansel`);

	numer = +prompt(`Введите число от ${TwoNumber[0]} до ${TwoNumber[1]} `, 10);
	console.log(numer);
	
	
	if (numer === 0) {
		return console.log('Game over!');
	}

	if (numer === wish) {
		return alert('ВЫ УГАДАЛИ!');
	}

	if ((Number.isFinite(numer) === false) ) {
		alert(`Введи число! `);		
		return game();		
	}

	if (!(TwoNumber[0] <= numer) || !(numer <= TwoNumber[1])) {
		alert(`Диапзон !  Введи число из диапазона от ${TwoNumber[0]} до ${TwoNumber[1]}`)
		return game();
	};	

	tries.push(numer);	
	
	tries = Array.from(new Set(tries));	
			
		
	if (tries.length >= qualitytries ) {
		alert('попытки закончились игра прекращается');
		return console.log('попытки закончились игра прекращается');
	}
	game();

};
	

game();
