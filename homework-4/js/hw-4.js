'use strict';
// Задание №1
/*
* Найти количество вхождений одной строки в другую.
* Например, строка "дом" встречается в строке
* "дом домик домой одомашненный" 4 раза*/
console.log("Задание №1");
let text = "дом домик домой одомашненный";
let home = "дом";
let counter = 0;
let isFound = false;
// indexOf возвращает индекс первого вхождения в массив искомого значения, если значение не найдено - возвращает -1
while (!isFound) {
    if (text.indexOf(home) === -1) {
        isFound = true;
        break;
    }
    let cutter = text.indexOf(home) + home.length;
    text = text.slice(cutter);
    counter++;
}

console.log(`В данном предложении ${counter} вхождений слова дом`);

/*let randStr = 'в сидел сиднем дед';
let searchStr = 'сид';

let indexCut = randStr.indexOf(searchStr) + searchStr.length;
randStr = randStr.slice(indexCut);
console.log('randStr', randStr);*/

console.log();
// Задание №2
/*
* Проверить строку на палиндром.
* Палиндром — это число, буквосочетание, слово или текст,
* которые одинаково читаются по буквам или по словам как слева направо, так и справа налево.
* Например, 202 - палиндром / fafaf - палиндром / а роза упала на лапу Азора - палиндром*/
console.log("Задание №2");
let palindrom = "fa f af";
// проверка на равенство (приравниваем все элементы строки к строчным, чтобы не было отличий)
if (palindrom === palindrom.toLowerCase().split('').reverse().join('')) {
    console.log("Это палиндром.");
} else {
    console.log("Это не палиндром.");
}

console.log();
// Задание №3
/*
* Заменить все буквы в слове на строчные, а первую букву на заглавную
* Например, дано hello, получаем Hello / дано HeLLO, получаем Hello*/
console.log("Задание №3");

let word = "SoMeStrING";
let newWord = word[0].toUpperCase() + word.toLowerCase().slice(1);
console.log(newWord);

console.log();
// Задание №4
/*
* Найдите самое длинное слово в предложении, при условии, что в предложении все слова разной длины
* Например, в "в предложении все слова разной длины" самое длинное слово "предложении"*/
console.log("Задание №4");
let textLong = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, molestias."
let textLongArr = textLong.split(' ');
let longestWordNum = 0;
let longestWord;
for (let i = 0; i < textLongArr.length; i++) {
    if (textLongArr[i].length > longestWordNum) {
        longestWordNum = textLongArr[i].length;
        longestWord = textLongArr[i];
    }
}
console.log(longestWord);

