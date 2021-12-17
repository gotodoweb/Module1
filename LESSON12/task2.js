'use strict';

const getArr = (arr) => {
	const newarr = [...arr];
	let number = Math.floor(Math.random() * (11));
	newarr.push(number);


	let sum = 0;
	for (let i = 0; i < newarr.length; i++) {
		sum = sum + newarr[i];
	};

	if (sum < 50) {
		sum = 0;
		getArr(newarr);
	}

	if (sum >= 50) {
		console.log('sum', sum);
		console.log(newarr);
		return newarr;
	}

};

getArr([1, 20]);
