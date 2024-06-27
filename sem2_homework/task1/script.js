let num1 = +prompt("Enter first number: ", 1);
let num2 = +prompt("Enter second number: ", 3);

alert(`First number is ${(num1 <= 1) ? "less or equals": "more"} than one`);
alert(`Second number is ${(num2 >= 3) ? "equals or more": "less"} than three`);
