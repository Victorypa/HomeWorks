// "Создать массив длины больше 20 со случайным (произвольным) набором  чисел от 1 до 1000.
// Задать произвольное число (можно спросить у пользователя).
// Проверить, есть ли заданное число в данном массиве."

const arr = [];
const arrLength = 1000;
const maxNum = 1000
const randomNum = 100;


for (let i = 0; i < arrLength; i++) {
    arr[i] = Math.floor(Math.random() * maxNum)
    if (arr[i] === randomNum) {
        console.log(`Заданное число ${arr[i]} есть в массиве `)
    }
}

// "Создать массив длины больше 20 со случайным (произвольным) набором  чисел от 1 до 1000.
// Найти самый маленький и самый большой элементы массива.
// Также вывести разницу между ними."


let minValue = 0
let maxValue = 0

for (let i = 0; i < arrLength; i++) {
    if (arr[i] > maxValue) {
        maxValue = arr[i]

    } else {
        minValue = arr[i]

    }
}
console.log('max', maxValue)
console.log('min', minValue)
console.log(`Разница ${maxValue - minValue}`)


// "Создать массив длины больше 20 со случайным (произвольным) набором  чисел от 1 до 1000.
// Посчитать количество четных и количество нечетных элементов в массиве."


let evenCount = 0
let oddCount = 0


for (let i = 0; i < arrLength; i++) {

    if(arr[i] % 2 === 0) {
        evenCount++
    }
    else {
        oddCount++
    }
}

console.log(`even: ${evenCount}`, `odd: ${oddCount}`)


// "Создать массив длины больше 20 со случайным (произвольным) набором  чисел от 1 до 1000.
// Найти среднее арифметическое массива (кто не помнит, это сумма элементов последовательности деленая на количество элементов)"

let averageCount = 0
let summ = 0
for (let i = 0; i < arrLength; i++) {
    summ += arr[i]
}
averageCount = Math.floor(summ / arrLength);
console.log(`Среднее арифм: ${averageCount}`)