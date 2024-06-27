// let error = +promt("Enter value:", 3);

let a = '2';
let b = '3';

console.log(a + b);

let valueFirst = +prompt("Enter first value:", 10);
let valueSecond = +prompt("Enter second value:", 5);


console.log(`Summary ${valueFirst} and ${valueSecond} equals: ${valueFirst + valueSecond}`);
console.log(`Difference ${valueFirst} and ${valueSecond} equals: ${valueFirst - valueSecond}`);
console.log(`Multiple ${valueFirst} and ${valueSecond} equals: ${valueFirst * valueSecond}`);
console.log(`Divine ${valueFirst} and ${valueSecond} equals: ${(valueSecond !== 0) ? valueFirst / valueSecond : "not divine by zero"}`);
console.log(`Remainder ${valueFirst} and ${valueSecond} equals: ${(valueSecond !== 0) ? valueFirst % valueSecond : "not divine by zero"}`);