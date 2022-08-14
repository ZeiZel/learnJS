


//! ------------------------ Массивы -------------------------------





//! ------------------------ DOM-Дерево -------------------------------
//! Получение элементов со страницы



//! ------------------------ Ивенты -------------------------------

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