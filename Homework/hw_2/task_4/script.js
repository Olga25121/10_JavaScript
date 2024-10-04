// Получение числа от пользователя

let number = parseInt(prompt('Введите число:'));

// Извлечение разрядов

let units = number % 10;
let tens = Math.floor((number % 100) / 10);
let hundreds = Math.floor(number / 100);

// Вывод результатов

console.log(`В числе ${number}
 количество сотен: ${hundreds},
 десятков: ${tens}, 
 единиц: ${units}`);
