window.addEventListener('load', function() {
    let settings = new Settings();
    let board = new Board();
    let game = new Game();
    let status = new Status();
    settings.init({rowsCount: 4, colsCount: 4, mineCount: 5});
    board.init(settings);
    game.init(board, settings, status);

    board.renderMap();
    game.initMines();
    game.run();
})