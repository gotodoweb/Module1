'use strict'


{
	const item = prompt('Наименование товара', 'Приставка денди');

	const count = +prompt('Количество товара', 3);
	if (Number.isFinite(count) === false ) {
		console.log('Вы ввели некорректные данные');
		alert("Вы ввели некорректные данные");
	} else {

		const category = prompt('Категория товара', 'Приставки');
		const price = +prompt('Цена товара', 2200);


		// console.log(typeof count + " количество товара");
		// console.log(Number.isFinite(count));

		// console.log(typeof price + " цена") ;
		// console.log(Number.isFinite(count));

		console.log(`На складе ${count} единицы товара "${item}" на сумму ${count * price} деревянных`)
	}

}












