'use strict';

const cart = {
	items : [],
	totalPrice: 0,
	count:  0,
	getTotalPrice() {
		return this.totalPrice;
	},
	add(item, price, count) {
		const good = { item, price, count};
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
		this.totalPrice = itemPrice;
	},
	clear() {
		this.items = [];
		this.totalPrice = 0;
		this.count = 0;
	}, 
	print() {
		const objStr = JSON.stringify(this.items);
		console.log(objStr);
		console.log('Общая стоимомость корзины:', this.totalPrice);

	},
};

cart.add('pepsi', 10, 20);
cart.add('coca', 30, 40);
cart.add('sprite', 40, 60);

// cart.clear();
cart.print();



