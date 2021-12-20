'use strict';

(() => {
	const FIGURES_ENG = ['rock', 'scissors', 'paper'];
	const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
	const WORDS_ENG = ['you', 'computer', 'you win', 'you lost', 'draw', 'wrong value', 'More?'];
	const WORDS_RUS = ['вы', 'компьютер', 'вы выиграли', 'вы проиграли', 'ничья', 'неверное значение', 'Ещё?'];

	const getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};


	const game = (language) => {
		const result = {
			player: 0,
			computer: 0,
			plcount(count) {
				this.player += count;
			},
			comcount(count) {
				this.computer += count;
			},
		};

		const lang = language === 'EN' || language === 'ENG' || language === 'en' || language === 'eng' ? FIGURES_ENG : FIGURES_RUS;
		const words = language === 'EN' || language === 'ENG' || language === 'en' || language === 'eng' ? WORDS_ENG : WORDS_RUS;



		const getFigure = (list, i) => {
			return list[i];
		};




		return function start() {

			let userWord = prompt(`${lang}`, lang[1]);


			if (userWord === null) {
				let exit = confirm('точно ли он хочет выйти?');
				if (exit === true) {
					alert(`${words[0]} : ${result.player} \n ${words[1]} : ${result.computer} `);
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
				alert(`${words[5]} ${lang}`);
				return start();
			}


			let num = getRandomIntInclusive(0, 2);
			let comWord = lang[num];
			const yesno = () => {
				if (userWord === comWord) {
					console.log(userWord[0], comWord[0]);
					return words[4];
				} else if ((userWord === lang[2]) && (comWord === lang[0])) {
					console.log(userWord[0], comWord[0]);
					result.plcount(1);
					return words[2];
				} else if ((userWord === lang[0]) && (comWord === lang[1])) {
					console.log(userWord[0], comWord[0]);
					result.plcount(1);
					return words[2];
				} else if ((userWord === lang[1]) && (comWord === lang[2])) {
					console.log(userWord[0], comWord[0]);
					result.plcount(1);
					return words[2];
				} else {
					console.log(userWord[0], comWord[0]);
					result.comcount(1);
					return words[3];
				}

			};
			const winner = yesno();
			alert(`${words[0]} :${userWord}\n${words[1]} : ${comWord}\n${winner}`);

			let userexit = confirm(words[6]);
			if (userexit === true) {
				return start();
			};
			if (userexit === false) {
				let exit = confirm('точно ли вы хотите выйти?');

				if (exit === true) {
					alert(`Результат:\n Вы : ${result.player} \n Компьютер : ${result.computer} `);
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