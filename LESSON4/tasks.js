'use strict';

// Task 2

const rain = Math.round(Math.random());
// console.log(rain);

if (rain === 1) {
	console.log('Пошёл дождь. Возьмите зонт!');	
} else {
	console.log('Дождя нет!');
}

// Task 3

function testResult() {
	const mathtest = +prompt('Введите кол-во баллов по математике', '85');
	const rustest = +prompt('Введите кол-во баллов по русскому языку', '75');
	const infotest = +prompt('Введите кол-во баллов по информатике', '95');

	if ((mathtest + rustest + infotest ) >= 265) {
		console.log("Поздравляю, вы поступили на бюджет!");
	} else {
		console.log('Вы не поступили на бюджет!');
	}
};
testResult();

// Task 4 

function bank() {
	const sum = +prompt('Сколько денег вы хочет снять', '100');
	const all = (sum % 100);
	console.log(all);

	if(all === 0) {
		console.log('Банкомат сможет выдать сумму');
	} else if (sum > 100) {
		console.log('Банкомат не сможет выдать сумму');
	} else {
		console.log('Минимальная сумма для сняти 100р');
	}
};
bank();












