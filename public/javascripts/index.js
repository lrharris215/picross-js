import Board from './board';
import Level from './level';
import '../styles/index.scss';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
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

    const g = new Game();
    g.play();
});
