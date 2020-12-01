'use strict';
// Задание №1
/*
* Написать функцию генерации карточек с информацией о животных.
* Выглядеть должно, как на изображении в телеграмм */

function getCats() {
    return [
        {
            "name": "Люся",
            "age": "1 год",
            "color": "трехцветная",
            "additional_info": {"vaccinations": true, "passport": true}
        },
        {
            "name": "Том",
            "age": "3 месяца",
            "color": "белый",
            "additional_info": {"vaccinations": false, "passport": false}
        },
        {
            "name": "Макс",
            "age": 2,
            "color": "серый",
            "additional_info": {"vaccinations": false, "passport": true}
        },
        {
            "name": "Василий",
            "age": 3,
            "color": "черный",
            "additional_info": {"vaccinations": true, "passport": true}
        }
    ];
}

function generateCard(realDiv) {
    let catList = getCats();

    for (let cat of catList) {

        let infoListUl = document.createElement("ul");
        infoListUl.classList.add("ul");

        let additionalLi = document.createElement("li");
        additionalLi.innerText = "Дополнительная информация:";

        let colorLi = document.createElement("li");
        colorLi.innerText = "Цвет: " + cat.color;

        let passportLi = document.createElement("li");
        if (cat.additional_info.passport === true) {
            passportLi.innerText = "Документы: " + "есть";
        } else {
            passportLi.innerText = "Документы: " + "нет";
        }

        let vaccineLi = document.createElement("li");
        if (cat.additional_info.vaccinations === true) {
            vaccineLi.innerText = "Прививки: " + "есть";
        } else {
            vaccineLi.innerText = "Прививки: " + "нет";
        }

        infoListUl.append(additionalLi, colorLi, passportLi, vaccineLi);

        let catPic = document.createElement("img");
        catPic.setAttribute("src", "https://i.picsum.photos/id/249/536/354.jpg?hmac=-KIW4qA7yddnnD9i-E4Eo9K5EVNuXkj8dLot4MgCs2k");
        catPic.classList.add("img");

        let picBlock = document.createElement("div");
        picBlock.append(catPic);
        picBlock.classList.add("col-6");

        let listBlock = document.createElement("div");
        listBlock.append(infoListUl);
        listBlock.classList.add("col-6");

        let mainInfoBlock = document.createElement("div");
        mainInfoBlock.append(picBlock, listBlock);
        mainInfoBlock.classList.add("flex-row");

        let ageName = document.createElement("h3");
        ageName.innerText = cat.name + " | " + cat.age;

        let mainBlock = document.createElement("div");
        mainBlock.append(ageName, mainInfoBlock);
        mainBlock.classList.add("cat-card");

        realDiv.append(mainBlock);
    }
}

generateCard(document.getElementById("for-all"));


// Задание №2
// Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
// Функция не должна быть привязаны к конкретным значениям.
// Заголовки ячеек - названия свойств.
// Например, для articles заголавками будут: id, title, text, author;
// для goods заголавками будут: title, price, count.


let articles = [
    {
        id: 1,
        title: "Java",
        text: "Как написать Hello World",
        author: "Василий"
    },
    {
        id: 2,
        title: "Безопасность",
        text: "Как найти дыры в системе",
        author: "Владимир"
    },
    {
        id: 3,
        title: "JavaScript",
        text: "Функции и их применение",
        author: "Ксения"
    },
    {
        id: 4,
        title: "Верстка",
        text: "Увлекательный HTML",
        author: "Анастасия"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];


function generateTable(tableData, realDiv) {

    let mainTable = document.createElement("table");

    let header = document.createElement("thead");
    let headerTr = document.createElement("tr");

    for (let tableHeader in tableData[0]) {
        let th = document.createElement("th");
        th.innerText = tableHeader;
        headerTr.append(th);
    }

    header.append(headerTr);
    mainTable.append(header);

    let countTr = 1;
    for (let tableBody of tableData) {
        let tr = mainTable.insertRow(countTr);
        countTr++;
        let countTd = 0;
        for (let tableCell in tableBody) {
            let td = tr.insertCell(countTd);
            td.innerText = tableBody[tableCell];
            // console.log(tableBody.tableCell);
            countTd++;
        }
    }


    realDiv.append(mainTable);
}

generateTable(goods, document.getElementById("data-table"));
generateTable(articles, document.getElementById("data-table"));


// Задание №3 (Дополнительная)
/*     Дан объект {
         cat: "Кот",
         book: "Книга",
         car: "Машина"
     }

     Написать функцию generateField(n) по генерации игрового поля размером n x n.
     Значение n не может быть меньше 3.
     Для 3х ячеек поля (для выбора конкретной ячейки использовать random)
     добавить атрибут prise. Значения атрибута prise устанавливаются из массива.
     Для 1й ячейки значение атрибута prise="cat",
     для 2й ячейки значение атрибута prise="book",
     для 3й ячейки значение атрибута prise="car"
     */



