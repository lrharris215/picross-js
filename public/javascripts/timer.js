class Timer {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.intervalId;
        this.tick = this.tick.bind(this);
        this.pause = document.getElementById('pause');
        this.pause.addEventListener('click', () => {
            this.togglePause();
        });
    }

    tick() {
        this.seconds += 1;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes += 1;
        }
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours += 1;
        }
    }
    render() {
        const timer = document.getElementById('timer');

        timer.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.tick();
            this.render();
        }, 1000);
    }
    end() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    togglePause() {
        if (!this.intervalId) {
            const modal = document.getElementById(board - modal);
            modal.className = 'hidden';
            this.start();
        } else {
            this.end();
            const modal = document.getElementById(board - modal);
            modal.className = 'active';
        }
    }
}

export default Timer;
