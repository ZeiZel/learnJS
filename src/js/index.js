
// const box = document.getElementById('box')
// console.log(box)
//
// const btns = document.getElementsByTagName('button')
// console.log(btns[1])
//
// const list = document.getElementsByClassName('li-list')
// console.log(list)

const list = document.querySelectorAll('.li-list')
list.forEach((item, key) => console.log(item))

console.log('---')

const oneList = document.querySelector('.li-list')
console.log(oneList)