import Board from './board';
import Timer from './timer';
import LevelTimer from './level_timer';
import {
    tutorial,
    level_one,
    level_two,
    level_three,
    level_four,
    level_five,
    level_six,
    level_seven,
    level_eight,
} from './level_list';

class Game {
    constructor() {
        this.currentIdx = 0;
        this.levels = [
            tutorial,
            level_one,
            level_two,
            level_three,
            level_four,
            level_five,
            level_six,
            level_seven,
            level_eight,
        ];
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
        this.boardDiv = document.getElementById('board');
        this.boardDiv.addEventListener('click', () => this.update());
        this.mouseMode = 'cursor';
        this.makeMouseChangeButtons();
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
            this.currentLevel.revealPicture();

            this.totalTimer.end();
            level_msg.innerHTML = '<p>Congratulations, you won the level!</p>';
            this.levelTimer.render();
            this.levelTimer.end();
            time_msg.className = 'active';

            setTimeout(() => {
                if (this.currentIdx != this.levels.length - 1) {
                    level_msg.innerHTML = '';
                    time_msg.className = 'hidden';
                    this.totalTimer.start();
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

    makeMouseChangeButtons() {
        const cursorButton = document.getElementById('cursor-button');
        const xButton = document.getElementById('x-button');
        const maybeButton = document.getElementById('maybe-button');

        cursorButton.addEventListener('click', () => {
            if (cursorButton.className === 'pressed') {
                return;
            } else if (cursorButton.className === 'unpressed') {
                cursorButton.className = 'pressed';
                xButton.className = 'unpressed';
                maybeButton.className = 'unpressed';
                this.mouseMode = 'cursor';
            }
        });
        xButton.addEventListener('click', () => {
            if (xButton.className === 'pressed') {
                xButton.className = 'unpressed';
                cursorButton.className = 'pressed';
                this.mouseMode = 'cursor';

                return;
            } else if (xButton.className === 'unpressed') {
                xButton.className = 'pressed';
                cursorButton.className = 'unpressed';
                maybeButton.className = 'unpressed';
                this.mouseMode = 'x-mode';
            }
        });

        maybeButton.addEventListener('click', () => {
            if (maybeButton.className === 'pressed') {
                maybeButton.className = 'unpressed';
                cursorButton.className = 'pressed';
                this.mouseMode = 'cursor';

                return;
            } else if (maybeButton.className === 'unpressed') {
                maybeButton.className = 'pressed';
                cursorButton.className = 'unpressed';
                xButton.className = 'unpressed';
                this.mouseMode = 'maybe';
            }
        });
    }
}

export default Game;
