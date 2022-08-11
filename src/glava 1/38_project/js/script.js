/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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























