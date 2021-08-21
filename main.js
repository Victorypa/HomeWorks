// // "Создать массив длины больше 20 со случайным (произвольным) набором  чисел от 1 до 1000.
// // Задать произвольное число (можно спросить у пользователя).
// // Проверить, есть ли заданное число в данном массиве."
//
const arr = [];
const arrLength = 1000;
const maxNum = 1000
const randomNum = 100;
//
//
for (let i = 0; i < arrLength; i++) {
    arr[i] = Math.floor(Math.random() * maxNum)
    if (arr[i] === randomNum) {
        console.log(`Заданное число ${arr[i]} есть в массиве `)
    }
}

// // "Создать массив длины больше 20 со случайным (произвольным) набором  чисел от 1 до 1000.
// // Найти самый маленький и самый большой элементы массива.
// // Также вывести разницу между ними."


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


// // "Создать массив длины больше 20 со случайным (произвольным) набором  чисел от 1 до 1000.
// // Посчитать количество четных и количество нечетных элементов в массиве."
//
//
let evenCount = 0
let oddCount = 0


for (let i = 0; i < arrLength; i++) {

    if (arr[i] % 2 === 0) {
        evenCount++
    } else {
        oddCount++
    }
}

console.log(`even: ${evenCount}`, `odd: ${oddCount}`)
//
//
// // "Создать массив длины больше 20 со случайным (произвольным) набором  чисел от 1 до 1000.
// // Найти среднее арифметическое массива (кто не помнит, это сумма элементов последовательности деленая на количество элементов)"
//
let averageCount = 0
let summ = 0
for (let i = 0; i < arrLength; i++) {
    summ += arr[i]
}
averageCount = Math.floor(summ / arrLength);
console.log(`Среднее арифм: ${averageCount}`)
//
//
// // "Создать массив длины больше 20 с произвольным набором  чисел от 1 до 1000.
// // Проверить, является ли массив симметричным.
// //     Симметричный массив - это тот у которого нулевой элемент равен последнему,
// // первый - предпоследнему, второй - пред-предпоследнему и т.д
// // Например:
// //     [1234321]
// //         [32144123]
// //         [5]"
//
//
const simmetricArray = [1, 2, 8, 0, 3, 8, 2, 3]
let isSimmetric = false
for (let i = 0; i <= simmetricArray.length - i; i++) {
    if (simmetricArray[i] === simmetricArray[(simmetricArray.length - 1 - i)]) {
        isSimmetric = true
    }
    console.log(isSimmetric ? 'Симметричный' : 'Не симметричный')
}


// const array = [5, 4, 2, 1, 5, 6, 9, 7, 8, 5, 5, 5, 5, 2]
// [ПОВыШЕННАЯ СЛОЖНОСТь]
// Создать массив длины больше 20 со случайным (произвольным) набором чисел от 1 до 1000.
// Найти самый часто встречающийся элемент в массиве.


for (let i = 0; i < arrLength; i++) {
    arr[i] = Math.floor(Math.random() * maxNum)
}
let tempValues = {};
let mostFrequentEl = arr[0];
function findMostFrequent(){
    for(let i = 0; i<arr.length; i++){
        if(!tempValues[arr[i]]){ // если такого в объекте map еще нет , то добавляем ключ в объект со значением 1
            tempValues[arr[i]]=1;
        }
    else{
        // если есть , то увеличиваем значение
            ++tempValues[arr[i]];
            if(tempValues[arr[i]]>tempValues[mostFrequentEl]){
                mostFrequentEl = arr[i];
            }
        }
    }
    console.log(`Cамый часто встречающийся ${mostFrequentEl}`)
}

findMostFrequent()


// Создать массив длины больше 20, но кратной 5 (т.е. 25, 30... и т.д.) с произвольным набором  чисел от 1 до 1000.
//
// Посчитать сумму элементов этого массива в разбивке на группы по пять идущих подряд элементов.
//
//     Например, исходный массив:
//     [1,1,1,1,1,2,2,2,2,2]
//
// В нем видим две группы по пять элементов. Первая состоит из единиц, вторая - из двоек.
//     В результате мы должны получить массив из двух элементов:
//     [5,10]
// Где первый элемент - сумма первой группы, а второй - сумма второй группы.

// let currArr = [1,1,1,1,1,2,2,2,2,2,1]
let currArr = arr
let summArray = []

let groupArr = currArr.reduce((accum, item, i, arr) => {
    // если тек. item === предыдущему за ним элементу, то в накопительный массив на последний индекс пушится item
        if (item === arr[i - 1]) {
            accum[accum.length - 1].push(item);
        } else {
            // если тек. item !== предыдущему за ним элементу, то проверяем равен ли следующему, если да  то item пушится в накопительный массив в виде [[item]], если нет, то [item]
            accum.push(item === arr[i + 1] ? [item] : item);
        }
        return accum;
    }, []);

for(let i = 0; i < groupArr.length; i++) {
   let sum = 0;
    for(let j = 0; j < groupArr[i].length; j++) {
        sum +=groupArr[i][j]
    }
    summArray.push(sum)
}

console.log(`Результат суммы идущих подряд элементов: ${summArray}`)


// "Создать массив длины больше 100 с произвольным набором  чисел от 1 до 5.
// Найти в этом массиве самую длинную цепочку троек, расстояние между которыми равно 3.
//
// Например, дан массив:
//     [1,3,3,4,5,3,3,5,6,3,8,9]
//
// В это массиве у нас ДВЕ последовательности троек - красная и зелёная.
//     Ввнутри этих последовательностей расстояние между тройками одного цвета одинаково и равно 3.
// Однако красных троек вышло больше.
//
//     В результате нужно выдать только две цифры:
//     - номер начала самой длинной цепочки
// - её длинну
//
// В данном случае: 1 и 3
//
// Эту задачу в идеале можно решить за один проход. Но если не можете - решите, как сможете."

// const arr = [3,0,3,0,3,0,3,0,3];
//
// const diameters = []
//
// for(let j = 0;  j < arr.length - 1; ++j)
//     diameters.push([]);
//
// for(let i = 0;  i < arr.length; ++i)
// {
//     if(arr[i] === 3) {
//         for( let d = 0; d < diameters.length; ++d) {
//             const offset = i % ( d + 1)
//             console.log(offset)
//
//             if(!diameters[d][offset]) {
//                 diameters[d][offset] = { maxLen: 0, currLen: 0}
//             }
//         const currOff = diameters[d][offset]
//             ++currOff.currLen
//             if(currOff.maxLen < currOff.currLen) {
//                 currOff.maxLen = currOff.currLen
//             }
//         }
//     }
//  }