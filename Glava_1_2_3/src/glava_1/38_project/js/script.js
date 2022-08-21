/* Задания на урок:

    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
    "Добавляем любимый фильм"

    5) Фильмы должны быть отсортированы по алфавиту

    */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const ads = document.querySelectorAll('.promo__adv img')
    const genre = document.querySelector('.promo__genre')
    const bg = document.querySelector('.promo__bg')
    const list = document.querySelector('.promo__interactive-list') // Тут мы обращаемся к списку фильмов

    const addForm = document.querySelector('form.add') // обращение к форме с классом add
    const addInput = addForm.querySelector('.adding__input') // ищем внутри переменной addForm
    const checkbox = addForm.querySelector('[type="checkbox"]') // обращение к тегу с таким атрибутом

    function listChanger(films, parent) {
        parent.innerHTML = "";
        sortArr(films); // Сюда добавили сортировку, чтобы список пересобирался при добавлении нового фильма

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        // Обращаемся по классу к корзинкам
        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => { // При клике на корзинку
                item.parentElement.remove()

                films.splice(i, 1) // удаляем 1 элемент под индексом i из массива

                listChanger(films, parent) // Рекурсией пересоздаём список, чтобы отображались цифры сбоку от фильмов
            })
        });
    }

    const deleteAdv = (adverse) => {
        adverse.forEach(item => {
            item.remove()
        })
    }

    const makeChanges = (filmGenre, url) => {
        genre.innerText = filmGenre
        bg.style.cssText = `background: ${url} center`
    }

    const sortArr = (arr) => {
        arr.sort()
    }

    const checkerFilm = (film, arrFilms) => {
        let bool = false
        arrFilms.forEach((item) => {
            if (item === film) {
                bool = true
            }
        })
        return bool
    }

    addForm.addEventListener('submit', (e) => { // Ивент срабатывает при отправке данных в форму
        e.preventDefault() // Отменить стандартное выполнение ивентов в браузере

        let newFilm = addInput.value.trim() // Получаем введённое value (значение), которое мы сюда передали
                                              // Так же нужно почистить пробелы от данного импута
        const favourite = checkbox.checked // Проверяем, поставлена ли галочка на чекбоксе

        if (favourite) { // будет выполняться, если true, а переменная хранит значение чекбокса
            alert('Добавляем любимый фильм')
            console.log('Добавляем любимый фильм')
        }

        if (newFilm) { // Если строка будет пустой, то код не сработает

            if (newFilm.length > 21) { // Условие на обрезку строки
                newFilm = `${newFilm.substring(0, 22)}...` // Вписываем первые 21 символ от слова и ставим "..."
            }

            if (checkerFilm(newFilm, movieDB.movies)) {
                alert('Такой фильм уже присуствует в списке')
            } else {
                movieDB.movies.push(newFilm) // Добавляем ещё одну строчку в массив
            }

            sortArr(movieDB.movies)
            listChanger(movieDB.movies, list)
        }

        e.target.reset() // Сбрасывает текст с формы ввода
    })

    listChanger(movieDB.movies, list)
    makeChanges('Драма', 'url(./img/bg.jpg)')
    deleteAdv(ads)

})































