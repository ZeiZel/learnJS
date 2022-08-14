'use strict';
const log = (item) => {
    console.log(item)
}


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

//! Действия с элементами на странице
div.addEventListener('touchmove', (e) => {
    log(e.targetTouches[0].pageX)
})


//! События и их обработчики

//! Навигация по DOM - элементам, data-атрибуты, преимущество forof
