const riddles = {
    question: "Весной и летом одним цветом",
    answers: ["ёлка", "елка", "ель"],
    tips: [
        "",
        "У него есть иголки",
        "Это часто можно увидеть в лесах"
    ],
    askQuestion: function() {
        let winner = false
        let userAnswer, tip = ""
        while (this.tips.length !== 0) {
            userAnswer = prompt(`${this.question} ${(tip.length === 0) ? "": tip}`)
            if (this.answers.indexOf(userAnswer.toLowerCase()) >= 0) {
                winner = true
                break
            } else {
                console.log("Не верно")
                tip = this.tips.pop()
            }
        }
        if (winner) {
            console.log("Вы выиграли")
        } else {
            console.log("Вы проиграли")
        }
    }
}

riddles.askQuestion()