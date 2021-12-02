'use strict';

const calculate = (sum, lot, promo) => {
	let resultsum = sum;
	let discount = 0;
	let discount1 = resultsum * 0.03;
	let discount2 = (resultsum - 30000) * 0.15;
	let discount3 = resultsum * 0.1;

	// console.log(discount1);
	// console.log(discount2);
	// console.log(discount3);

	if (lot > 10) {
		discount += discount1;
		console.log('1', discount);
	}

	if (sum > 30000) {
		discount += discount2;
		console.log('2', discount);
	}

	if (promo === 'METHED') {
		discount += discount3;
		console.log('3', discount);
	}

	if ((promo === 'G3H2Z1') && ((resultsum - discount) > 2000) ) {
		discount += 500;
		console.log('4', discount);
	};

	return resultsum - discount;
}

console.log('стоимость корзины товаров после применения всех акций и скидок :', calculate(40000, 10, 'METHED'));





