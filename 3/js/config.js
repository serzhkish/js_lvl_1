class Answers {
    constructor (ans1, ans2, ans3, ans4, rightAns) {
        this.ans1 = ans1;
        this.ans2 = ans2;
        this.ans3 = ans3;
        this.ans4 = ans4;
        this.rightAns = rightAns;
    }
}

class QuestionAndAnswers extends Answers {
    constructor (quest, ans1, ans2, ans3, ans4, rightAns) {
        super(ans1, ans2, ans3, ans4, rightAns);
        this.quest = quest;
    }
}

let arrayQuestionAndAnswers = [
    new QuestionAndAnswers("Сколько букв в слове 'Привет'?", "2", "7", "6", "8", "c"),
    new QuestionAndAnswers("Сколько букв в слове 'Да'?", "2", "Привет", "Пока", "8", "a"),
    new QuestionAndAnswers("4+7=", "Нет ответа", "Круг", "11", "Hello", "c"),
    new QuestionAndAnswers("Кто снимался в фильме 'Доспехи Бога'?", "Юрий Никулин", "Тимати", "Джеки Чан", "Халк", "c"),
    new QuestionAndAnswers("Прибор для измерения температуры?", "Тахометр", "Амперметр", "Рулетка", "Термометр", "d")
];