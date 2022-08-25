'use strict';

const box = document.querySelector(".box"),
      btn = document.querySelector("button");

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + "px";
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);
console.log(style);