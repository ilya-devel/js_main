const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
const arr2 = [1, 2, 3, 4, 5, 6, 7]

const newObj = {}

if (arr1.length === arr2.length && arr1.length > 0) {
    for (let index = 0; index < arr1.length; index++) {
        newObj[arr2[index]] = arr1[index]
    }
} else {
    console.log("Invalid arrays")
}

console.log(newObj)


const obj = {
    x: 1,
    y: 2,
    z: 3,
}

// for (const key in obj) {
//     obj[key] = obj[key] ** 2
// }

const upValues = (obj, coefficient = 2) => {

    for (const key in obj) {
        obj[key] = obj[key] + (obj[key] * coefficient)
    }
    return obj
}

console.log(upValues(obj, 0.5))


// const test = {
//     x: 1,
//     y: 2,
//     func: () => {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 this[key] = this[key] * 3
//             }
//         }
//     }
// }


// test.func()

// console.log(test)