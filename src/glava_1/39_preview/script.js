const btns = document.querySelectorAll('button')

// const clickCh = () => alert('Its a Click')
// btns[1].addEventListener('click', clickCh)
// btns[1].addEventListener('click', clickCh)


// const deleteElement = (event) => {
//     console.log(event.target)
//     event.target.remove()
//     btns[1].removeEventListener('click', clickCh) // Удаляем ивент
// }
// btns[0].addEventListener('mouseenter', deleteElement) // Добавляем ивент

//! Отмена стандартного поведения элементов в браузере
// const link = document.querySelector('a')
// link.addEventListener('click', (event) => {
//     event.preventDefault() // Тут описывается старт новой логики для клика по элементу
//     console.log(event.target) // Будет выводиться лог в консоли при нажатии на ссылку (а не переход по ней)
// })

//! Вешаем обработчик события сразу на весь псевдомассив
btns.forEach((btn) => {
    btn.addEventListener('click', () => alert('Click'), {once: true})
})