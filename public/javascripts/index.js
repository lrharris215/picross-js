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
        } else {
            instructionDetail.className = 'active';
        }
    };
    instructionButton.addEventListener('click', () => {
        toggleInstructions();
    });

    const g = new Game();
    g.play();
});
