'use strict'

{
	const item = 'smart проектор philips';
	const count = 15;
	const category = 'видео техника';
	const price = 1200;

	console.log(item);
	console.log(`общая сумма товара: ${count * price}`);
}

{
	const item = 'sumsung Galaxy S21';
	const count =  10;
	const category = 'mobile phone';
	const price = 64990;

	console.log(item);
	console.log(`общая сумма товара: ${count * price}`);
}

{
	const item = prompt('Наименование товара', 'Приставка денди');

	const count = +prompt('Количество товара', 3);
	console.log(typeof count + " количество товара");
	console.log(Number.isFinite(count));


	const category = prompt('Категория товара', 'Приставки' );

	const price = +prompt('Цена товара', 2200);	
	console.log(typeof price + " цена") ;
	console.log(Number.isFinite(count));

	console.log(`На складе ${count} единицы товара "${item}" на сумму ${count * price} деревянных`)

}





