
const answers = [];
answers.push(prompt('Как вас зовут?'))
answers[1] = prompt('Где вы живёте?', '')
answers.push(prompt('Сколько вам лет?', '18'))
document.write(answers);