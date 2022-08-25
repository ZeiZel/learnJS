
const btn = document.querySelector(".animation-button");

function myAnimation() {
    const box = document.querySelector(".box-rider");
    let pos = 0;

    const id = setInterval(frame, 5);
    function frame() {
        if (pos === 480) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = `${pos}px`;
            box.style.left = `${pos}px`;
        }
    }
}

btn.addEventListener('click', myAnimation)


// const timeID = setTimeout(function (text, variable) {
//     console.log(`${text}, ${variable}`);

// }, 2000, 'Hello', 'Ki');
// let longTO,
//     i = 0;
//
// btn[0].addEventListener('click', () => {
//     // const longTO = setTimeout(logger, 3000);
//     longTO = setInterval(logger, 500);
// });
//
// function logger() {
//     if (i === 3) { // Выполнит 4 итерации и очистит интервал
//         clearInterval(longTO);
//     }
//     console.log("It's a log");
//     i++;
// }


// Рекурсивный setTimeout - выполнение бесконечное
// let id = setTimeout(function log() {
//     console.log("Hello");
//     id = setTimeout(log, 500);
// }, 500);










