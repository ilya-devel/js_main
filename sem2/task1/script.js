const age = +prompt("Ваш возраст?", 34);

if (age <= 0) {
    alert("Вы ввели не верное значение!");
} else {
    if (age === 1) {
        alert(`Вам ${age} год`);
    } else if (2 <= age && age <= 4) {
        alert(`Вам ${age} года`);
    } else {
        alert(`Вам ${age} лет!`);
    }
}

const userName = prompt("Укажите ваше имя");

alert(`Добро пожаловать на сайт ${userName}`);
