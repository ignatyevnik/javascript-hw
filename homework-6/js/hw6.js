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

let someText = "Lorem бесплатно dolor sit xxx, consectetur adipisicing free. Eos magni заработок perspiciatis quo баксы! Repellat?";

// функция проверки на спам
function spamChecker(text, ...spam) {
    let spamCount = 0;
    let spamLowerCase = text.toLowerCase().split(" ");
    for(let i = 0; i < spamLowerCase.length; i++) {
        for(let spamWord of spam) {
            if(spamLowerCase[i].includes(spamWord)) {
                spamCount += 1;
            }
        }
    }

    // проверка на частоту спама в тексте
    if(spamCount === 0) {
        console.log("Текст чист, спама не обнаружено.");
    } else if(spamCount === 1) {
        console.log("Присутствует 1 слов0 из списка.");
    } else if(spamCount === 2) {
        console.log("Присутствует 2 слова из списка.");
    } else if(spamCount === 3) {
        console.log("Присутствует 3 слова из списка.");
    } else if(spamCount === 4) {
        console.log("Присутствует 4 слова из списка.");
    } else {
        console.log("Присутствует более 4 слов в списке.")
    }
}

spamChecker(someText,'Бесплатно', 'xxx', 'free', 'заработок', 'баксы', 'деньги', 'срочно', 'выигрыш', 'приз', 'денежный', 'приз', 'скидки', 'скидка');



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

console.log("Задание №3");

let more18 = nums => nums > 18;
let less30 = nums => nums < 30;

let arr = [more18, less30];

function ageCheck(funcArray) {
    let age = Math.floor(Math.random() * 100);
    console.log(age);
    return funcArray[0](age) && funcArray[1](age);
}

let result = ageCheck(arr);
console.log(result);