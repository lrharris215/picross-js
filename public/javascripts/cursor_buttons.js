const makeMouseChangeButtons = () => {
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

            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                square.removeEventListener('click', square.handleRightClick);
                square.removeEventListener('click', square.handleMiddleClick);
                square.addEventListener('click', square.handleClick);
            }
        }
    });

    xButton.addEventListener('click', () => {
        const squares = document.getElementsByClassName('square');

        if (xButton.className === 'pressed') {
            xButton.className = 'unpressed';
            cursorButton.className = 'pressed';
            return;
        } else if (xButton.className === 'unpressed') {
            xButton.className = 'pressed';
            cursorButton.className = 'unpressed';
            maybeButton.className = 'unpressed';

            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                debugger;
                square.removeEventListener('click', square.handleClick);
                square.removeEventListener('click', square.handleMiddleClick);
                square.addEventListener('click', square.handleRightClick);
            }
        }
    });

    maybeButton.addEventListener('click', () => {
        const squares = document.getElementsByClassName('square');

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
