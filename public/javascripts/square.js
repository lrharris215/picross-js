class Square {
    constructor(game) {
        this.game = game;
        this.status = 'unclicked'; // unclicked, filled, exed, maybe
        this.value = 0;
        this.handleClick = this.handleClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
        this.handleMiddleClick = this.handleMiddleClick.bind(this);
        this.square = document.createElement('div');
        this.square.addEventListener('click', this.handleClick);
        this.square.addEventListener('contextmenu', this.handleRightClick);
        this.square.addEventListener('auxclick', this.handleMiddleClick);
    }

    handleClick() {
        debugger;
        switch (this.game.mouseMode) {
            case 'cursor': {
                debugger;
                if (this.status === 'filled') {
                    this.status = 'unclicked';
                    this.value = 0;
                } else {
                    this.status = 'filled';
                    this.value = 1;
                }
                break;
            }
            case 'x-mode': {
                debugger;
                if (this.status === 'exed') {
                    this.status = 'unclicked';
                    this.value = 0;
                } else {
                    this.status = 'exed';
                    this.value = 0;
                }
                break;
            }
            case 'maybe': {
                debugger;
                if (this.status === 'maybe') {
                    this.status = 'unclicked';
                    this.value = 0;
                } else {
                    this.status = 'maybe';
                    this.value = 0;
                }
                break;
            }
            default: {
                if (this.status === 'filled') {
                    this.status = 'unclicked';
                    this.value = 0;
                } else {
                    this.status = 'filled';
                    this.value = 1;
                }
                break;
            }
        }
        console.log(this.game.mouseMode);

        this.render();
        return;
    }

    handleRightClick(e) {
        e.preventDefault();
        if (this.status === 'exed') {
            this.status = 'unclicked';
            this.value = 0;
        } else {
            this.status = 'exed';
            this.value = 0;
        }
        this.render();
        return;
    }

    handleMiddleClick(e) {
        if (e.button !== 1) return;

        if (this.status === 'maybe') {
            this.status = 'unclicked';
            this.value = 0;
        } else {
            this.status = 'maybe';
            this.value = 0;
        }
        this.render();
    }

    render() {
        this.square.className = 'square ';
        this.square.className += this.status;
        return this.square;
    }
}

export default Square;
