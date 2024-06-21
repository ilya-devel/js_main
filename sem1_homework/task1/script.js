function celsiusToFahrenheit(celsius) {
    return (9 / 5) * celsius + 32;
}

const celsius = 30;

const result = celsiusToFahrenheit(celsius);

console.log(`Температура ${celsius} градусов Цельсия равна ${result} градусам Фаренгейта`);