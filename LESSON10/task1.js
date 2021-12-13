'use strict';

const cart = {
	items: [],
	get totalPrice() {
		return this.calculateItemPrice();
	},
	count: 0,
	// getTotalPrice() {
	// 	return this.totalPrice;
	// },
	add(item, price, count) {
		const good = { item, price, count };
		this.items.push(good);

		this.calculateItemPrice();
		this.increaseCount(count);
	},
	increaseCount(count) {
		this.count += count;
	},
	calculateItemPrice() {
		let itemPrice = 0;
		this.items.map((item) => {
			// console.log(`Добавлено в коризну:товар ${item.item}	общая сумма ${item.price * item.count}`);
			itemPrice += item.price * item.count;

		});
	
		console.log(itemPrice);
		return itemPrice;
	},
	clear() {
		this.items = [];
		this.totalPrice = 0;
		this.count = 0;
	},
	print() {
		const objStr = JSON.stringify(this.items);
		console.log(objStr);
		console.log('Общая стоимомость корзины:', cart.totalPrice);

	},
};

cart.add('pepsi', 10, 20);
cart.add('coca', 30, 40);
cart.add('sprite', 40, 60);
cart.add('baikal', 50, 10);

// cart.totalPrice = 10;
// cart.clear();
cart.print();