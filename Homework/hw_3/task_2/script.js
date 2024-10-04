// Функция вычисления 13% от числа

function calculateSalaryAfterTax(salary) {
    return salary * 0.87;
}

// Получение ввода от пользователя

let input = prompt('Введите число:');
let number = parseFloat(input);
if (isNaN(number)) {
    console.log('Значение задано неверно');
} else {

// Вычисление и вывод результата

    let afterTax = calculateSalaryAfterTax(number);
    console.log(`Размер заработной платы за вычетом налогов равен
    ${afterTax}`);

// Вычисление и вывод суммы налога (собственная доработка)

    let tax = number - afterTax;
    console.log(`Налог составил ${tax} рублей `);
}


