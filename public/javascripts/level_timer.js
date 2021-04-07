import Timer from './timer';

class LevelTimer extends Timer {
    render() {
        let levelTimer = document.getElementById('level-timer');

        levelTimer.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    reset() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
}

export default LevelTimer;
