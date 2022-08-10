/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство private. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    numberOfFilmsFn: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?')
        if (personalMovieDB.count >= 0) {
            if(personalMovieDB.count < 10){
                alert('Просмотрено довольно мало фильмов')
            }else if(personalMovieDB.count >= 10 && this.count <= 30){
                alert('Вы классический зритель')
            }else if(personalMovieDB.count > 30){
                alert('Вы киноман')
            }
        }
    },
    whatsTheMovies: () => {
        cycle: for (let i = 0; i < 5;){
            let name = prompt('Один из последних просмотренных фильмов?').trim();
            let mark = prompt('На сколько оцените его по десятибальной шкале?', '5');
            if (name != null && name != '' && name.length < 50 && mark != '' && mark != null && mark >= 0 && mark <= 10) {
                personalMovieDB.movies[name] = mark;
                i++;
            } else {
                alert('Одно из введённых вами значений неверно')
                continue cycle;
            }
        }
    },
    writeYourGenres: () => {
        let count
        while (typeof count != 'number') {
            count = +prompt('Сколько у вас любимых жанров?')
        }

        cycle: for (let i = 0; i < count; i++) {
            let now = prompt('Введите ваш любимый жанр').trim()
            if (now == '' || now == null) {
                continue cycle
            } else {
                personalMovieDB.genres[i] = now
            }
        }
        personalMovieDB.genres.forEach((element, key) => {
            console.log(`Ваш любимый жанр под номером ${key + 1}: ${element}`)
        })
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.private) {
            personalMovieDB.private = false
        } else {
            personalMovieDB.private = true
        }
    },
    showMyDB: function () {
    if (personalMovieDB.private) {
        console.log('Эта база приватна')
    } else {
        console.log(personalMovieDB)
    }
}
}

personalMovieDB.writeYourGenres()
