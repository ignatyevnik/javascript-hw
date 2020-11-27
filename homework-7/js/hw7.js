'use strict';
// Задание №1
// Написать функцию getGoodsByPrice.
// Функция принимает на вход: from, to и obj:
//      * from, to - числа, если переданы не числа, необходимо прервать работу функции;
//      * obj - объект.
//   Функция возвращает новый объект с товарами из obj, стоимость которых находится в диапазоне (from;  to]

// Объект для задач #1 и #2
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function getGoodsByPrice(from, to, obj) {
    if (typeof (from) !== 'number' || typeof (to) !== 'number') return "Ошибка ввода цены!";
    let newGoods = {};
    for (let key in obj) {
        // console.log(obj[key].price);
        // console.log(from, to, obj[key].price, from >= obj[key].price, to <= obj[key].price);
        // console.log(to <= obj[key].price)
        if (from <= obj[key].price && to >= obj[key].price) {
            newGoods[key] = obj[key];
        }
    }
    return newGoods;
}

console.log(getGoodsByPrice(900, 3000, goods));


// Задание №2
// Написать функцию getByTitle.
//  Функция принимает на вход: title, countToCart и obj:
//      * title - название товара, который хочет купить пользователь;
//      * countToCart - кодичество товара, который хочет приобрести пользователь;
//      * obj - объект.
//
//  Необходимо найти товар с названием (title):
//      если количество позволяет, то уменьшить количество товара в объекте obj на countToCart,
//      вывести в консоль информацию, что данного товара достаточно на складе,
//      если не позволяет, то вывести информацию об этом в консоль.
//  Если товар с названием (title) не был найден вывести сообщение об этом в консоль
//
//  Функция ничего не возвращает.

function getByTitle(title, countToCart, obj) {
    let isFound = false;
    let isEnough = false;

    for (let keyTitle in obj) {
        if (title === obj[keyTitle].title) {
            isFound = true;
            if (obj[keyTitle].count >= countToCart) {
                isEnough = true;
                obj[keyTitle].count = obj[keyTitle].count - countToCart;
                console.log(obj[keyTitle].count);
                return "Данного товара достаточно на складе.";
            }
        }
    }

    if (!isFound) {
        return "Данный товар не был найден.";
    } else if (!isEnough) {
        return "Данного товара недостаточно на складе.";
    }
}

console.log(getByTitle("Пианино", 25, goods));
console.log();


// Задание №3
// Написать функцию getBooks.
//  Функция принимает на вход: автора и массив:
//  Функция возвращает новый массив с книгами , в который войдут все книги указанного автора,
//  если такого автора нет, вернуть пустой массив.

// Объект для задач #3 и #4
let books = [
    {author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
    {author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
    {author: 'Лермонтов', title: 'Тамань', pageCount: 190},
    {author: 'Гончаров', title: 'Обломов', pageCount: 610},
    {author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
    {author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
    {author: 'Лермонтов', title: 'Бородино', pageCount: 2},
];

function getBooks(author, booksArr) {
    let booksNewArr = [];
    for (let keyAuthor of booksArr) {
        if (author === keyAuthor.author) {
            // booksNewArr = keyAuthor.title;
            booksNewArr.push(keyAuthor.title);
        }
    }
    return booksNewArr;
}

console.log(getBooks("Пушкин", books));

// Задание №3
// Написать функцию sortByParam. Задача на метод 'sort' массива.
// Функция принимает на вход имя свойства и массив объектов.
// Функция сортирует объекты в массиве в порядке возрастания по указанному свойству.
console.log();

function sortByParam(propName, objArr) {

        objArr.sort(function (a, b) {
            if (a[propName] > b[propName]) {
                return 1;
            }
            if (a[propName] < b[propName]) {
                return -1;
            }
        })
    return objArr;
}

console.log(sortByParam("pageCount", books));