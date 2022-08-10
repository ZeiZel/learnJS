
let string = 'Some string in this line'
console.log(string[0]) // S
console.log(string.toUpperCase()) // Заглавными буквами
console.log(string.toLowerCase()) // Строчными буквами
console.log(string.indexOf('string')) // 5 - выведет индекс первой найденной буквы
console.log(string.indexOf('q')) // -1 - не найдена буква в строке
console.log(string.replace('Some', 'Come')) // Come string in this line
console.log(string.slice(5, 11)) // string - не включает последний индекс (т.е. 11 вырежется)
console.log(string.slice(5)) // string in this line
console.log(string.slice(-3, -1)) // in - берёт значения с конца
console.log(string.substring(5, 11)) // работает как slice
console.log(string.substr(5, 6)) // С определённого индкеса выводит количество символов

const num = 12.5
console.log(Math.round(num)) // 13 - Округление

const px = '12.5px'
console.log(Number.parseInt(px)) // 12 - Переводит в число (можно испоьзовать без вызова Number)
console.log(Number.parseFloat(px)) // 12.5










