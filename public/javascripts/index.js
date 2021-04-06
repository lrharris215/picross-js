import Board from './board';
import Level from './level';
import '../styles/index.scss';
import Game from './game';
document.addEventListener('DOMContentLoaded', () => {
    let level = new Level(5, '1111111101101101010010010');
    // let row = level.rowVals();
    // let col = level.colVals();
    // let topNums = [[5], [2], [4], [1, 1, 1], [2]];
    // let leftNums = [[5], [3, 1], [1, 2], [1, 1], [1, 1]];
    // let board = new Board(5, level.topNums, level.leftNums);

    // board.render();

    const g = new Game();
    g.play();
});
