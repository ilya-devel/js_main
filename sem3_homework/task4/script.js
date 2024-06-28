const summary = (a, b) => a + b

const diff = (a, b) => {
    if (a > b) {
        return a - b
    } else {
        return b - a
    }
}

const multi = (a, b) => a * b

const dividing = (a, b) => a / b


let firstValue = 5
let secondValue = 15

console.log(summary(firstValue, secondValue))
console.log(diff(firstValue, secondValue))
console.log(multi(firstValue, secondValue))
console.log(dividing(firstValue, secondValue))