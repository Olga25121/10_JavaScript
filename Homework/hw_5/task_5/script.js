// Описание задачи: 
// Есть два массива en и ru. Объедините их в объект, где значения из
// первого массива будут ключами, а значения из второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница",
    "суббота", "воскресенье"];



// Объединение массивов в объект

const weekDays = {};
for (let i = 0; i < en.length; i++) {
    weekDays[en[i]] = ru[i];
}

// Вывод результата

console.log(weekDays);