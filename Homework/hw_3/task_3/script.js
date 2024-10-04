// 1 версия:
// Функция нахождения максимального числа

function findMax(a, b, c) {

let maxNum = a; // Начинаем с предположения, что a - максимальное значение
if (b > maxNum) {
maxNum = b;     // Если b больше, обновляем max
}
if (c > maxNum) {
maxNum = c; // Если c больше, обновляем max
}
return maxNum;
}

// Получение ввода от пользователя

let num_1 = parseFloat(prompt('Введите первое число:'));
let num_2 = parseFloat(prompt('Введите второе число:'));
let num_3 = parseFloat(prompt('Введите третье число:'));

// Нахождение максимального значения

let maxNum = findMax(num_1, num_2, num_3);

// Вывод результата в консоль

console.log('Максимальное значение:', maxNum);

// *********************************************************************

// 2 версия используем встроенную функцию Math.max:

// Функция нахождения максимального числа

function findMax(a, b, c) {
return Math.max(a, b, c);
}
// Получение ввода от пользователя

let num1 = parseFloat(prompt('Введите первое число:'));
let num2 = parseFloat(prompt('Введите второе число:'));
let num3 = parseFloat(prompt('Введите третье число:'));

// Нахождение максимального значения

let max = findMax(num1, num2, num3);

// Вывод результата в консоль

console.log('Максимальное значение:', max);