'use strict';

const box = document.querySelector('.box')
console.log(box)

box.style.backgroundColor = 'Blue'
box.style.width = '500px'
box.style.height = '500px'

const btns = document.getElementsByTagName('button')
// btns.style.backgroundColor = 'Black' // Вылезет ошибка, так как мы обращаемся к псевдомассиву
btns[2].style.borderRadius = '100%' // Поэтому обязательно нужно указать конкретный элемент псевдомассива

let width = window.screen.width/25;
btns[0].style.cssText =
    `background-color: purple; width: ${width}px` // Позволяет вписать сразу несколько стилей одному объекту

// Данный цикл позволяет вписать всем элементам одинаковые стили, но это достаточно грамоздкий способ
for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = 'Black'
}