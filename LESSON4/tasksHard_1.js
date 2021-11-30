'use strict';

function nalog() {
	let sumnalog = 0;
	const income = +prompt('Укажите сумму Вашего дохода?', '15000');
	console.log(typeof income);
	if (income > 50000) {
		sumnalog = income * 0.3;
	};

	if ((15000 <= income) && (income <= 50000)) {
		sumnalog = income * 0.2;
	};

	if (income < 15000) {
		sumnalog = income * 0.13;
	};

	console.log('Сумма налога: ', sumnalog);
};

nalog();




















