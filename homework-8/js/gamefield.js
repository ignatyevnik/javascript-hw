'use strict';

// Задание №3 (Дополнительная)
/*     Дан объект {
         cat: "Кот",
         book: "Книга",
         car: "Машина"
     }

     Написать функцию generateField(n) по генерации игрового поля размером n x n. +
     Значение n не может быть меньше 3. +
     Для 3х ячеек поля (для выбора конкретной ячейки использовать random)
     добавить атрибут prise. Значения атрибута prise устанавливаются из массива.
     Для 1й ячейки значение атрибута prise="cat",
     для 2й ячейки значение атрибута prise="book",
     для 3й ячейки значение атрибута prise="car"
     */

let prise = {
    cat: "Кот",
    book: "Книга",
    car: "Машина"
};

function generateField(n, where) {

    if (n < 3) {
        console.log("Игровое поле не может быть меньше 3.");
        return;
    }

    let gameFieldDiv = document.createElement("div");
    gameFieldDiv.style.cssText = ` 
    width: 40vw;
    display: flex;
    flex-wrap: wrap;
`;

    let rndArr = [prise.cat, prise.book, prise.car];
    for (let i = 3; i < (n * n); i++) {
        rndArr[i] = false;
    }

    function shuffle(someArr) {
        let j, temp;
        for(let i = someArr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = someArr[j];
            someArr[j] = someArr[i];
            someArr[i] = temp;
        }
        return rndArr;
    }

    let randomPrise = shuffle(rndArr);

    let size = 40 / n;
    for (let i = 0; i < n * n; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.style.border = '1px solid black';
        innerDiv.style.width = innerDiv.style.height = size + 'vw';
        if (randomPrise[i] !== false) {
            innerDiv.innerText = randomPrise[i];
        }
        gameFieldDiv.append(innerDiv);
    }


    document.getElementById("game-field").append(gameFieldDiv);
    where.append(gameFieldDiv);
}

generateField(3);