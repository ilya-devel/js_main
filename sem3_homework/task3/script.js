function getMaxFromArray() {
    let array = getNumArray()
    let maxValue = array[0]
    array.forEach(element => {
        if (maxValue < element) {
            maxValue = element
        }
    })
    alert(`Максимальное значение равно: ${maxValue}`)
}

const getNum = () => {
    let num = +prompt("Введите целое число", 3)
    while (isNaN(num)) {
        alert("Не верно указаны данные")
        num = +prompt("Введите целое число", 3)
    }
    return num
}

const getNumArray = (arrSize = 3) => {
    let numArray = []
    while (arrSize > 0) {
        numArray.unshift(getNum())
        arrSize--
    }
    return numArray
}


getMaxFromArray()