const makeMouseChangeButtons = () => {
    const cursorButton = document.getElementById('cursor-button');
    const xButton = document.getElementById('x-button');
    const maybeButton = document.getElementById('maybe-button');

    cursorButton.addEventListener('click', () => {
        const squares = document.getElementsByClassName('square');
        debugger;
        if (cursorButton.className === 'pressed') {
            return;
        } else if (cursorButton.className === 'unpressed') {
            cursorButton.className = 'pressed';
            xButton.className = 'unpressed';
            maybeButton.className = 'unpressed';
        }
    });

    xButton.addEventListener('click', () => {
        if (xButton.className === 'pressed') {
            xButton.className = 'unpressed';
            cursorButton.className = 'pressed';
            return;
        } else if (xButton.className === 'unpressed') {
            xButton.className = 'pressed';
            cursorButton.className = 'unpressed';
            maybeButton.className = 'unpressed';
        }
    });

    maybeButton.addEventListener('click', () => {
        if (maybeButton.className === 'pressed') {
            maybeButton.className = 'unpressed';
            cursorButton.className = 'pressed';
            return;
        } else if (maybeButton.className === 'unpressed') {
            maybeButton.className = 'pressed';
            cursorButton.className = 'unpressed';
            xButton.className = 'unpressed';
        }
    });
};

export default makeMouseChangeButtons;
