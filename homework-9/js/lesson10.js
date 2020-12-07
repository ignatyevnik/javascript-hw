'use strict';
let titleElems = document.querySelectorAll(".article p:first-child");
// все первые элементы p с классом article
// [p, p, p] коллекция элементов p
// мы не можем сделать так [p, p, p].style.add

// перебор коллекции html елементов
for (let elem of titleElems) {
    // на каждой итерации в переменную elem копируется элемент html p
    // на первой итерации <p>Короткий текст 1</p>
    // на второй итерации <p>Короткий текст 2</p>
    // на третей итерации <p>Короткий текст 3</p>

    // добавление обработчика события
    elem.addEventListener("click", openDescription);
    // когда на элементе произойдет событие click, будет вызвана функция openDescription
    // в данной ситуации мы добавили обработчик событий на каждый элемент коллекции
}


// Можно вопрос: как мы можем перебирать коллекцию через forEach,
// если коллекция неизменна, а forEach меняет массив?
// Array.from(titleElems).forEach(elem => {});

function openDescription(event) {
    // this - элемент, на который был повешен обработчик событий
    // this будет всегда тем элементом, на который добавили обработчик
    // через bind можем установить любой контекст
    console.log("элемент, на который был повешен обработчик событий", this);
    // event.target - возврщает элемент, на котором было совершено событие <p id="art1">
    // получение можно сделатя для всех элементов любым способом, через id, имя класса querySelector
    let allElems = document.querySelectorAll(".article p:first-child");
    for (let elems of allElems) {
        if (elems.id === event.target.id) {
            this.nextElementSibling.classList.toggle("open");
        } else {
            elems.nextElementSibling.classList.remove("open");
        }
    }

    // toggle - если класс есть, то он его удаляет, если класса нет, то он его добавляет
    // this.nextElementSibling.classList.toggle("open");

    // заранее представлять как будет элемент выглядить в одной ситуации
    // , и как будет выглядеть при использовании события
}

// data-*
// аттрибут data-* используется для передачи пользовательских данных
// из html в javascript
// после - можно прикреплять любую информацию
// получение значения аттрибута data-*:
// элемент.dataset.название если нужно получить значение
// элемент.dataset.present название приклепленное к элементу данных

let getPresent = () => {
    return {
        car: "Машина",
        dog: "Собака",
        book: "Книга"
    };
};

let presentContainer = document.getElementById("present_container");
presentContainer.addEventListener("click", showPresent);
// событие добавлено 1 элементу - контейнеру
// когда пройдет событие

// при клике на present_container вызывается функция showPresent,
// в нее передяется объект с информацией о событии

// dataset: car / book / dog
// getPresent().book - книга
// getPresent().car - машина
// getPresent().dog - собака
// let presents = getPresent();
// console.log(presents.car);
// let propName = "car";
// console.log(presents[propName]); имя переменной и обращение идет к ней
// console.log(presents.propName); undefined


function showPresent(event) {
    // this - presentContainer, которому добавляли обработчик
    console.log("Информация о событии", event);
    let clickElem = event.target; // элемент на котором произошло событие
    let presentValue = clickElem.dataset.present;
    if (presentValue) { // car / book / dog
        let presents = getPresent();
        clickElem.innerText = presents[presentValue];
        // происходит переопределение с помощью innerText
        clickElem.classList.add("present");

        // удаление обработчика события
        // для удаления нужна вся информация по событию
        // presentContainer.addEventListener("click", showPresent);
        this.removeEventListener("click", showPresent);
    }
}

window.addEventListener("scroll", fixedMenu);

let fixedBlock = document.getElementById("fixed");
let fixedBlockOffsetTop = fixedBlock.getBoundingClientRect().top; // возвращает элемент с указанными координатами
// можем узнать ширину, высоту, верхнюю нижнюю границу элемента или левую и правую
//

function fixedMenu() {
    if (window.pageYOffset > fixedBlockOffsetTop) {
        fixedBlock.classList.add("fixed"); // добавляем класс fixed
    } else {
        fixedBlock.classList.remove("fixed");
    }
    //pageYOffset - текущая прокрутка сверху
    // (насколько опущена полоса прокрутки)
}

// домашка
// кликнуть на один заголовок, а предыдущие закрываются

// доделать игру с генерацией поля

// отсортировать таблицу - самая сложная





