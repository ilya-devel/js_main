let dayOfWeek = +prompt("Введите число от 1 до 7: ", 1)

function getNameOfDayOfWeek(day) {
    if (isNaN(day) || day < 1 || day > 7) {
        alert("Не верные данные")
    } else {
        const namesOfDayWeek = ["Понедельник", "Вторник", "Среда",
            "Четверг", "Пятница", "Суббота", "Воскресенье"]
        return namesOfDayWeek[day - 1]
    }
}

alert(`Вы указали ${getNameOfDayOfWeek(dayOfWeek)}`)


const timeGreetings = (name, time) => {
    let hour = time.getHours()
    let greetings = ""
    if (hour >= 6 && hour <= 10) {
        greetings = "morning"
    } else if (hour >= 11 && hour <= 16) {
        greetings = "day"
    } else if (hour >= 17 && hour <= 22) {
        greetings = "evening"
    } else {
        greetings = "night"
    }
    msg = `Good ${greetings}, ${name}`

    return msg
}

console.log(timeGreetings("Ilya", new Date()))