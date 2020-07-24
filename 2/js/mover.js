let mover = {
    /**
     * Получает и отдает направление от пользователя
     * @returns {int} Направление введенное пользователем
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt("Введите число (1, 2, 3, 4, 6, 7, 8 или 9) для передвижения"));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert("Введите число (1, 2, 3, 4, 6, 7, 8 или 9)!");
                continue;
            }
            return direction;
        }
    },

    /**
     * Определяет точку, в которую перейдет игрок
     * @param {int} direction Направление движения игрока
     * @returns {{x: int, y: int}} Новая позиция игрока
    */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                if ((nextPosition.y < (config.rowsCount - 1)) && (nextPosition.x > 0)) {
                    nextPosition.y++;
                    nextPosition.x--;
                }
                break;
            case 2:
                if (nextPosition.y < (config.rowsCount - 1)) {
                    nextPosition.y++;
                }
                break;
            case 3:
                if ((nextPosition.x < (config.colsCount - 1)) && (nextPosition.y < (config.rowsCount - 1))) {
                    nextPosition.y++;
                    nextPosition.x++;
                }
                break;
            case 4:
                if (nextPosition.x > 0) {
                    nextPosition.x--;
                }
                break;
            case 6:
                if (nextPosition.x < (config.colsCount - 1)) {
                    nextPosition.x++;
                }
                break;
            case 7:
                if ((nextPosition.x > 0) && (nextPosition.y > 0)) {
                    nextPosition.y--;
                    nextPosition.x--;
                }
                break;
            case 8:
                if (nextPosition.y > 0) {
                    nextPosition.y--;
                }
                break;
            case 9:
                if ((nextPosition.x < (config.colsCount - 1)) && (nextPosition.y > 0)) {
                    nextPosition.y--;
                    nextPosition.x++;
                }
                break;
        }
        return nextPosition;
    }
}