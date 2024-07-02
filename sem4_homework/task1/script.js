for (let index = 0; index <= 10; index++) {
    if (index === 0) {
        console.log(`${index} – это ноль`)
    } else {
        console.log(`${index} - ${(index % 2 === 1) ? "нечетное" : "четное"} число`)
    }
}