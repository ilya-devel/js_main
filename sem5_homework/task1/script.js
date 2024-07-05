const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

for (const key in numbers) {
    if (numbers[key] >= 3) console.log(numbers[key])
}

console.log("----")

Object.values(numbers)
    .filter(element => element >= 3)
    .forEach(element => console.log(element))