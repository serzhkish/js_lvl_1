'use strict';

/**
 * Сложение 
 * @param {Number} a Первое слагаемое
 * @param {Number} b Второе слагаемое
 * @returns {String} Сумма параметров или сообщение об ошибке
 */
function sum(a, b) {
    if (Number.isInteger(a + b)) {
        return (a + b);
    } else {
        return "Передаваемые параметры должны быть числами";
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
        return (a - b);
    } else {
        return "Передаваемые параметры должны быть числами";
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
        return "Делитель не должен быть нулем";
    }
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return (a / b);
    } else {
        return "Передаваемые параметры должны быть числами";
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
        return (a * b);
    } else {
        return "Передаваемые параметры должны быть числами";
    }
}

/**
 * Арифметические операции "+", "-", "/", "*" в зависимости от переданного значения
 * @param {Number} arg1 Первый операнд
 * @param {Number} arg2 Второй операнд
 * @param {String} operation Операция: "+", "-", "/", "*"
 * @returns {String} Результат выполнения выбранной операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
            break;
        case "-":
            return sub(arg1, arg2);
            break;
        case "/":
            return div(arg1, arg2);
            break;
        case "*":
            return mul(arg1, arg2);
            break;
        default:
            return "Неизвестная операция";
    }
}

let a = parseInt(prompt("Введите значение первого операнда a:"));
let b = parseInt(prompt("Введите значение второго операнда b:"));
let c = prompt("Введите операцию (+ | - | / | *):");

alert(`${a} ${c} ${b} = ${mathOperation(a, b, c)}`);