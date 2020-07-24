
let game = {
    countTrue: 0,
    /**
     * Запускает игру
     */
    run() {
        while (true) {
            let launch = prompt("Привет, сыграем? (1 - играем, остальное - выход)");
            if (launch == "1") {
                for (let i = 0; i < arrayQuestionAndAnswers.length; i++) {
                    let y = prompt(arrayQuestionAndAnswers[i].quest + "\n a. " + arrayQuestionAndAnswers[i].ans1 + "\n b. " + arrayQuestionAndAnswers[i].ans2 + "\n c. " + arrayQuestionAndAnswers[i].ans3 + "\n d. " + arrayQuestionAndAnswers[i].ans4 + "\n 0 - Выход");
                    if (y === '0') {
                        alert(`Правильных ответов: ${this.countTrue}. Всего хорошего.`);
                        return null;
                    }
                    if (y === arrayQuestionAndAnswers[i].rightAns) {
                        this.countTrue++;
                    }
                }
                alert(`Правильных ответов: ${this.countTrue}`);
            } else {
                alert("Всего хорошего");
                return null;
            }            
        }
    },
}

game.run();