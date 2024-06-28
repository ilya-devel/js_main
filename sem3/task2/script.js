const summaryThird = (a, b, c) => {
    let summary = ((isNaN(Number(a))) ? 0 : Number(a))
    summary = summary + ((isNaN(Number(b))) ? 0 : Number(b))
    summary = summary + ((isNaN(Number(c))) ? 0 : Number(c))
    console.log(summary)
}

let param1 = '1'
let param2 = 2
let param3 = 3

summaryThird(param1, param2, param3)
