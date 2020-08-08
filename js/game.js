class Game {
    init(board, settings, status) {
        this.board = board;
        this.settings = settings;
        this.status = status;
    }

    /**
     * Метод назначает обработчики на события клика на ячейках поля,
     */
    run() {
        let cellsEl = this.board.gameFieldEl.querySelectorAll('.cell');
        cellsEl.forEach(element => {
            element.addEventListener('click', this.clickOnCell.bind(this, element));
        });
    }

    clickOnCell(element) {
        if (this.status.isStatusPlaying()) {
            if (this.isGameOver(element)) {
                element.classList.add('cell-mine');
                this.openField();
                this.status.setStatusStopped();
                this.board.gameOverEl.style.color = 'red';
                this.board.gameOverEl.innerText = "Вы проиграли";
            } else {
                element.classList.add('opened-cell');
                element.innerText = this.getCountMineAround(+element.dataset.y, +element.dataset.x);
                if (this.isWin()) {
                    this.status.setStatusStopped();
                    this.board.gameOverEl.style.color = 'green';
                    this.board.gameOverEl.innerText = "Вы выиграли";  
                }
            }
        }
    }

    /**
     * Метод расставляет мины на поле
     */
    initMines() {
        this.minePositions = [];
        let maxNum = this.settings.colsCount * this.settings.rowsCount - 1;
        for (let i = 0; i < this.settings.mineCount; i++) {
            while (true) {
                let num = Math.floor(Math.random() * maxNum) + 1;
                if (!this.minePositions.includes(num)) {
                    this.minePositions.push(num);
                    break;
                }
            }
        }   
    }

    /**
     * Метод проверят выиграл ли игрок
     */
    isWin() {
        let openedCellsEl = this.board.gameFieldEl.querySelectorAll('.opened-cell');
        return (openedCellsEl.length === (this.settings.rowsCount * this.settings.colsCount - this.settings.mineCount));
    }

    /**
     * Метод проверят проиграл ли игрок
     */
    isGameOver(element) {        
        return this.minePositions.includes(+element.dataset.num);
    }

    /**
     * Метод открывает поле при проигрыше
     */
    openField() {
        let cellsEl = this.board.gameFieldEl.querySelectorAll('.cell');
        cellsEl.forEach(element => {
            if (this.isCellHaveMine(element.dataset.num)) {
                element.classList.add('cell-mine');
            } else {
                element.innerText = this.getCountMineAround(element.dataset.y, element.dataset.x);
                element.classList.add('opened-cell');
            };
        });
    }

    /**
     * Метод проверяет есть ли в поле мина
     */
    isCellHaveMine(num) {
        return this.minePositions.includes(+num);
    }

    /**
     * Метод определяет количество мин вокруг поля
     */
    getCountMineAround(y, x) {
        let minCount = 0;
        y--;
        x--;
        if ((x >= 0) && (y >= 0) && (x < this.settings.colsCount) && (y < this.settings.rowsCount)) {
            if (this.isCellHaveMine((this.settings.colsCount * y) + x)) {
                minCount++;
            }
        }
        
        x++;
        if ((x >= 0) && (y >= 0) && (x < this.settings.colsCount) && (y < this.settings.rowsCount)) {
            if (this.isCellHaveMine((this.settings.colsCount * y) + x)) {
                minCount++;
            }
        }

        x++;
        if ((x >= 0) && (y >= 0) && (x < this.settings.colsCount) && (y < this.settings.rowsCount)) {
            if (this.isCellHaveMine((this.settings.colsCount * y) + x)) {
                minCount++;
            }
        }

        y++;
        if ((x >= 0) && (y >= 0) && (x < this.settings.colsCount) && (y < this.settings.rowsCount)) {
            if (this.isCellHaveMine((this.settings.colsCount * y) + x)) {
                minCount++;
            }
        }

        y++;
        if ((x >= 0) && (y >= 0) && (x < this.settings.colsCount) && (y < this.settings.rowsCount)) {
            if (this.isCellHaveMine((this.settings.colsCount * y) + x)) {
                minCount++;
            }
        }

        x--;
        if ((x >= 0) && (y >= 0) && (x < this.settings.colsCount) && (y < this.settings.rowsCount)) {
            if (this.isCellHaveMine((this.settings.colsCount * y) + x)) {
                minCount++;
            }
        }

        x--;
        if ((x >= 0) && (y >= 0) && (x < this.settings.colsCount) && (y < this.settings.rowsCount)) {
            if (this.isCellHaveMine((this.settings.colsCount * y) + x)) {
                minCount++;
            }
        }

        y--;
        if ((x >= 0) && (y >= 0) && (x < this.settings.colsCount) && (y < this.settings.rowsCount)) {
            if (this.isCellHaveMine((this.settings.colsCount * y) + x)) {
                minCount++;
            }
        }

        return minCount;
    }
}