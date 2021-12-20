'use strict';

(() => {
	const FIGURES_ENG = ['rock', 'scissors', 'paper'];
	const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

	const getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};


	const game = () => {
		const result = {
			player: 0,
			computer: 0,
			plcount(count) {
				this.player += count;
			},
			comcount(count) {
				this.computer += count;
			},
		}

		const lang = FIGURES_RUS;
		return function start() {
			
			let userWord = prompt(`${lang}`, lang[1]);
			

			if (userWord === null) {
				let exit = confirm('точно ли он хочет выйти?');	
				if (exit === true) {
					alert(`Вы: ${result.player} \n Компьютер: ${result.computer} `);
					return alert('Game over!');
				}
				if (exit === false) { return start() };
			};


			if (lang[0].includes(userWord)) {
				userWord = lang[0];
			} else if (lang[1].includes(userWord)) {
				userWord = lang[1];
			} else if (lang[2].includes(userWord)) {
				userWord = lang[2];
			} else {
				alert(`Вы ввели неверное значение ! Нужно одно из ${lang}`);
				return start();
			}


			let num = getRandomIntInclusive(0, 2);
			let comWord = lang[num];
			const yesno = () => {
				if (userWord === comWord) {
					console.log(userWord[0], comWord[0]);
					return 'ничья';
				} else if ((userWord === lang[2]) && (comWord === lang[0])) {
					console.log(userWord[0], comWord[0]);
					result.plcount(1);
					return 'Вы выиграли';
				} else if ((userWord === lang[0]) && (comWord === lang[1])) {
					console.log(userWord[0], comWord[0]);
					result.plcount(1);
					return 'Вы выиграли';
				} else if ((userWord === lang[1]) && (comWord === lang[2])) {
					console.log(userWord[0], comWord[0]);
					result.plcount(1);
					return 'Вы выиграли';
				} else {
					console.log(userWord[0], comWord[0]);
					result.comcount(1);
					return 'Вы проирали';
				}

			};
			const winner = yesno();
			alert(`Вы: ${userWord} \n Компьютер: ${comWord}  \n ${winner}`);

			let userexit = confirm('Ещё?');	
			if (userexit === true) {
				return start();
			};
			if (userexit === false) {
				let exit = confirm('точно ли вы хотите выйти?');
				
				if (exit === true) {
					alert(`Вы: ${result.player} \n Компьютер: ${result.computer} `);
					return console.log('Game over!');
				}
				if (exit === false) {
					return start();
				};
			}
		}
	};

	window.RPS = game;

})();