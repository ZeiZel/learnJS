


//! ------------------------ Массивы -------------------------------





//! ------------------------ DOM-Дерево -------------------------------
//! Получение элементов со страницы
const boxByID = document.getElementById('box')

const btnsTag = document.getElementsByTagName('button')
const btnsClass = document.getElementsByClassName('btn')

const liFirst = document.getElementsByTagName('li')[0]
log(liFirst)
const liList = document.getElementsByTagName('li')
log(liList[0])

const queryList = document.querySelector('.list')
const queryListItem = document.querySelectorAll('.list-item')
queryListItem.forEach((item, i) => {
    item.innerHTML += ' - text'
})

const boxStylish = document.querySelectorAll('.box')
boxStylish[0].style.width = '300px'

// Создание нового элемента
const div = document.createElement('div')
div.classList.add('black')

document.body.append(div)
document.querySelector('.wrapper').append(div)

const wrapper = document.querySelector('.wrapper')
wrapper.prepend(div)
wrapper.append(div)

btnsClass[0].before(div)
btnsClass[3].after(div)

btnsClass[2].remove()


//! ------------------------ Ивенты -------------------------------
//! Действия с элементами на странице
div.addEventListener('touchmove', (e) => {
    log(e.targetTouches[0].pageX)
})
//! ------------------------ События на мобилках -------------------------------

window.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('button')

    btns.forEach((item, key) => {


        if (key != 1) {
            btns[key].addEventListener('touchstart', () => {
                alert('You tap on the button')
            })
        }
    })

    btns[1].addEventListener('touchend', () => {
        alert('ThatsAreFirstButton-NotASecond')
    })
})

/*
* touchstart – возникает при соприкосновении
* touchmove – возникает при перемещении пальцем
* touchend – палец отпускается от элемента с данным ивентлистенером
* touchenter – срабатывает как только палец при скольжении попадает на элемент с данным ивентом
* touchleave – срабатывает когда палец выходит за пределы элемента
* touchcancel – срабатывает тогда, когда точка соприкосновения не регистрируется на поверхности (если палец выйдет за пределы браузера)
* */

/* Методы ивентов - нормально с ними работать можно только на реальном мобильном устройстве
* .touches - Выводит объект, в котором описаны свойства тача (координаты, количество палецев...)
* targetTouches - отображает действия, которые выполняются конкретно с данным элементом
* changedTouches - показывает какой конкретно палец начал и закончил действие (следит за пальцами на экране)
* */

window.addEventListener('DOMContentLoaded', () => { // Начинаем работу скрипта сразу после загрузки DOM-дерева
    const box = document.querySelector('#box')
    box.addEventListener('touchstart', (e) => { // первый аргумент - сам ивент объекта
        e.preventDefault() // Отключаем все старые браузерные ивенты
        console.log('start')
        console.log(e.touches) // Информация о тачах
        console.log(e.targetTouches) // Информация о тачах
        console.log(e.changedTouches) // Информация о тачах
    })
    box.addEventListener('touchmove', (e) => {
        // console.log('move')
        console.log(e.targetTouches[0].pageX)
    })
    box.addEventListener('touchend', (e) => {
        console.log('end')
    })
})

//! ---- Подключение нескольких скриптов по нужному порядку (async, defer атриьбуты) ----
'use strict';
console.log('index')


// Чтобы загрузить сначала основной скрипт, а потом уже побочный, можно воспользоваться такой конструкцией
function loadScript(src) {
    const script = document.createElement('script')
    script.src = src
    script.async = false // заставляет запускаться скрипты строго друг за другом
    document.body.append(script)
}

loadScript("src/js/test.js")
loadScript("src/js/oneMoreTest.js")



//! ------------------------ Рекурсия -------------------------------
//! Моя реализация через обычную функцию
// function pow(a, b) {
//     if (!(b === 0)) {
//         let c = a
//         for (let i = 1; i < b; i++) {
//             c *= a
//         }
//
//         return c
//     } else {
//         return 1
//     }
// }
//! Способ с рекурсией
// const recursionPow = (a, b) => {
//     if (b === 1) {
//         return a
//     } else {
//         return a * pow(a, b - 1)
//     }
// }

//! Изначальный объект
let students = {
    js:[
        {name: 'John', progress: 100},
        {name: 'Ivan', progress: 60},
    ],
    html: {
        basic: [
            {name: 'Peter', progress: 20},
            {name: 'Ann', progress: 18},
        ],
        pro:[
            { name: 'Sam', progress: 10},
        ],
        semi: {
            students: [{
                name: 'SomeTest',
                progress: 10,
            }]
        },
    }
}

//! 1 Представление кода, который переберёт объект до второго уровня
function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;
    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students
}

console.log(getTotalProgressByIteration(students)) //* 41.6

//! 2 Представление кода с рекурсией, который уже доберётся до самых недр объекта
function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length]
    } else {
        let total = [0, 0]
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData)
            total[0] += subDataArr[0]
            total[1] += subDataArr[1]
        }

        return total
    }
}

const result = getTotalProgressByRecursion(students)
console.log(result[0]/result[1])



//! ------------------------ Глава 1 - Домашка 1 -------------------------------
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//?1 - моё решение
const ads = document.querySelector('.promo__adv')
ads.remove()

//!1- решение учителя
// const adv = document.querySelector('.promo__adv img')
// adv.forEach((item) => item.remove())

//?2 - моё решение
const genre = document.querySelector('.promo__genre')
genre.innerText = 'Драма'

//!2- решение учителя
// genre.textContent = 'Драма'

//?3 - моё решение
const bg = document.querySelector('.promo__bg')
bg.style.cssText = 'background: url(./img/bg.jpg) center'

//!3- решение учителя
// bg.style.backgroundImage = "url('img/bg.jpg')";

//?4 + 5 - моё решение
const list = document.querySelectorAll('.promo__interactive-item')
movieDB.movies.sort()
list.forEach((item, key) => {
    // item.replaceWith(`${movieDB.movies[key]}`)
    item.innerHTML = (`${key + 1}. ${movieDB.movies[key]} <div class="delete"> </div>`)
})

//!4 + 5 - решение учителя
// const list = document.querySelectorAll('.promo__interactive-list')
// console.log(list[0].innerHTML) // Получаем содержимое данного элемента HTML
//
// movieDB.movies.sort()
// movieDB.movies.forEach((item, i) => {
//     list[i].innerHTML +=`
//     <li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}
//              <div class="delete"></div>
//     </li>`
// })


//! ------------------------ Глава 2 -------------------------------

//! ------------------------ Оператор проверки ?? -------------------------------
const box = document.querySelector('.box');

const newHeight = 0;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200); // Приоритет  выполнения ?? довольно низкий, поэтому его можно использовать тут
}

changeParams(box, newHeight, newWidth);

//! ------------------------ Оператор проверки по цепочке -------------------------------
const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)

// Чтобы избежать ошибки, мы вставляем сюда условие
if (block) {
    console.log(block.textContent)
}
// Либо можно поступить проще и использовать оператор опциональной цепочки ?
console.log(block?.textContent)

console.log(1+2)


//! Пример с объектами
const personData = {
    person: {
        name: 'Peter',
        surname: 'Jenkins',
    },
    say: function () {
        console.log('Hello')
    }
}

personData.say()
personData.hey?.()

//* Первый вариант обработки
if (personData && personData.person && personData.person.skills && personData.person.skills) {
    console.log(personData.person.skills.js)
}
//* Второй вариант обработки
console.log(personData?.person?.skills?.js)


//! ------------------------ Динамические и статические коллекции (и два их метода) -------------------------------
const boxesQuery = document.querySelectorAll('.box')
const boxesGet = document.getElementsByClassName('box')

boxesQuery.forEach((box) => { // Выведет элемент с классом this
    if (box.matches('.this')) { // ищет селектор
        console.log('This!')
    }
})

console.log(boxesQuery[0].closest('.wrapper')) // Выведет родительский элемент

// boxesQuery[0].remove()
// boxesGet[0].remove()
//
// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div') // Создаём div
//     div.classList.add('box') // Добавляем ему класс
//     document.body.append(div)
//
//     //! boxesGet[boxesGet.length] = div // Так делать нельзя! так как тут псевдомассив
// }
//
// console.log(boxesQuery)
// console.log(boxesGet)
// // console.log(document.body.children)
//
// console.log(Array.from(boxesGet)) // Получаем массив из псевдомассива (коллекции)

//! ------------------------ Итерируемые конструкции -------------------------------
const salary = {
    george: 850,
    ivan: 3500,
    ann: 5000,
}

salary[Symbol.iterator] = function() {
    return { // for-of принимает в себя весь этот объект
        current: this.george, // 850
        last: this.ann, // 5000
        next() { // и потом for-of начинает работать с даннм методом
            if (this.current < this.last) {
                this.current = this.current + 500
                return {done: false, value: this.current} // Продолжаем цикл и принимаем следющее значение this.current
            } else {
                return {done: true} // Завершает цикл
            }
        }
    }
}

const iterator = salary[Symbol.iterator]()
console.log(iterator.next())

// for (let res of salary) {
//     console.log(res)
//}



//! ------------------------ Структура Map -------------------------------
const user = {
    4: 'Alex',
    surname: 'Smith',
    showMyData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));
// console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj)


const shops = [
    {rice: 100},
    {milk: 50},
    {sourCream: 80},
];
const map = new Map([
    [{meat: 800}, 8000],
    [{soup: 120}, 5000]
]);

const budget = [15000, 25000, 30000]

shops.forEach((shop, i) => {
    map.set(shop, budget[i])
})

// console.log(map)

// for (let shop of map.keys()) {
//     console.log(shop)
// }

// Получение ключей у ключей
// const goods = []
// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop));
// }
// console.log(goods);

// Получение значений
// for (let price of map.values()) {
//     console.log(price);
// }

// Получение массивов карты
// for (let price of map.entries()) {
//     console.log(price);
// }

// Получение отдельных значений объекта-ключа и значения
// for (let [shop, price] of map.entries()) {
//     console.log(shop, price);
// }

// И последний метод перебора - через forEach
// map.forEach((value, key, map) => {
//     console.log(key, value);
// });

// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));

// map.delete(shops[1]); // удаление конкретного элемента мапы
// map.clear(); // Полная очистка МАПы
// map.size; // Размер
// map.keys() // Перебирает карту по ключам

// map.set(shops[0], 1000)
//     .set(shops[1], 2000)
//     .set(shops[2], 3000);
// for (let i = 3; i < 5; i++) {
//     map.set(shops[i], i * 1000)
// }


//! ------------------------ Структура Set -------------------------------
const students = ['Alex', 'Ann', 'Oleg', 'Oliver', 'Alex'];

function arrFilter(arr) {
    return Array.from(new Set(arr));
}

console.log(arrFilter(students))

// console.log(set);

// const value = 'Oleg';
//
// set.has(value); // Проверяет наличие
// set.delete(value); // Удаляет значение
// set.clear(); // Очищает массив
// set.size; // Отображает размер

// for (let value of set) {
//     console.log(value)
// }

// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain)
// })

// console.log(set.values()); // Выведет значения массива
// console.log(set.keys()); // Существует только для обратной совместимости - ключей нет
// console.log(set.entries());


//! ------------------------ Тип BigInt -------------------------------
const number = BigInt(129347213572198374213542135);
const tooBigNum = BigInt('129347213572198374213542135');
const bigNum = 2134921347021837549218374092183740921n;

// console.log(number, tooBigNum, bigNum);

// console.log(Math.round(5.5n)); // Error
// console.log(5n + 1); // Error
// console.log(5n / 2n); // 2 - округление в меньшую сторону


// console.log(2n > 1n); // true
// console.log(2n > 1); // true
// console.log(2n > 5); // false
// console.log(2n == 2); // true
// console.log(2n === 2); // false

let bigint = 3n;
let num = 3;

console.log(bigint + BigInt(num)); // 6n
console.log(Number(bigint) + num); // 6
console.log(+bigint + num); // Error



//! ------------------------ ClassList и делегирование событий ------------------------------------
const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');


// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.tagName == "BUTTON") {
//         console.log("Hello");
//     }
// });

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.red')) {
        console.log("Hello");
    }
});

const newButton = document.createElement('button');
newButton.classList.add('red');
wrapper.append(newButton);

// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.classList.contains('blue')) {
//         console.log("Hello")
//     }
// });


// console.log(btns[0].classList.length) // Выведет количество классов - 2
// console.log(btns[0].classList.item(0)) // Позволяет получить класс под определённым индексом - blue
//
// btns[1].classList.add('red') // Добавляет класс на элемент
// btns[1].classList.remove('purple') // удаляет класс
// btns[3].classList.add('red', 'big', 'last') // Можно добавить сразу несколько классов
//
// btns[2].classList.toggle('red') //Если класс есть - удаляет его. Если его нет, то добавляет. Тут - добавит
// btns[2].classList.toggle('red') //При повторном добавлении сотрёт класс red
//
// if (btns[3].classList.contains('big')) { // Проверяет наличие класса
//     console.log('You have a big button!');
// }

// btns[0].addEventListener('click', () => {
//     //* Так:
//     // if (!btns[1].classList.contains('red')) {
//     //     btns[1].classList.add('red');
//     // } else {
//     //     btns[1].classList.remove('red');
//     // }
//
//     //* Или так (что будет проще и быстрее):
//     btns[1].classList.toggle('red');
// });
//
// console.log(btns[0].className); // Хранит классы в виде строки - blue some