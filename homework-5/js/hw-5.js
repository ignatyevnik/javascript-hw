'use strict';

// Задание №1
/* Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,
   будет возвращать слово "товар" в нужно форме
   ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).
* */
console.log("Задание №1");

function waresCount(count) {
    let wares = "товар";
    let ending1 = "а";
    let ending2 = "ов";

    if ((count % 100 >= 10 && count % 100 <= 20) ||
        count % 10 === 0 || (count % 10 >= 5 && count % 10 <= 9)) {
        return `${count} ` + wares + ending2;
    } else if (count % 10 === 1) {
        return `${count} ` + wares;
    } else {
        return `${count} ` + wares + ending1;
    }
}

console.log(waresCount(0));
console.log();

// Задание №2
/* Напишите функцию range, принимающую три аргумента:
  два обязательных: начало и конец диапазона,
  третий аргумент - необязательный (если он не передан, то равен единице) – шаг для построения массива.
* Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное.
  Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]
*/
console.log("Задание №1");
function range(rangeStart, rangeEnd, rangeStep = 1) {
    let nums=[];
    let steps = (rangeEnd - rangeStart) / rangeStep;
    for (let i = 0; i <= steps; i++) {
        nums.push(rangeStart + rangeStep * i);
    }
    return nums;
}
console.log(range(-5,15, 3));
console.log();
// Задание №3
/* Дано целое положительное число N.
   Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено).
* */

function sumNum(num, sum = 0) {
    let dev = num % 10;
    sum += dev;
    num = Math.floor(num / 10);
    if (num === 0) {
        return sum;
    } else {
       return sumNum(num, sum);
    }
}

let result = sumNum(76);

console.log(result);