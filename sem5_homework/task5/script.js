const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]

const newObj = {}

if (en.length === ru.length && en.length > 0) {
    for (let ind = 0; ind < en.length; ind++) {
        newObj[en[ind]] = ru[ind]
    }
}

console.log(newObj)