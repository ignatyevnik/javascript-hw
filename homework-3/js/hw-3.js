'use strict';
// Циклы
// Вывести в консоль первые 20 элементов последовательности 2 4 8 16 32 64 128...N
console.log("Задание №1");
let seq = 2;
let counter = 1;
do {
    console.log(seq);
    seq = seq * 2;
    counter++;
} while (counter <= 20)
console.log();
/*let sequence = 2;
 for (let i=1; i<=20; i++){
     console.log(sequence);
     sequence*=2;

 }*/

// Вывести в консоль все неотрицательные элементы последовательности 90 85 80 75 70 65 60...N
console.log("Задание №2");
for (let j = 90; j >= 0;) {
    console.log(j);
    j = j - 5;
}
console.log();
// Дано: количество моющего средства и количество тарелок.
// Для мытья одной тарелки необходимо 0.5 моющего средства.
// Когда средство / тарелки закончатся вывести в консоль количество оставшихся тарелок / средства.
// На каждой итерации цикла (после мытья тарелки) выводить в консоль количество моющего средства.
console.log("Задание №3");
let soap = 25.3, plate = 100;
while (soap >= 0.5 && plate > 0) {
    soap = soap - 0.5;
    plate--;
    console.log(`Моющего средства осталось ${soap}`);
}
console.log(`Тарелок осталось ${plate}. Моющего средства осталось ${soap}`);
console.log();
// Массивы
//
// Создать массив из 10 элементов и заполить его рандомными значениями.
// Вывести в консоль элемент массива, индекс выбрать используя рандом.
// Вывести среднее арифметическое значение.
console.log("Задание №4");
let randomArray = [];
for (let i = 0; i <= 9; i++) {
    randomArray[i] = Math.floor(Math.random() * 10);
}
console.log(randomArray);
console.log(randomArray[Math.floor(Math.random() * 10)]);
let sumRandomArray = 0;
for (let i = 0; i < randomArray.length; i++) {
    sumRandomArray += randomArray[i];
}
let averageRandomArray = sumRandomArray / randomArray.length;
console.log(averageRandomArray);
console.log();
// Создать массив целых чисел произвольного размера.
// Найти в данном массиве такие два элемента, чтобы их сумма была равна 7.
// Найденные элементы и их индексы вывести в консоль.
// Для решения достаточно найти одну пару.
console.log("Задание №5");
let userArray = [];
let isFound = false;
for (let i = 0; i <= 16; i++) {
    userArray[i] = Math.floor(Math.random() * 10);
}
console.log(userArray);
for (let i = 0; i < userArray.length; i++) {
    for (let j = i + 1; j < userArray.length; j++) {
        if (userArray[i] + userArray[j] === 7) {
            console.log(`Сумма элемента с индексом ${i} и с индексом ${j} равна 7.`);
            isFound = true;
            break;
        }
    }
    if (isFound) break;
}
console.log();
// Дан массив:
//      [
//         [23, 56, 78, 12, -900],
//         [0, 0, 67, -3, 621],
//         [89, 67, 12],
//         [23, 56, 78, 12, -900, 89, 33, 21]
//      ]
//  Увеличить значение каждого элемента массива на 10.
//  Найти сумму значений элементов массива.
console.log("Задание №6");
let twoDimArray = [
        [23, 56, 78, 12, -900],
        [0, 0, 67, -3, 621],
        [89, 67, 12],
        [23, 56, 78, 12, -900, 89, 33, 21]
     ];
let sumTwoDimArray = 0;
for (let i = 0; i < twoDimArray.length; i++) {
    for (let j = 0; j < twoDimArray[i].length; j++) {
        twoDimArray[i][j] += 10;
        sumTwoDimArray += twoDimArray[i][j];
    }
}
console.log(twoDimArray);
console.log(sumTwoDimArray);