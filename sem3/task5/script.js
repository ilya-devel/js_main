const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const quiz = (quest, answer) => {
    let userAns = prompt(quest)
    let count = 2
    if (userAns.toLowerCase() === answer.toLocaleLowerCase()) {
        return alert("Вы ответили верно")
    } else {
        while (count >= 0 &&
            userAns.toLocaleLowerCase() !== answer.toLocaleLowerCase()) {
            alert("Вы ошиблись")
            if (count === 2) {
                userAns = prompt(`${quest}. В слове ${answer.length} букв`)
            } else if (count === 1) {
                let index = getRandomInt(0, answer.length - 1)
                userAns = prompt(`${quest}. В слове ${answer.length} букв, ${index + 1} буква = ${answer[index]}`)
            } else {
                return alert("Вы ответили не верно")
            }
            count--
        }
        return alert("Вы ответили верно")
    }
}


quiz("Зимой и летом одним цветом", "ёлка")