let day = +prompt("Enter number from 1 to 31: ", 1)

console.log(day)

if (isNaN(day) || day < 1 || day > 31) {
    alert("You entered invalid number")
} else {
    if (day <= 10) {
        alert(`Day ${day} is part of first decade of month`)
    } else if (day <= 20) {
        alert(`Day ${day} is part of second decade of month`)
    } else {
        alert(`Day ${day} is part of third decade of month`)
    }
}