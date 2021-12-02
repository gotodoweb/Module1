'use strict';

const getString = (str) => {
	if (!str) return "пустая строка";

	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(getString("привет Мир"));
console.log(getString("привет ВАСЯ"));
console.log(getString("Hello ВАСЯ"));

