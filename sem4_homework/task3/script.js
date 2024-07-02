const getRandomIntNumArray = (min = 1, max = 9, length = 5) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const newArr = []
    for (let index = 0; index < length; index++) {
        newArr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return newArr
}

const array = getRandomIntNumArray()

console.log(`Random array: ${array}`)
console.log(`Summary: ${array.reduce((a, b) => a + b)}`)
console.log(`Minimal value is ${Math.min(...array)}`)
console.log(`Is there 3: ${array.some(num => num === 3)}`)