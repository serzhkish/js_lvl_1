class Settings {
    /**
     * @param {Object} params - Парметры игры.
     * @param {number} params.rowsCount - количество строк игрового поля.
     * @param {number} params.colsCount - количество колонок игрового поля.
     * @param {number} params.mineCount - количество мин на поле.
     * @throws {Error} если переданы не верные настройки выбрасывается
     * соответствующая ошибка.
     */
    init(params) {
        let defaultParams = {rowsCount: 5, colsCount: 5, mineCount: 3};
        Object.assign(defaultParams, params);

        if (defaultParams.rowsCount < 4 || defaultParams.rowsCount > 30) {
            throw new Error('Неверные настройки, значение rowsCount должно быть в диапазоне [4, 30].');
        }
        this.rowsCount = defaultParams.rowsCount;

        if (defaultParams.colsCount < 4 || defaultParams.colsCount > 30) {
            throw new Error('Неверные настройки, значение rowsCount должно быть в диапазоне [4, 30].');
        }
        this.colsCount = defaultParams.colsCount;

        if (defaultParams.mineCount < 1 || defaultParams.mineCount > 10) {
            throw new Error('Неверные настройки, значение mineCount должно быть в диапазоне [1, 10].');
        }
        this.mineCount = defaultParams.mineCount;
    }
}