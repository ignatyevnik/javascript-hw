'use strict';

// Задание №1
let a = 4, b = 5, c = 3;
console.log('Высота a = ' + a);
console.log('Длина b = ' + b);
console.log('Ширина c = ' + c);
console.log('Площадь равна ' + a * b * c);
console.log();

// Задание №2
let n = 76;
let secondDigit = n % 10;
let firstDigit = (n - secondDigit) / 10;
let sum = secondDigit + firstDigit;
console.log('Значение n равно ' + n + '.' + ' Сумма чисел равна ' + sum);
console.log();
// сделать тоже самое для 3х значных чисел

// Задание №3
let numFirst = 23, numSecond = 90;
/*
в num 1 сохранить значения обоих переменных
*/
numFirst = numFirst + numSecond;
numSecond = numFirst - numSecond;
numFirst = numFirst - numSecond;
console.log(numFirst);
console.log(numSecond);


