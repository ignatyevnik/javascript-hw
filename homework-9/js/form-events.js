'use strict'; // form-events.js

// элементы формы можно получить через значение аттрибута name
// если элемент будет уникальным,
// если их будет несколько, то получим коллекцию

// получение формы // через свойство .forms получение всех форм
// document.forms.значение аттрибута name формы

// доступ к элементам формы input fieldset legend textarea buttons
let form = document.forms.lesson;
console.log(form);

// доступ к элементам формы по значению аттрибута name
// form - конкретная форма, полученная ранее
// elements - свойство формы, хранит все элементы формы
// login - значение аттрибута name, конкретного элемента формы
let loginInput = form.elements.login;
console.log(loginInput);

// значение аттрибута value поля ввода логина
// любой элемент формы и его значение value
console.log(loginInput.value);

// установим значение аттрибута value
loginInput.value = "qwe"; // не пользуемся как подсказкой, для этого есть placeholder

let pwdInput = form.elements.pwd;
console.log(pwdInput);
pwdInput.value = "password";


// name === color; элементов с name = color в html несколько
// поэтому мы получим коллекцию элементов по name


let colorRadios = form.elements.color;
console.log(colorRadios);

for (let radio of colorRadios) {
    radio.addEventListener("focus", changeColor);
    // сфокусировался на элементе формы
}

function changeColor() {
    // this - текущая кнопка
    form.elements.checkbox_fieldset.style.background = this.value;
    // получение элемента по name,полученному элементу добавляем стили в зависимости от выбранной кнопки
}

// name = lang[] / programming-lang
// не можем написать ниже через [], используем обращение к элементу
// ["name"] -> ["lang[]"]
let langArr = form.elements["lang[]"];
// у чекбоксов и радиокнопок есть аттрибут checked,
// получить значение данного аттрибута можно через свойство checked

// если кнопка отмечена то, значение аттрибута checked будет true - наоборот, false
for (let lang of langArr) {
    if (lang.checked) console.log(lang.value);
}

let checkEnable = document.querySelector(".check");
checkEnable.addEventListener("click", enableField);

function enableField() {
    let textArea = document.getElementById("textField");
    textArea.toggleAttribute("disabled");
}

enableField();


// выпадающий список
// name = countries

// у option есть свойство отмеченный (выбранный) - select -
// получить значение данного аттрибута можно через свойство select
let countries = form.elements.countries;
console.log(countries);

for (let elem of countries) {
    if (elem.selected) console.log(elem.value);
}

// отправка формы
// при нажатии на кнопку submit, должно быть событие

form.addEventListener("submit", takeForm);
// у некоторых событий есть обработчики и они будут в приоритете
// у submit есть обработчик по умолчанию - отправка данных на сервер

// всегда передается функция с информацией о событии в качестве аргемента
function takeForm(event) {
    event.preventDefault(); // отменяет отправку данных на сервер (или событие по умолчанию)
    console.log("takeForm");
    console.log("логин: " + this.elements.login.value);
    console.log("пароль: " + this.elements.pwd.value);

    // отправка данных без перезагрузки
    // данные надо сначала собрать, а потом отправить
    // 1. валидация
    // 2. собрать данные для отправки в специальный объект
    // 3. отправка

    let formData = new FormData(this); // FormData - специальный объект для сбора
    // данных формы и отправки на сервер
    // собирает данные формы от элементов, у которых есть аттрибут name
    // позволяет добавлять данные на стороне js
    // хранит данные в паре ключ: значение, где ключ - значение name,
    // значение - value
    // login: qwe -> отправка на сервер

    // добавление данных в объект
    formData.append("newKey", "newValue");

    // получение данных из объекта
    console.log(formData.get("login"));
    console.log(formData.get("newKey"));
    // если value не массив, то get, если массив, то getAll
    console.log(formData.getAll("lang[]"));


    // отправка данных с перезагрузкой
    // 1. валидация
    // 2. отправка
    // this.submit();
}


