// Функция сложения
function add(a, b) {
    return a + b;
    }
// Функция вычитания
    function subtract(a, b) {
        return a > b ? a - b : 0;
}
// Функция умножения
function multiply(a, b) {
return a * b;
}
// Функция деления
function divide(a, b) {
return b !== 0 ? a / b : 'Деление на ноль недопустимо';
}
// Примеры использования функций
console.log(add(2, 6)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(4, 7)); // 28
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Деление на ноль недопустимо