let game = {
    /**
     * Запускает игру
     */
    run() {
        while (true) {
            // Получить направление от игрока
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Game over");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    /**
     * Выполняется при открытии страницы
     */
    init() {
        console.log("o - ваше положение");
        renderer.render();
        console.log("Чтобы начать игру введите game.run() и нажмите Enter");
    }
}

game.init();