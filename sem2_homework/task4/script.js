let userNum = +prompt("Введите целое число:")

if (isNaN(userNum)) {
    alert("Вы ввели не верное значение")
} else {
    let msg = ""
    const origNum = userNum
    let values = ["единиц", "десятков", "сотен", "тысяч"]
    while (userNum > 0 && values.length != 0) {
        let curVal = (values.length != 1) ? userNum % 10 : userNum
        userNum = Math.floor(userNum / 10)
        msg = `${(userNum !== 0) ? ", " : ""} ${curVal} ${values.shift()}` + msg
    }
    alert(`Число ${origNum} содержит: ${msg}`)
}