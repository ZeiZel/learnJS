/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство private. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?')


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
}

function showMyDB(object) {
    if (object.private == false) {
        return object
    }
}

showMyDB(personalMovieDB)

function writeYourLovedNumbers() {
    for (let i = 0; i < 5; i++) {
        prompt('')
    }
}

writeYourGenres()


while (true){
    if (numberOfFilms >= 0) {
        if(personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов')
            break
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            alert('Вы классический зритель')
            break
        }else if(personalMovieDB.count > 30){
            alert('Вы киноман')
            break
        }
    } else {
        alert('Вы ввели не число или неверное число')
    }
}

let name, mark

cycle: for (let i = 0; i < 5;){
    name = prompt('Один из последних просмотренных фильмов?')
    mark = prompt('На сколько оцените его по десятибальной шкале?', '5')
    if (name != null && name != '' && name.length < 50 && mark != '' && mark != null && mark >= 0 && mark <= 10) {
        personalMovieDB.movies[name] = mark
        i++;
    } else {
        alert('Одно из введённых вами значений неверно')
        continue cycle
    }
}