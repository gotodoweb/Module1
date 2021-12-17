'use strict';

const cart = {
	items: [],
	get totalPrice() {
		return this.calculateItemPrice();
	},
	count: 0,
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
			itemPrice += item.price * item.count;
		});

		console.log(itemPrice);
		return itemPrice = itemPrice - (itemPrice * this.discount);
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

	set setDiscount(val) {
		if (val === 'METHED') {
			this.discount = 0.15;
		}
		if (val === 'NEWYEAR') {
			this.discount = 0.21;
		}
	}
};

cart.add('pepsi', 10, 20);
cart.add('coca', 30, 40);
cart.add('sprite', 40, 60);
cart.add('baikal', 50, 10);



// cart.setDiscount = 'METHED';
cart.setDiscount = 'NEWYEAR';
cart.print();