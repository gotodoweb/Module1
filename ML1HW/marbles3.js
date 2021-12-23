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
		alert('Начнем с игры КНБ - победитель будет ходить первым в Marble')
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
					// console.log(userWord[0], comWord[0]);
					return 'ничья';
				} else if ((userWord === lang[2]) && (comWord === lang[0])) {
					// console.log(userWord[0], comWord[0]);
					result.plcount(1);
					return 'Вы выиграли';
				} else if ((userWord === lang[0]) && (comWord === lang[1])) {
					// console.log(userWord[0], comWord[0]);
					result.plcount(1);
					return 'Вы выиграли';
				} else if ((userWord === lang[1]) && (comWord === lang[2])) {
					// console.log(userWord[0], comWord[0]);
					result.plcount(1);
					return 'Вы выиграли';
				} else {
					// console.log(userWord[0], comWord[0]);
					result.comcount(1);
					return 'Вы проиграли';
				}

			};

			const winner = yesno();
			alert(`Вы: ${userWord} \n Компьютер: ${comWord}  \n ${winner}`);


			if (yesno() === 'ничья') {
				return start();
			} 
			
			const win = ((result.player > result.computer) && !(yesno() === 'ничья')) ? 'вы' : 'бот';
			console.log(win);
			// -----------------------------
			const begin = {
				player: 5,
				bot: 5,
				plplayer(count) {
					this.player += count;
				},
				plbot(count) {
					this.bot += count;
				},
			}


			const botrandom = (nu) => {
				if (nu % 2 === 0) {
					return 'even';
				} else {
					return 'odd';
				}
			}

			function guessnum(max) {
				return Math.floor(Math.random() * max) + 1;
			}

			let move = '';

			if (win === 'вы') {
				move = true;
			}

			if (win === 'бот') {
				move = false;
			}

			// let move = confirm('нажмите OK если player ходит \n нажмите Отмена если bot  ходит ');
			console.log('move', move);

			const doplayer = () => {
				alert('Ходит player');
				let randombot = () => {
					return Math.floor(Math.random() * 10 + 1);
				}

				let numbot = randombot();
				console.log('numbot', numbot, typeof numbot);


				const getNum = (str) => {

					let n = +prompt(str);
					if (!Number.isNaN(parseFloat(n)) && isFinite(n)) {
						if (n === 0) {
							console.log('n', n);
							let exit = confirm('точно хотите завершить игру?');
							console.log('exit', exit);
							if (exit === true) {
								// throw '';
								return alert('Game over!');

							}
							if (exit === false) { return getNum(`Введите число от 1 до ${begin.player}`) };
						};
						if ((n < 1) || (n > begin.player)) {
							alert(`Диапазон! Число должно быть в диапазон от 1 до ${begin.player}`)
							return getNum(str);
						}
						return n;
					};

					alert(`Строка! Введите число от 1 до ${begin.player}`);
					return getNum(`Введите число от 1 до ${begin.player}`);
				};

				let number = getNum(`Введите число от 1 до ${begin.player}`);
				console.log('number', number, typeof number);

				if (botrandom(number) === botrandom(numbot)) {
					begin.plbot(number);
					begin.plplayer(-number);
					console.log(`вы: ${begin.player} bot: ${begin.bot}`);
				} else {
					begin.plplayer(number);
					begin.plbot(-number);
					console.log(`вы: ${begin.player} bot: ${begin.bot}`);
				}
			}

			const dobot = () => {
				alert('ходит бот!');
				let botguessnumber = guessnum(begin.bot);
				console.log('botguessnumber', botguessnumber, typeof botguessnumber);

				console.log(`bot загадал число из диапазона от 1 до ${begin.bot}: - это число ${botguessnumber}`);

				let playerguess = confirm('нажмите OK если думаете что bot загадал четное число \n нажмите Cansel если думаете что bot загадал нечетное число');
				console.log(playerguess);

				const guessplayer = (nu) => {
					if (playerguess === true) {
						return 'even';
					} else {
						return 'odd';
					}
				}

				console.log(`вы предположили что бот загадал ${guessplayer(playerguess)} число`);


				if (guessplayer(playerguess) === botrandom(botguessnumber)) {
					begin.plplayer(botguessnumber);
					begin.plbot(-botguessnumber);
					console.log(`вы: ${begin.player} bot: ${begin.bot}`);
				} else {
					begin.plbot(botguessnumber);
					begin.plplayer(-botguessnumber);
					console.log(`вы: ${begin.player} bot: ${begin.bot}`);
				}
			};


			while ((begin.player > 0) || (begin.bot > 0)) {
				if (begin.player <= 0) {
					alert(`Вы проиграли - Game over! \n вы: ${begin.player} \n bot: ${begin.bot} `);
					return console.log('Game over!');
				}

				if (begin.bot <= 0) {
					alert(`Вы выиграли - Game over! \n вы: ${begin.player} \n bot: ${begin.bot} `);
					return console.log('Game over!');
				}

				if (move === true) {
					doplayer();
				}

				if (move === false) {
					dobot();
				}

				move = !move;

			};
		}



	}


	window.marbls = game;

})();



