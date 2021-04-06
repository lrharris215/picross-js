import Board from './board';
import { tutorial, level_one } from './level_list';

class Game {
    constructor() {
        this.currentIdx = 0;
        this.levels = [tutorial, level_one];
        this.boards = [];
        this.currentLevel = this.levels[this.currentIdx];
        this.currentBoard = this.createNewBoard();
        this.incrementCurrentIdx = this.incrementCurrentIdx.bind(this);

        this.boards.push(this.currentBoard);

        this.gameOver = false;
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
        let game_over_msg = document.getElementById('game-over-msg');

        if (this.isLevelWon(this.currentBoard)) {
            level_msg.innerHTML = '<p>Congratulations, you won the level!</p>';
            setTimeout(() => {
                this.incrementCurrentIdx();
                this.play();
                level_msg.innerHTML = '';
            }, 3000);
        }
        if (this.isGameOver()) {
            game_over_msg.innerHTML = '<p>Congratulations, you beat the game!</p>';
        }
    }

    play() {
        this.currentBoard.render();
    }
}

export default Game;
