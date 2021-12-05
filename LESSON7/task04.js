'use strict';

const getAveragePriceGoods = (arr) => {
	const middleprice = [];
	for (const el in arr) {
		const newel = Math.floor(arr[el][1] / arr[el][0]);
		middleprice.push(newel);
	}
	return middleprice;

}

const allСashbox = [
	[12, 4500],
	[7, 3210],
	[4, 650],
	[3, 1250],
	[9, 7830],
	[1, 990],
	[6, 13900],
	[1, 370]
];

console.log(getAveragePriceGoods(allСashbox));