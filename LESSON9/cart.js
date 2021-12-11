'use strict';

const obj = {
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
		let currunetCount = 0;
		this.items.forEach(item => {
			currunetCount += item.count;
		});
		this.count = currunetCount;
	},
	calculateItemPrice() {
		let ItemPrice = 0;
		this.items.map((item) => {
			// console.log(`Добавлено в коризну:товар ${item.item}	общая сумма ${item.price * item.count}`);
			ItemPrice += item.price * item.count;
			
		});
		this.totalPrice = ItemPrice;
	},
	clear() {
		this.items = [];
		this.totalPrice = 0;
		this.count = 0;
	}, 
	print() {
		const objStr = JSON.stringify(obj);
		console.log(objStr);
		// const cartObj = JSON.parse(objStr);
		// console.log(cartObj);
	},
};

obj.add('pepsi', 10, 20);
obj.add('coca', 30, 40);
obj.add('sprite', 40, 60);

obj.clear();
console.log(obj.print());
console.log('totalPrice', obj.totalPrice);




