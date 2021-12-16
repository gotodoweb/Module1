'use strict';

const rectangle = {
	width: 5,
	height: 5,
	get perimetr () {
		return console.log(`${2 * (this.width + this.height)}см`);
	},
	get square () {
		return console.log(`${this.width * this.height}см`);
	},
	set numw(x) {		
		this.width = x;
	},
	set numh(y) {
		this.height = y;
	},
}



rectangle.numw = 10;
rectangle.numh = 20;

console.log(rectangle.perimetr);
console.log(rectangle.square);