// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):
"use strict"
var usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'John', 'password' : 'MyNameIsJohn' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

function getFieldValues(arrName, fieldName){
	var n = arrName.length;
	var res = [];
	for (var i = 0; i < n; i++){
		res.push(arrName[i].user);
	}
	return res.sort();
}

// 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

function isEven(x) {
	return (x % 2 == 0) ? x : false;
}
console.log(numbers.filter(isEven)); // --> [2, 8, 34]

// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках

var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];

function findSimilarWords(firstStr, secondStr){
	var arrFist = firstStr.split(' ');
	var res = [];
	arrFist.forEach(function(e){
		var a = secondStr.match(e);
		if(a != null){
			res.push(a[0]);
		}
	});
	return res;
}

// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:

var IpAddress = '10.256.98.2';
var subnetMask = 28;
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

function generateBroadcastAndNetworsAddresses(ip, mask){
	
}

// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];

console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, undefined, true];

function makeItClean(arr){
	var conArr = arr[0].concat(arr[1], arr[2]);
	conArr.sort();
	var res = [conArr[0]]; 
    for (var i = 1; i < conArr.length; i++) {
        if (conArr[i] != conArr[i-1]) {
            res.push(conArr[i]);
        }
    }
    return res;
}