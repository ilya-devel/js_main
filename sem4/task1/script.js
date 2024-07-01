// task 1
const arrNum = [1, 2, 3]

arrNum.forEach(element => {
    console.log(element)
})


// task 2
const arrRandElement = ['1', 'tea', 23, true]

console.log(`Length of arrRandElement equals: ${arrRandElement.length}`)


// task 3
const arrChar = ['a', 'b', 'c']

for (let index = 0; index < arrChar.length; index++) {
    arrChar[index] = index + 1
}

console.log(arrChar)

// task 3 extra
const arrChar2 = ['a', 'b', 'c']
arrChar2[0] = 1
arrChar2[1] = 2
arrChar2[2] = 3

console.log(arrChar2)


// task 2 extra
const getRandomArray = (len) => {
    const newArr = []
    for (let index = 0; index < len; index++) {
        newArr.push(getRandomInt(0, 9))
    }
    return newArr
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(getRandomArray(7))