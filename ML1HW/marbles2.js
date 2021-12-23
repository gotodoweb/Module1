'use strict';


(() => {

	const game = () => {
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


		let move = confirm('нажмите OK если player ходит \n нажмите Отмена если bot  ходит ');
		console.log(move);

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

			let playerguess = confirm('нажмите OK если думаете что bot загадал четное число \n нажмите Отмена если думаете что bot загадал нечетное число');
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


	window.marbls = game;

})();

const start = window.marbls;
start();


