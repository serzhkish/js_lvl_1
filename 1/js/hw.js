'use strict';

/*
    Более строгая функция интерпретации, чем parseInt()
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 */
var filterInt = function (value) {
    if (/^(\-|\+)?([0-9]+)$/.test(value))
      return Number(value);
    return NaN;
  }
/**
 * Преобразует число из диапазона [0,999] в объект, в котором в соответствующих свойствах описаны разряды числа
 * @param {*} enterNumber число из диапазона [0,999]
 */
function ConvertToCapacity(enterNumber) {
    if (isNaN(enterNumber)) {
        console.log("Ошибка. Введено НЕ целое число");
        return null;
    }
    if ((enterNumber < 0) || (enterNumber > 999)) {
        console.log("Ошибка. Введено целое число вне диапазона [0,999]");
        return null;
    }
    this.hundrens = Math.floor(enterNumber / 100);
    this.tens = Math.floor((enterNumber - this.hundrens * 100) / 10);
    this.units = enterNumber - this.hundrens * 100 - this.tens * 10;
}

let enterNumber = filterInt(prompt("Введите число в диапазоне [0,999]"));
let result = new ConvertToCapacity(enterNumber);
console.log(result);