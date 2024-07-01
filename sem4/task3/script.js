// task 1

for (let index = 11; index < 33 + 1; index++) {
    console.log(index)
}


// task 2

for (let index = 1; index < 99 + 1; index++) {
    if (index % 2 === 1) {
        console.log(index)
    }
}

for (let index = -1; index < 99; console.log(index = index + 2)) {

}


// task 3

for (let index = 100; index > 0 - 1; index--) {
    console.log(index)
}


// task 4

const tripleMult = num => {
    let count = 0
    while (num < 1000) {
        num = num * 3
        count++
    }
    console.log(`Counter is equal: ${count}; Num equals after multiply: ${num}`)
}

tripleMult(3)
tripleMult(999)
tripleMult(25)


// task 5

for (let x = 1; x < 3 + 1; x++) {
    let row = ""
    for (let y = 1; y < 3 + 1; y++) {
        row = row + `${x}${y} `
    }
    console.log(row)
}