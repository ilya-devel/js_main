const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

//1
console.log(Object.values(obj)
    .map(element => Object.values(element))
    .map(element => element.reduce((a, b) => a + b))
    .reduce((a, b) => a+ b))

//2
let result = 0
for (const key in obj) {
    result += Object.values(obj[key]).reduce((a, b) => a + b)
}
console.log(result)


