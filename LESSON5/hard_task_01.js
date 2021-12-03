'use strict';
//В математике наибольший общий делитель (gcd) двух или более целых чисел, когда хотя бы одно из
 // них не равно нулю, является наибольшим положительным целым числом, которое делит числа без остатка.



const egcd = (a, b) => {

	if ((Number.isFinite(a) === false) || (Number.isFinite(b) === false)) {
		return 'Введите число';
	}

	if (a === 0)
		return b;
	if (b === 0)
		return a;

	a = Math.abs(a);
	b = Math.abs(b);

    let c = a;
	let d = b;
	while (d != 0) {
		if (c > d) {
			c = c - d;
		} else {
			d = d - c;
		}
	}
	return c;
}

console.log(egcd(41, 0));
console.log(egcd(336, 360));
console.log(egcd(0,100));
console.log(egcd(-30, 3));
console.log(egcd('str', 3));
console.log(egcd([],{}));
console.log(egcd(39, 17));