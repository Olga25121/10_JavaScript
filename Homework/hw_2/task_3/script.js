// Пример числа дня месяца

let day = 15;

// Определение декады

let decade;
if (day >= 1 && day <= 10) {
decade = 'первую';
} else if (day > 10 && day <= 20) {
decade = 'вторую';
} else if (day > 20 && day <= 31) {
decade = 'третью';
} else {
decade = 'некорректное число';
}

// Вывод результата

console.log(`Число ${day} попадает в ${decade} декаду месяца.`);
