function summarySqrtValues(...numbers) {
    let summary = 0
    numbers.forEach(element => {
        if (!isNaN(Number(element))) {
            summary = summary + Math.sqrt(Number(element))
        }
    })
    console.log(`Result: ${summary}`)
}

const getMin = (a, b) => console.log((a >= b) ? b : a)



summarySqrtValues(3, 4)

getMin(1,3)
getMin(3,3)
getMin(5,3)