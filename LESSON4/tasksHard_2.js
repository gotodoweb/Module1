'use strict';

function nal() {
	let nalog = 0;
	const come = +prompt('Укажите сумму Вашего дохода?', '15000');
	console.log(typeof come);
	if (come > 50000) {		
		nalog = (come - 50000) * 0.3;
	}

	if ((15000 < come) && (come <= 50000)) {
		nalog = (come - 15000) * 0.2;
	}

	if (come <= 15000) {
		nalog = come * 0.13;
	}

	console.log('Сумма налога : ', nalog);
}

nal();















