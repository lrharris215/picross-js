import Board from './board';
import '../styles/index.scss';


document.addEventListener("DOMContentLoaded", () => {
let board = new Board(5);
board.render();
})
