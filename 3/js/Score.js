class Score {
    constructor() {
        this.currentScore = document.querySelector('.current-score');
        this.scoreToWin = document.querySelector('.score-to-win');
    }

    init(settings) {
        this.settings = settings;
    }

    renderCurrentScore(curScore) {
        this.currentScore.textContent = curScore;
    }

    renderScoreToWin() {
        this.scoreToWin.textContent = this.settings.winLength;
    }
}