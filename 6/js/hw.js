'use strict';

/**
 * Определяет падеж слова "рубль" в зависимости от переданного числа
 * @param {Number} sum Число, к которому нужно подобрать падеж слова "рубль" 
 */
function padezh (sum) {
    if (isNaN(sum) || sum < 0) {
        return "-1";
    } else {
        let lastNumber = String(sum).substr(String(sum).length - 2, 2);
        if (parseInt(lastNumber) >= 11 && parseInt(lastNumber) <= 19) {
            lastNumber = "0";
        } else {
            lastNumber = String(sum).substr(String(sum).length - 1, 1);
        }
        switch (lastNumber) {
            case "0":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                return "рублей";
            case "1":
                return "рубль";
            case "2":
            case "3":
            case "4":
                return "рубля";
            default:
                return "Это невозможно!";
        }
    }
}

let sum = parseInt(prompt("Какую сумму желаете положить на счет?"));

let result = padezh(sum);

if (result != "-1") {
    alert(`Ваша сумма в ${sum} ${result} успешно зачислена`);
} else {
    alert("Введена некорректная сумма");
}