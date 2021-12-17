'use strict';

const rectangle = {
	width: 5,
	height: 5,
	get perimetr() {
		return (`${2 * (this.width + this.height)}см`);
	},
	get square() {
		return (`${this.width * this.height}см`);
	},
	set numw(x) {
		this.width = x;
	},
	set numh(y) {
		this.height = y;
	},
}



rectangle.numw = 20;
rectangle.numh = 20;

console.log(rectangle.perimetr);
console.log(rectangle.square);
