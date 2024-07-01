// task 1
const arr = [2, 5, 9, 15, 1, 4]
arr.forEach(element => {
    if (element > 3 && element < 10) {
        console.log(element)
    }
})


// task 2
let result = 0
for (let el = 2; el <= 100; el = el + 2) {
    result = result + el
}
console.log(`Summary: ${result}`)


// task 3
const arr2 = [2, 5, 9, 3, 1, 4]
let summary = 0
arr2.forEach(element => {
    summary = summary + element
})
console.log(summary)
console.log(arr2.reduce((a, b) => a + b))


// task 4
let index = 1, row = ""
do {
    row = `${row}${(index < 10) ? `-${index}` : "-"}`
    index++
} while (index <= 10);
console.log(row)


// task 5
const arr3 = [2, 5, 9, 0, 3, 1, 4]

// arr3.forEach(element => {
//     if (element === 0) {
//         break
//     }
//     console.log(element)
// })

for (let index = 0; index < arr3.length; index++) {
    if (arr3[index] === 0) {
        break
    }
    console.log(arr3[index])
}