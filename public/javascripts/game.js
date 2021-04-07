import Board from './board';
import Timer from './timer';
import LevelTimer from './level_timer';
import { tutorial, level_one, level_two } from './level_list';

class Game {
    constructor() {
        this.currentIdx = 0;
        this.levels = [tutorial, level_one, level_two];
        this.boards = [];
        this.currentLevel = this.levels[this.currentIdx];
        this.currentBoard = this.createNewBoard();
        this.incrementCurrentIdx = this.incrementCurrentIdx.bind(this);
        this.totalTimer = new Timer();
        this.boards.push(this.currentBoard);
        this.levelTimer = new LevelTimer();
        this.gameOver = false;
        this.totalTimer.start();
        this.levelTimer.start();
    }

    isLevelWon(board) {
        if (this.currentLevel.valueString === board.findCurrentVals()) {
            this.currentLevel.won = true;
            return true;
        } else {
            return false;
        }
    }

    isGameOver() {
        if (this.levels.every((level) => level.won === true)) {
            this.gameOver = true;
            return true;
        } else {
            return false;
        }
    }
    createNewBoard() {
        let b = new Board(this, this.currentLevel.size, this.currentLevel.topNums, this.currentLevel.leftNums);
        return b;
    }
    incrementCurrentIdx() {
        if (this.currentIdx + 1 < this.levels.length) {
            this.currentIdx += 1;
            this.currentLevel = this.levels[this.currentIdx];
            this.currentBoard = this.createNewBoard();
            this.boards.push(this.currentBoard);
        } else {
            this.gameOver = true;
        }
    }
    update() {
        let level_msg = document.getElementById('level-msg');
        let time_msg = document.getElementById('time-msg');

        if (this.isLevelWon(this.currentBoard)) {
            level_msg.innerHTML = '<p>Congratulations, you won the level!</p>';
            this.levelTimer.render();
            this.levelTimer.end();
            time_msg.className = 'active';

            setTimeout(() => {
                if (this.currentIdx != this.levels.length - 1) {
                    level_msg.innerHTML = '';
                    time_msg.className = 'hidden';
                    this.levelTimer.reset();
                    this.levelTimer.start();
                }
                this.incrementCurrentIdx();
                this.play();
            }, 3000);
        }
        if (this.isGameOver()) {
            this.totalTimer.end();

            level_msg.innerHTML = '<p>Congratulations, you beat the game!</p>';
            let restart = document.getElementById('restart');
            restart.className = 'active';
        }
    }

    play() {
        this.currentBoard.render();
    }

    // restart() {
    //     this.currentIdx = 0;
    //     this.currentLevel = this.levels[this.currentIdx];
    //     this.currentBoard = this.createNewBoard();
    //     this.play();
    // }
}

export default Game;
