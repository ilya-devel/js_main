let userNum = +prompt("Введите число:", 10);

if (userNum > 5) {
    alert("Число больше 5");
} else if (userNum < 5) {
    alert("Число меньше 5");
} else {
    alert("Число равно 5");
}


let test1 = +prompt("Введите любое значение:");
let test2 = +prompt("Введите любое значение:");

alert(`Введённые значения ${(test1 === test2) ? "равны" : "не равны"}`);

if (test1 === test2) {
    alert("Введённые значения равны");
} else {
    alert("Введённые значения не равны");
}


let firstNum = +prompt("Введите число:", 10);
let secondNum = +prompt("Введите число:", 10);

if (firstNum === secondNum) {
    alert("Числа равны");
} else if (firstNum > secondNum) {
    alert("Второе число меньше");
} else {
    alert("Первое число меньше");
}

if (firstNum !== secondNum) {
    alert(`${(firstNum > secondNum) ? "Второе" : "Первое"} число меньше`);
}

let userNum2 = +prompt("Введите число:", 10);

if (userNum2 >= 0 && userNum2 <= 15) {
    alert("Введённое число в диапазоне от 0 до 15");
} else {
    alert("Введённое число не попадает в диапазон от 0 до 15");
}
