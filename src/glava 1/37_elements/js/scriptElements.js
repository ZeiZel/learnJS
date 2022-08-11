'use strict';

//! Изменение стилей в JS
const hearts = document.querySelectorAll('.heart')
// console.log(hearts)

const box = document.querySelector('.box')
// console.log(box)

// box.style.backgroundColor = 'Blue'
// box.style.width = '500px'
// box.style.height = '500px'

const btns = document.getElementsByTagName('button')
// btns.style.backgroundColor = 'Black' // Вылезет ошибка, так как мы обращаемся к псевдомассиву
// btns[2].style.borderRadius = '100%' // Поэтому обязательно нужно указать конкретный элемент псевдомассива

// let width = window.screen.width/25;
// btns[0].style.cssText =
//     `background-color: purple; width: ${width}px` // Позволяет вписать сразу несколько стилей одному объекту

// Данный цикл позволяет вписать всем элементам одинаковые стили, но это достаточно грамоздкий способ
// for (let i = 0; i < btns.length; i++) {
//     btns[i].style.backgroundColor = 'aqua'
// }

// И уже данный перебор позволяет назначить всем псевдоэлементам нужные стили
//? forEach((элемент, номер элемента, ссылка на массив) => логика)
// hearts.forEach((item) => item.style.backgroundColor = 'violet')


//! Создание нового элемента
const div = document.createElement('div') // Создали элемент внутри JS
// const text = document.createTextNode('Привет, мир!') // Это способ добавления текстовой ноды

// Метод classList хранит в себе огромное количество методов, которыми мы можем взаимодействовать с нашими элементами
div.classList.add('black') // Добавляем имя класса нашему элементу

// document.body.append(div) // Добавит элемент в конец

const wrapper = document.querySelector('.wrapper')
wrapper.append(div)
// wrapper.prepend(div) // Добавляем элемент внутрь элемента с классом wrapper

// hearts[1].before(div)
// hearts[1].after(div)

const circles = wrapper.querySelectorAll('.circle')
// circles[0].remove() // Удаление элемента
// wrapper.removeChild(circles[0])

// hearts[0].replaceWith(circles[1])
// wrapper.replaceChild(circles[1], hearts[0])

// wrapper.insertBefore(div, hearts[1])

//! Взаимодействие с HTML
// div.innerHTML = "<h1>Hello</h1>";
// box.innerText = "Hello";

div.insertAdjacentHTML('', '<h1>Hello</h1>')































































