'use strict';

/**
 * Сложение 
 * @param {Number} a Первое слагаемое
 * @param {Number} b Второе слагаемое
 * @returns {String} Сумма параметров или сообщение об ошибке
 */
function sum(a, b) {
    if (Number.isInteger(a + b)) {
        return (a + b)
    } else {
        return "Передаваемые параметры должны быть числами"
    }
}

/**
 * Вычитание 
 * @param {Number} a Уменьшаемое
 * @param {Number} b Вычитаемое
 * @returns {String} Разность параметров или сообщение об ошибке
 */
function sub(a, b) {
    if (Number.isInteger(a - b)) {
        return (a - b)
    } else {
        return "Передаваемые параметры должны быть числами"
    }
}

/**
 * Деление 
 * @param {Number} a Делимое
 * @param {Number} b Делитель
 * @returns {String} Результат деления a на b или сообщение об ошибке
 */
function div(a, b) {
    if (b == 0)
    {
        return "Делитель не должен быть нулем"
    }
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return (a / b)
    } else {
        return "Передаваемые параметры должны быть числами"
    }
}

/**
 * Умножение 
 * @param {Number} a Множимое
 * @param {Number} b Множитель
 * @returns {String} Результат умножения a на b или сообщение об ошибке
 */
function mul(a, b) {
    if (Number.isInteger(a * b)) {
        return (a * b)
    } else {
        return "Передаваемые параметры должны быть числами"
    }
}

let a = parseInt(prompt("Введите значение a"));
let b = parseInt(prompt("Введите значение b"));

alert(`a + b = ${sum(a, b)}`);
alert(`a - b = ${sub(a, b)}`);
alert(`a / b = ${div(a, b)}`);
alert(`a * b = ${mul(a, b)}`);