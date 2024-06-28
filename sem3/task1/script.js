// checkNum(3)
console.log(quadSecond(3))

const greetings = (name, surname, age) => console.log(`Привет ${name} ${surname} с возрастом ${age}`)

const quad = (num) => num * num

const checkNum = (num) => console.log((num >= 0) ? '+++' : '---')


function quadSecond (num) {
    return num * num
}

greetings('Вася', 'Пупкин', 31)

console.log(quad(5))

checkNum(19)
checkNum(0)
checkNum(-13)