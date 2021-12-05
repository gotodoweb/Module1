'use strict';

const filter = (arr, arrtwo) => {
	const result = [];
	for (const key in arr) {
		if (!arrtwo.includes(arr[key])) {
			result.push(arr[key]);
		}
	}

	return result;
};


const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

console.log(filter(allStudents,failedStudents));



