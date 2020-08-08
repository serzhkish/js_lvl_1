class Board {
    constructor() {
        this.gameFieldEl = document.querySelector('.game-field');
        this.gameOverEl = document.querySelector('.game-over');
        this.minesCountEl = document.querySelector('.mines-count');
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему
     * для работы.
     * @param {Settings} settings объект настроек.
     */
    init(settings) {
        this.settings = settings;
    }
    
    renderMap() {
        for (let row = 0; row < this.settings.rowsCount; row++) {
            let trEl = document.createElement('tr');
            this.gameFieldEl.appendChild(trEl);
            for (let  col = 0; col < this.settings.colsCount; col++) {
                let tdEl  = document.createElement('td');
                tdEl.dataset.y = row;
                tdEl.dataset.x = col;
                tdEl.dataset.num = (this.settings.colsCount * row) + col;
                tdEl.classList.add('cell');
                trEl.appendChild(tdEl);
            }
        }
        this.minesCountEl.innerText = `Мин на поле: ${this.settings.mineCount}`;
    }
}