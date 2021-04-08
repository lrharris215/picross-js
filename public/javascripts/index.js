import Board from './board';
import Level from './level';
import '../styles/index.scss';
import Game from './game';
import makeMouseChangeButtons from './cursor_buttons';

document.addEventListener('DOMContentLoaded', () => {
    makeMouseChangeButtons();

    const instructionButton = document.getElementById('instructions-button');
    const instructionDetail = document.getElementById('instructions-detail');

    const toggleInstructions = () => {
        if (instructionDetail.className === 'active') {
            instructionDetail.className = 'hidden';
            instructionButton.className = 'unpressed';
        } else {
            instructionDetail.className = 'active';
            instructionButton.className = 'pressed';
        }
    };
    instructionButton.addEventListener('click', () => {
        toggleInstructions();
    });

    const completedPuzzlesButton = document.getElementById('completed-puzzles-button');
    const completedPuzzlesDetail = document.getElementById('completed-puzzles-detail');

    const toggleCompletedPuzzles = () => {
        if (completedPuzzlesDetail.className === 'active') {
            completedPuzzlesDetail.className = 'hidden';
            completedPuzzlesButton.className = 'unpressed';
        } else {
            completedPuzzlesDetail.className = 'active';
            completedPuzzlesButton.className = 'pressed';
        }
    };

    completedPuzzlesButton.addEventListener('click', () => {
        toggleCompletedPuzzles();
    });

    const g = new Game();
    g.play();
});
