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



		while ((begin.player > 0) || (begin.bot > 0)) {

			let randombot = () => {
				return Math.floor(Math.random() * 10 + 1);
			}

			let numbot = randombot();
			console.log('numbot', numbot, typeof numbot);

			if (begin.player <= 0) {
				alert(`Вы проиграли - Game over! \n вы: ${begin.player} \n bot: ${begin.bot} `);
				return console.log('Game over!');
			}

			if (begin.bot <= 0) {
				alert(`Вы выиграли - Game over! \n вы: ${begin.player} \n bot: ${begin.bot} `);
				return console.log('Game over!');
			}

			const getNum = (str) => {

				let n = +prompt(str);
				if (!Number.isNaN(parseFloat(n)) && isFinite(n)) {
					if (n === 0) {
						let exit = confirm('точно хотите завершить игру?');
						if (exit === true) {
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

	}

	window.marbls = game;
	
})();

const start = window.marbls;
start();


