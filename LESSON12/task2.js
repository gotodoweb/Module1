'use strict';

const getArr = (arr) => {	
	const newarr = [...arr];
	let number = Math.floor(Math.random() * (11));
	newarr.push(number);

	const localArr = [...newarr];
	let sum = 0;
	for ( let i = 0; i < localArr.length; i++) {
		sum = sum + localArr[i];
	};

	if (sum < 50) {	
		sum = 0;		
		getArr(localArr);
	}
	
	if (sum >= 50) {
		console.log('sum', sum);
		console.log(localArr);
		return localArr;
	}

};

getArr([1, 20]);
