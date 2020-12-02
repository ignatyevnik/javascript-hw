'use strict';

// Задание №1
/* На методы массивов

 Дан массив:
 let numsArr = [
     [3, 5, -1, 6, 0],
     [56, -9, 111, 6],
     [11, 86, -12],
 ];

 1. Увеличить каждый элемент массива на 10
 2. Создать массив, в который войдут положительные элементы numsArr */

let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];

// map
let positiveNums = [];

for (let plusTen = 0; plusTen < numsArr.length; plusTen++) {
    positiveNums[plusTen] = numsArr[plusTen].map(num => num + 10);
}
console.log(`${positiveNums}`);

// Оставить только положительные числа, filter(num => num > 0)
for (let numsFilter = 0; numsFilter < numsArr.length; numsFilter++) {
    positiveNums[numsFilter] = numsArr[numsFilter].filter(num => num > 0);
}

console.log(`${positiveNums}`);





// Задание №2
/*
Написать функцию проверки на спам.

Функция принимает на вход текст и ...спам - слова (переменное количество аргументов).
Определить по 5ти бальной шкале, как часто в тексте встречается спам.
Результат вернуть из функции.
*/
// function spamCounter(text, ...spam) {
//     let counter = 0;
//     for ()
//     let str = text.toLowerCase().split(' ');
//     console.log(str);
//
// }

// let someText = "Lorem бесплатно dolor sit xxx, consectetur adipisicing free. Eos magni заработок perspiciatis quo баксы! Repellat?";

// let output = spamCounter(someText,'Бесплатно', 'xxx', 'free', 'заработок', 'баксы', 'деньги', 'срочно', 'выигрыш', 'приз', 'денежный', 'приз', 'скидки', 'скидка');
// console.log(output);


// Задание №3
/* Написать функцию, которая принимает на вход массив функций и
число обрабатывает число каждой функцией и возвращает true,
если число прошло проверку всеми функциями и false, если нет

Функции для проверки:
 let more18 = возвращает true, если переданный аргумент больше 18
 let less30 = возвращает true, если переданный аргумент меньше 30
 let arr = [more18, less30];

Число для проверки:
 let age = Math.floor(Math.random() * 100); */